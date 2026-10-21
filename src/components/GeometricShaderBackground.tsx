'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  uniform float u_scroll;
  varying vec2 vUv;

  // 2D Rotation
  mat2 rotate2d(float angle) {
    return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
  }

  void main() {
    vec2 st = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
    
    // Interactive mouse offset (damped)
    vec2 mouseNorm = (u_mouse * 2.0 - 1.0);
    mouseNorm.y = -mouseNorm.y;
    
    // Continuous slow geometric drift influenced by scroll
    float scrollOffset = u_scroll * 0.0004;
    vec2 center = vec2(0.0, -0.15 + scrollOffset * 0.2);
    vec2 p = st - center;

    // Distance to center
    float dist = length(p);
    float angle = atan(p.y, p.x);

    // Dynamic rotation
    mat2 rot = rotate2d(u_time * 0.04 + scrollOffset * 0.5);
    vec2 pRot = rot * p;

    // Concentric geometric orbital rings
    float ringFrequency = 9.0;
    float rings = abs(sin(dist * ringFrequency - u_time * 0.35));
    float ringLines = smoothstep(0.97, 0.99, rings);

    // Dashed tick marks along orbits (like inspiration image)
    float dashes = sin(angle * 36.0 + u_time * 0.1);
    float dashedRings = ringLines * step(0.0, dashes);

    // Fine Cartesian coordinate grid
    vec2 gridUv = fract(st * 4.0 + vec2(0.0, scrollOffset * 2.0)) - 0.5;
    float grid = 1.0 - smoothstep(0.0, 0.02, abs(gridUv.x)) * smoothstep(0.0, 0.02, abs(gridUv.y));
    grid *= 0.04;

    // Mouse proximity glow & ripple
    float mouseDist = length(st - mouseNorm);
    float mouseWave = sin(mouseDist * 18.0 - u_time * 2.5) * exp(-mouseDist * 2.2) * 0.15;
    
    // Secondary subtle elliptical harmonics
    vec2 ellipseP = vec2(p.x * 1.4, p.y * 0.7);
    float ellipseDist = length(ellipseP);
    float ellipseRings = smoothstep(0.985, 0.998, abs(sin(ellipseDist * 6.0 + u_time * 0.15)));

    // Colors: Deep Obsidian, Electric Cyan, Neon Purple, Emerald accents
    vec3 colBase = vec3(0.027, 0.027, 0.035); // #070709
    vec3 colCyan = vec3(0.02, 0.73, 0.96);    // #06b6d4 / #38bdf8
    vec3 colPurple = vec3(0.65, 0.33, 0.97);  // #a855f7
    vec3 colEmerald = vec3(0.06, 0.72, 0.5);  // #10b981

    // Gradient mix along angle and radius
    vec3 orbitalGlow = mix(colCyan, colPurple, (sin(angle + u_time * 0.2) + 1.0) * 0.5);
    orbitalGlow = mix(orbitalGlow, colEmerald, clamp(mouseDist * 0.5, 0.0, 1.0) * 0.2);

    // Final color accumulation
    vec3 finalColor = colBase;
    finalColor += grid * vec3(0.2, 0.25, 0.3);
    finalColor += dashedRings * orbitalGlow * 0.55 * exp(-dist * 0.65);
    finalColor += ellipseRings * colPurple * 0.35 * exp(-dist * 0.75);
    finalColor += max(0.0, mouseWave) * colCyan * 0.6;

    // Central soft ambient glow
    float centerCore = exp(-dist * 1.8) * 0.12;
    finalColor += centerCore * colCyan;

    // Edge vignette
    float vignette = smoothstep(1.8, 0.5, length(st));
    finalColor *= vignette;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

export default function GeometricShaderBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false, powerPreference: 'high-performance' });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Uniforms
    const uniforms = {
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
      u_scroll: { value: 0 },
    };

    const targetMouse = new THREE.Vector2(0.5, 0.5);

    // Geometry & Material
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      depthWrite: false,
      depthTest: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Resize handler
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      uniforms.u_resolution.value.set(width, height);
    };

    // Pointer move handler (smooth lerp)
    const handlePointerMove = (e: MouseEvent) => {
      targetMouse.x = e.clientX / window.innerWidth;
      targetMouse.y = e.clientY / window.innerHeight;
    };

    // Scroll listener
    const handleScroll = () => {
      uniforms.u_scroll.value = window.scrollY || window.pageYOffset || 0;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Animation Loop
    let animationFrameId: number;
    let lastTime = performance.now();

    const render = (currentTime: number) => {
      const delta = (currentTime - lastTime) * 0.001;
      lastTime = currentTime;
      uniforms.u_time.value += Math.min(delta, 0.1);

      // Smooth mouse lerp
      uniforms.u_mouse.value.lerp(targetMouse, 0.05);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    />
  );
}
