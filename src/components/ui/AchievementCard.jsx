import React, { useState } from 'react'
import { X, Zap, Flame, Trophy, Shield, Clock, CircuitBoard } from 'lucide-react'

// ── Color palette per icon ─────────────────────────────────────────────────
const ICON_CONFIG = {
  zap:     { color: '#fbbf24', bg: '#fbbf2415', border: '#fbbf2435', label: 'Energía'    },
  omega:   { color: '#22d3ee', bg: '#22d3ee15', border: '#22d3ee35', label: 'Ohm'        },
  flame:   { color: '#f97316', bg: '#f9731615', border: '#f9731635', label: 'Racha'      },
  link:    { color: '#a78bfa', bg: '#a78bfa15', border: '#a78bfa35', label: 'Serie'      },
  settings:{ color: '#34d399', bg: '#34d39915', border: '#34d39935', label: 'Circuito'   },
  book:    { color: '#60a5fa', bg: '#60a5fa15', border: '#60a5fa35', label: 'Estudio'    },
  timer:   { color: '#f472b6', bg: '#f472b615', border: '#f472b635', label: 'Velocidad'  },
  trophy:  { color: '#fbbf24', bg: '#fbbf2415', border: '#fbbf2435', label: 'Maestría'   },
}

// ── Icon renderer ──────────────────────────────────────────────────────────
function AchievementIcon({ icon, size = 20 }) {
  const cfg = ICON_CONFIG[icon] || ICON_CONFIG.zap
  const style = { width: size, height: size, color: cfg.color, flexShrink: 0 }

  const icons = {
    zap:      <Zap style={style} />,
    omega:    <span style={{ fontSize: size * 0.9, fontFamily: 'serif', color: cfg.color, lineHeight: 1, fontWeight: 700 }}>Ω</span>,
    flame:    <Flame style={style} />,
    link:     (
      <svg viewBox="0 0 24 24" fill="none" stroke={cfg.color} strokeWidth="2" style={style}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
    settings: <CircuitBoard style={style} />,
    book:     <Shield style={style} />,
    timer:    <Clock style={style} />,
    trophy:   <Trophy style={style} />,
  }
  return icons[icon] || <Zap style={style} />
}

// ── Mini progress arc (SVG) ────────────────────────────────────────────────
function ArcProgress({ pct, color, size = 52 }) {
  const r = 22
  const cx = size / 2
  const circumference = 2 * Math.PI * r
  const dash = (pct / 100) * circumference
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ position: 'absolute', inset: 0, transform: 'rotate(-90deg)' }}>
      <circle cx={cx} cy={cx} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="2.5" />
      <circle
        cx={cx} cy={cx} r={r}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeDasharray={`${dash} ${circumference}`}
        strokeLinecap="round"
        style={{ filter: `drop-shadow(0 0 3px ${color}90)` }}
      />
    </svg>
  )
}

// ── CARD ──────────────────────────────────────────────────────────────────
export default function AchievementCard({ achievement }) {
  const [showModal, setShowModal] = useState(false)
  const cfg = ICON_CONFIG[achievement.icon] || ICON_CONFIG.zap
  const pct = Math.round((achievement.progress / achievement.total) * 100)

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="relative cursor-pointer rounded-xl p-4 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] group"
        style={{
          background: achievement.unlocked ? cfg.bg : 'rgba(255,255,255,0.025)',
          border: `1px solid ${achievement.unlocked ? cfg.border : 'rgba(255,255,255,0.06)'}`,
          fontFamily: "'Courier New', monospace",
        }}
      >
        {/* Glow top-line */}
        {achievement.unlocked && (
          <div
            className="absolute top-0 left-4 right-4 h-px rounded-full"
            style={{ background: `linear-gradient(90deg, transparent, ${cfg.color}80, transparent)` }}
          />
        )}

        {/* Arc + icon */}
        <div className="relative w-[52px] h-[52px] mx-auto mb-3">
          <ArcProgress pct={pct} color={achievement.unlocked ? cfg.color : '#334155'} />
          <div
            className="absolute inset-[6px] rounded-full flex items-center justify-center"
            style={{
              background: achievement.unlocked ? `${cfg.color}18` : 'rgba(255,255,255,0.04)',
              border: `1px solid ${achievement.unlocked ? cfg.border : 'rgba(255,255,255,0.06)'}`,
            }}
          >
            <AchievementIcon icon={achievement.icon} size={18} />
          </div>
        </div>

        {/* Title */}
        <p
          className="text-center text-[11px] font-bold leading-tight tracking-wide"
          style={{ color: achievement.unlocked ? '#f1f5f9' : '#475569', letterSpacing: '0.06em' }}
        >
          {achievement.title}
        </p>

        {/* XP reward */}
        <p
          className="text-center text-[10px] mt-1 font-mono"
          style={{ color: achievement.unlocked ? cfg.color : '#334155' }}
        >
          +{achievement.xpReward} XP
        </p>

        {/* Unlocked checkmark badge */}
        {achievement.unlocked && (
          <div
            className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center"
            style={{
              background: cfg.color,
              boxShadow: `0 0 8px ${cfg.color}80`,
            }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3.5" strokeLinecap="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        )}

        {/* Locked overlay hint */}
        {!achievement.unlocked && (
          <div
            className="absolute bottom-2 right-2 w-4 h-4 rounded opacity-30"
            style={{ color: '#64748b' }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>
        )}
      </div>

      {/* ── MODAL ─────────────────────────────────────────────────────── */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(6px)' }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative w-full max-w-sm rounded-2xl overflow-hidden"
            style={{
              background: '#0a1628',
              border: `1px solid ${cfg.border}`,
              boxShadow: `0 0 40px ${cfg.color}18`,
              fontFamily: "'Courier New', monospace",
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Top glow strip */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: `linear-gradient(90deg, transparent 5%, ${cfg.color}80, transparent 95%)` }}
            />

            {/* Header */}
            <div
              className="relative px-5 py-4 flex items-center justify-between"
              style={{
                background: `${cfg.bg}`,
                borderBottom: `1px solid ${cfg.border}`,
              }}
            >
              <div>
                <span
                  className="text-[10px] font-bold tracking-widest uppercase"
                  style={{ color: cfg.color, letterSpacing: '0.18em' }}
                >
                  {cfg.label}
                </span>
                <p className="text-sm font-bold mt-0.5" style={{ color: '#f1f5f9' }}>
                  {achievement.title}
                </p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-150"
                style={{ color: '#64748b', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <X size={14} />
              </button>
            </div>

            {/* Body */}
            <div className="p-5 space-y-4">

              {/* Icon large */}
              <div className="flex justify-center">
                <div
                  className="relative w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{
                    background: achievement.unlocked ? `${cfg.color}12` : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${achievement.unlocked ? cfg.border : 'rgba(255,255,255,0.07)'}`,
                    boxShadow: achievement.unlocked ? `0 0 24px ${cfg.color}25` : 'none',
                  }}
                >
                  <AchievementIcon icon={achievement.icon} size={36} />
                  {achievement.unlocked && (
                    <div
                      className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: cfg.color, boxShadow: `0 0 10px ${cfg.color}90` }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3.5" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-center text-xs leading-relaxed" style={{ color: '#94a3b8' }}>
                {achievement.description}
              </p>

              {/* Condition block */}
              <div
                className="rounded-xl p-4"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <p className="text-[10px] font-bold tracking-widest uppercase mb-2"
                  style={{ color: cfg.color, letterSpacing: '0.14em' }}>
                  Condición de Obtención
                </p>
                <p className="text-xs leading-relaxed mb-4" style={{ color: '#94a3b8' }}>
                  {achievement.condition}
                </p>

                {/* Progress bar */}
                <div className="flex justify-between text-[10px] mb-1.5">
                  <span style={{ color: '#475569' }}>Progreso</span>
                  <span className="font-bold" style={{ color: cfg.color }}>
                    {achievement.progress} / {achievement.total}
                  </span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${pct}%`,
                      background: achievement.unlocked
                        ? `linear-gradient(90deg, ${cfg.color}90, ${cfg.color})`
                        : '#334155',
                      boxShadow: achievement.unlocked ? `0 0 6px ${cfg.color}70` : 'none',
                    }}
                  />
                </div>
                <p
                  className="text-right text-[10px] font-bold mt-1 font-mono"
                  style={{ color: achievement.unlocked ? cfg.color : '#475569' }}
                >
                  {pct}%
                </p>
              </div>

              {/* XP reward */}
              <div
                className="rounded-xl p-4 flex items-center justify-between"
                style={{
                  background: 'rgba(251,191,36,0.06)',
                  border: '1px solid rgba(251,191,36,0.2)',
                }}
              >
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase mb-0.5"
                    style={{ color: '#fbbf24', letterSpacing: '0.14em' }}>
                    Recompensa
                  </p>
                  <div className="flex items-center gap-2">
                    <Zap size={14} style={{ color: '#fbbf24' }} />
                    <span className="text-sm font-bold" style={{ color: '#f1f5f9' }}>
                      {achievement.xpReward} XP
                    </span>
                  </div>
                </div>
                <div
                  className="text-2xl font-bold font-mono"
                  style={{ color: achievement.unlocked ? '#fbbf24' : '#334155' }}
                >
                  {achievement.unlocked ? '★' : '☆'}
                </div>
              </div>
            </div>

            {/* Footer button */}
            <div className="px-5 pb-5">
              <button
                onClick={() => setShowModal(false)}
                className="w-full py-2.5 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: `${cfg.color}18`,
                  color: cfg.color,
                  border: `1px solid ${cfg.border}`,
                  letterSpacing: '0.15em',
                  boxShadow: `0 0 0 0 ${cfg.color}`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = `${cfg.color}28`
                  e.currentTarget.style.boxShadow = `0 0 14px ${cfg.color}30`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = `${cfg.color}18`
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}