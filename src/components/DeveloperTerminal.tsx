'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';
import { PRODUCTS, Product } from '@/data/products';
import { playGeometricClick, playOpenChime } from '@/utils/audio';
import confetti from 'canvas-confetti';

interface DeveloperTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (p: Product) => void;
}

interface CommandLog {
  command?: string;
  output: string | React.ReactNode;
  type?: 'input' | 'output' | 'error' | 'success';
}

export default function DeveloperTerminal({ isOpen, onClose, onSelectProduct }: DeveloperTerminalProps) {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      output: (
        <div>
          <p className="text-cyan">ARCHETYPE ANDROID CLI v2.4.0 [x86_64 / aarch64]</p>
          <p className="text-muted">Type <span className="text-white font-bold">&apos;help&apos;</span> to inspect available commands, or <span className="text-white font-bold">&apos;list&apos;</span> to view all APKs.</p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    playGeometricClick(950, 0.02, 'triangle');
    const newLogs: CommandLog[] = [...logs, { command: cmd, output: '', type: 'input' }];

    const lower = cmd.toLowerCase();
    const parts = lower.split(' ');
    const action = parts[0];

    if (action === 'help') {
      newLogs.push({
        output: (
          <div className="help-table">
            <p className="text-cyan mb-1">AVAILABLE COMMANDS:</p>
            <p><span className="cmd-name">list</span> — Output catalogue of all 8 native Android applications</p>
            <p><span className="cmd-name">inspect &lt;name&gt;</span> — Open deep architecture inspector (e.g. inspect cleanoffice)</p>
            <p><span className="cmd-name">install &lt;name&gt;</span> — Trigger direct APK download with integrity hash</p>
            <p><span className="cmd-name">stats</span> — Telemetry benchmarks, LOC, and cold-start averages</p>
            <p><span className="cmd-name">clear</span> — Purge terminal history buffer</p>
            <p><span className="cmd-name">exit</span> — Close developer terminal</p>
          </div>
        ),
      });
    } else if (action === 'list') {
      newLogs.push({
        output: (
          <div className="list-table">
            <p className="text-cyan mb-1">AVAILABLE NATIVE ENGINES:</p>
            {PRODUCTS.map((p, i) => (
              <p key={p.id}>
                <span className="text-muted">[{String(i + 1).padStart(2, '0')}]</span>{' '}
                <span className="text-white font-bold">{p.name}</span>{' '}
                <span className="text-emerald font-mono">({p.apkSize})</span> — {p.tagline}
              </p>
            ))}
          </div>
        ),
      });
    } else if (action === 'stats') {
      newLogs.push({
        output: (
          <div>
            <p className="text-cyan font-bold">SYSTEM TELEMETRY SUMMARY:</p>
            <p>• Total Applications: 8 Native Android APKs</p>
            <p>• Language Split: 64% Kotlin, 28% Rust / C++ NDK, 8% GLSL Shaders</p>
            <p>• Average Cold Start: 185 ms on Qualcomm Snapdragon 8 Gen 2</p>
            <p>• Telemetry / Tracking: 0.00 bytes (0 external analytics SDKs)</p>
            <p>• Minimum API Level: Android 8.0 (API 26) · Target: Android 15 (API 35)</p>
          </div>
        ),
      });
    } else if (action === 'inspect') {
      const target = parts[1];
      const found = PRODUCTS.find((p) => p.name.toLowerCase().includes(target || '') || p.id.includes(target || ''));
      if (found) {
        newLogs.push({
          output: `Opening deep inspector for ${found.name}...`,
          type: 'success',
        });
        setTimeout(() => {
          onSelectProduct(found);
          onClose();
        }, 500);
      } else {
        newLogs.push({
          output: `Engine not found: '${target}'. Try 'list' to see valid names.`,
          type: 'error',
        });
      }
    } else if (action === 'install') {
      const target = parts[1];
      const found = PRODUCTS.find((p) => p.name.toLowerCase().includes(target || '') || p.id.includes(target || ''));
      if (found) {
        playOpenChime();
        confetti({ particleCount: 70, spread: 60 });
        newLogs.push({
          output: `Triggering direct APK fetch for ${found.name} (${found.apkSize})... Done!`,
          type: 'success',
        });
      } else {
        newLogs.push({
          output: `Target APK '${target}' not found. Try 'install cleanoffice'.`,
          type: 'error',
        });
      }
    } else if (action === 'clear') {
      setLogs([]);
      setInputVal('');
      return;
    } else if (action === 'exit') {
      onClose();
      return;
    } else {
      newLogs.push({
        output: `Command not recognized: '${cmd}'. Type 'help' for instructions.`,
        type: 'error',
      });
    }

    setLogs(newLogs);
    setInputVal('');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="terminal-backdrop" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.25 }}
          className="terminal-window geo-border"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Terminal Title Bar */}
          <div className="term-bar font-mono">
            <div className="term-title">
              <TerminalIcon size={14} className="text-cyan" />
              <span>archetype-dev-cli // session active</span>
            </div>
            <div className="term-actions">
              <button onClick={onClose} className="term-btn">
                <X size={15} />
              </button>
            </div>
          </div>

          {/* Terminal Content Buffer */}
          <div className="term-content font-mono" onClick={() => inputRef.current?.focus()}>
            {logs.map((log, idx) => (
              <div key={idx} className={`log-line ${log.type || ''}`}>
                {log.command && (
                  <p className="cmd-prompt">
                    <span className="prompt-host">apex@android:~$</span>{' '}
                    <span className="prompt-cmd">{log.command}</span>
                  </p>
                )}
                {log.output && <div className="cmd-output">{log.output}</div>}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Active Command Input Line */}
          <form onSubmit={handleCommand} className="term-input-form font-mono">
            <span className="prompt-host">apex@android:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="term-input"
              autoFocus
              placeholder="type 'help' or 'list'..."
            />
          </form>
        </motion.div>
      </div>

      <style jsx>{`
        .terminal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          z-index: 2500;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .terminal-window {
          width: 100%;
          max-width: 760px;
          height: 480px;
          background: #09090e;
          border-radius: 6px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.95), 0 0 30px rgba(6, 182, 212, 0.15);
        }

        .term-bar {
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 16px;
          background: rgba(255, 255, 255, 0.04);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.72rem;
          color: #a1a1aa;
        }

        .term-title {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .term-btn {
          background: transparent;
          border: none;
          color: #71717a;
          cursor: pointer;
        }

        .term-btn:hover {
          color: #ffffff;
        }

        .term-content {
          flex: 1;
          overflow-y: auto;
          padding: 18px;
          font-size: 0.82rem;
          line-height: 1.6;
          color: #d4d4d8;
        }

        .log-line {
          margin-bottom: 12px;
        }

        .cmd-prompt {
          margin-bottom: 4px;
        }

        .prompt-host {
          color: #38bdf8;
          font-weight: 600;
          margin-right: 8px;
        }

        .prompt-cmd {
          color: #ffffff;
          font-weight: 700;
        }

        .cmd-output {
          color: #a1a1aa;
        }

        .log-line.error .cmd-output {
          color: #f87171;
        }

        .log-line.success .cmd-output {
          color: #34d399;
        }

        .cmd-name {
          color: #38bdf8;
          font-weight: 700;
        }

        .term-input-form {
          display: flex;
          align-items: center;
          padding: 12px 18px;
          background: rgba(0, 0, 0, 0.5);
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          font-size: 0.82rem;
        }

        .term-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #ffffff;
          font-family: inherit;
          font-size: inherit;
        }

        .text-cyan { color: #38bdf8; }
        .text-emerald { color: #34d399; }
        .text-white { color: #ffffff; }
        .text-muted { color: #71717a; }
      `}</style>
    </AnimatePresence>
  );
}
