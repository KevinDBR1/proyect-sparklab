import React, { useState, useEffect } from 'react'
import { 
  Trophy, Flame, Star, Medal, Calendar,
  Mail, Edit3, ChevronRight, CircuitBoard,
  Shield, Target, Clock, Zap
} from 'lucide-react'
import Header from '../components/Header'

// ── Decorative SVG components ──────────────────────────────────────────────

function HexGrid({ className }) {
  return (
    <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hexPat" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
          <polygon points="30,2 58,17 58,47 30,62 2,47 2,17" 
            stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.15"/>
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#hexPat)" />
    </svg>
  )
}

function ScanLine({ className }) {
  return (
    <div className={`${className} pointer-events-none overflow-hidden`} aria-hidden>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 animate-scan" />
    </div>
  )
}

function CircuitTrace({ className }) {
  return (
    <svg viewBox="0 0 300 80" className={className} fill="none">
      <path d="M0 40 H60 L75 25 H110 L125 40 H180 L195 55 H230 L245 40 H300"
        stroke="currentColor" strokeWidth="1" opacity="0.3" strokeDasharray="4 3"/>
      <circle cx="75" cy="25" r="3.5" fill="currentColor" opacity="0.5"/>
      <circle cx="195" cy="55" r="3.5" fill="currentColor" opacity="0.5"/>
      <circle cx="125" cy="40" r="2.5" fill="currentColor" opacity="0.35"/>
      <circle cx="245" cy="40" r="2.5" fill="currentColor" opacity="0.35"/>
      <line x1="125" y1="40" x2="125" y2="60" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
      <rect x="118" y="60" width="14" height="8" rx="1" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.25"/>
      <line x1="245" y1="40" x2="245" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
      <circle cx="245" cy="16" r="4" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.25"/>
    </svg>
  )
}

function NodeDot({ size = 6, pulse = false, color = "#22d3ee" }) {
  return (
    <span
      className={`inline-block rounded-full flex-shrink-0 ${pulse ? 'animate-pulse' : ''}`}
      style={{ width: size, height: size, background: color, boxShadow: `0 0 ${size * 1.5}px ${color}55` }}
    />
  )
}

// ── Rank badge ─────────────────────────────────────────────────────────────

const rankConfig = {
  Bronce: { color: '#cd7f32', glow: '#cd7f3240', label: 'BRONCE', icon: '◆' },
  Plata:  { color: '#94a3b8', glow: '#94a3b840', label: 'PLATA',  icon: '◆' },
  Oro:    { color: '#fbbf24', glow: '#fbbf2440', label: 'ORO',    icon: '◆' },
  Diamante: { color: '#67e8f9', glow: '#67e8f940', label: 'DIAMANTE', icon: '◆' },
}

function RankBadge({ rank }) {
  const cfg = rankConfig[rank] || rankConfig['Plata']
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase"
      style={{
        color: cfg.color,
        border: `1px solid ${cfg.color}55`,
        background: cfg.glow,
        letterSpacing: '0.15em',
        fontFamily: "'Courier New', monospace",
      }}
    >
      {cfg.icon} {cfg.label}
    </span>
  )
}

// ── Achievement card ────────────────────────────────────────────────────────

const ACHIEVEMENT_ICONS = {
  zap:     <Zap size={20} />,
  omega:   <span style={{ fontFamily: 'serif', fontSize: 18, lineHeight: 1 }}>Ω</span>,
  flame:   <Flame size={20} />,
  link:    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
  settings:<CircuitBoard size={20} />,
  book:    <Shield size={20} />,
  timer:   <Clock size={20} />,
  trophy:  <Trophy size={20} />,
}

const ACHIEVEMENT_COLORS = {
  zap:     { icon: '#fbbf24', bg: '#fbbf2415', border: '#fbbf2430' },
  omega:   { icon: '#22d3ee', bg: '#22d3ee15', border: '#22d3ee30' },
  flame:   { icon: '#f97316', bg: '#f9731615', border: '#f9731630' },
  link:    { icon: '#a78bfa', bg: '#a78bfa15', border: '#a78bfa30' },
  settings:{ icon: '#34d399', bg: '#34d39915', border: '#34d39930' },
  book:    { icon: '#60a5fa', bg: '#60a5fa15', border: '#60a5fa30' },
  timer:   { icon: '#f472b6', bg: '#f472b615', border: '#f472b630' },
  trophy:  { icon: '#fbbf24', bg: '#fbbf2415', border: '#fbbf2430' },
}

function AchievementCard({ achievement }) {
  const clr = ACHIEVEMENT_COLORS[achievement.icon] || ACHIEVEMENT_COLORS.zap
  const pct = Math.round((achievement.progress / achievement.total) * 100)
  return (
    <div
      className="group relative rounded-xl p-4 transition-all duration-300 hover:-translate-y-0.5"
      style={{
        background: achievement.unlocked ? clr.bg : 'rgba(255,255,255,0.03)',
        border: `1px solid ${achievement.unlocked ? clr.border : 'rgba(255,255,255,0.06)'}`,
      }}
    >
      {/* Glow top-line on unlocked */}
      {achievement.unlocked && (
        <div
          className="absolute top-0 left-4 right-4 h-px rounded-full opacity-60"
          style={{ background: `linear-gradient(90deg, transparent, ${clr.icon}, transparent)` }}
        />
      )}

      {/* Icon */}
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
        style={{
          color: achievement.unlocked ? clr.icon : '#475569',
          background: achievement.unlocked ? `${clr.icon}20` : 'rgba(255,255,255,0.04)',
          border: `1px solid ${achievement.unlocked ? clr.border : 'rgba(255,255,255,0.06)'}`,
        }}
      >
        {ACHIEVEMENT_ICONS[achievement.icon]}
      </div>

      {/* Title & desc */}
      <p className="text-xs font-semibold leading-tight mb-1"
        style={{ color: achievement.unlocked ? '#f1f5f9' : '#475569' }}>
        {achievement.title}
      </p>
      <p className="text-[10px] leading-snug mb-3" style={{ color: '#64748b' }}>
        {achievement.description}
      </p>

      {/* Progress bar */}
      <div className="h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${pct}%`,
            background: achievement.unlocked ? clr.icon : '#334155',
            boxShadow: achievement.unlocked ? `0 0 6px ${clr.icon}80` : 'none',
          }}
        />
      </div>

      {/* Progress fraction + XP */}
      <div className="flex justify-between items-center mt-1.5">
        <span className="text-[10px]" style={{ color: '#475569' }}>
          {achievement.progress}/{achievement.total}
        </span>
        <span className="text-[10px] font-bold" style={{ color: achievement.unlocked ? clr.icon : '#334155' }}>
          +{achievement.xpReward} XP
        </span>
      </div>
    </div>
  )
}

// ── Stat pill ──────────────────────────────────────────────────────────────

function StatPill({ icon, value, label, color = '#22d3ee' }) {
  return (
    <div
      className="flex items-center gap-3 rounded-xl px-4 py-3 transition-colors duration-200"
      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
        style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}>
        {icon}
      </div>
      <div>
        <p className="text-base font-bold leading-none" style={{ color }}>{value}</p>
        <p className="text-[10px] mt-0.5" style={{ color: '#64748b' }}>{label}</p>
      </div>
    </div>
  )
}

// ── Animated XP bar ────────────────────────────────────────────────────────

function XPBar({ current, total, level }) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => setWidth((current / total) * 100), 200)
    return () => clearTimeout(t)
  }, [current, total])

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <NodeDot size={6} pulse color="#22d3ee" />
          <span className="text-xs font-mono" style={{ color: '#64748b' }}>XP</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold" style={{ color: '#22d3ee' }}>{current}</span>
          <span className="text-xs font-mono" style={{ color: '#334155' }}>/</span>
          <span className="text-xs font-mono" style={{ color: '#475569' }}>{total}</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded font-mono font-bold ml-1"
            style={{ background: '#22d3ee18', color: '#22d3ee', border: '1px solid #22d3ee30' }}>
            LVL {level}
          </span>
        </div>
      </div>
      <div className="h-2 rounded-full relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
        {/* Base fill */}
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${width}%`,
            background: 'linear-gradient(90deg, #0e7490, #22d3ee)',
            boxShadow: '0 0 8px #22d3ee60',
          }}
        />
        {/* Shimmer */}
        <div
          className="absolute inset-0 rounded-full opacity-40 animate-shimmer"
          style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)', backgroundSize: '200% 100%' }}
        />
      </div>
    </div>
  )
}

// ── Progress module row ────────────────────────────────────────────────────

const MODULE_COLORS = {
  100: { bar: '#22d3ee', glow: '#22d3ee50', label: '#22d3ee' },
  85:  { bar: '#34d399', glow: '#34d39950', label: '#34d399' },
  60:  { bar: '#60a5fa', glow: '#60a5fa50', label: '#60a5fa' },
  40:  { bar: '#a78bfa', glow: '#a78bfa50', label: '#a78bfa' },
  20:  { bar: '#fbbf24', glow: '#fbbf2450', label: '#fbbf24' },
  0:   { bar: '#334155', glow: 'none',      label: '#475569' },
}

function getModuleColor(progress) {
  const keys = [100, 85, 60, 40, 20, 0]
  for (const k of keys) if (progress >= k) return MODULE_COLORS[k]
  return MODULE_COLORS[0]
}

function ModuleRow({ name, progress, delay = 0 }) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => setWidth(progress), 300 + delay)
    return () => clearTimeout(t)
  }, [progress, delay])
  const clr = getModuleColor(progress)
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs font-medium flex items-center gap-2" style={{ color: '#94a3b8' }}>
          <NodeDot size={4} color={clr.bar} />
          {name}
        </span>
        <span className="text-xs font-mono font-bold" style={{ color: clr.label }}>
          {progress}%
        </span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${width}%`,
            background: clr.bar,
            boxShadow: progress > 0 ? `0 0 6px ${clr.glow}` : 'none',
          }}
        />
      </div>
    </div>
  )
}

// ── MAIN PAGE ──────────────────────────────────────────────────────────────

export default function Profile() {
  const [activeTab, setActiveTab] = useState('progreso')

  const userData = {
    name: "Kevin Bermudez",
    username: "@kevin_circuits",
    email: "kevin@example.com",
    avatar: "KD",
    level: 12,
    xp: 2450,
    xpToNextLevel: 3000,
    rank: "Oro",
    badges: 8,
    dayStreak: 15,
    joinDate: "Marzo 2026"
  }

  const progressData = [
    { name: "Ley de Ohm",           progress: 100 },
    { name: "Circuitos Serie",       progress: 85  },
    { name: "Circuitos Paralelo",    progress: 60  },
    { name: "Leyes de Kirchhoff",    progress: 40  },
    { name: "Capacitores",           progress: 20  },
    { name: "Inductores",            progress: 0   },
  ]

  const achievements = [
    { id:1,  title:"Primera Chispa",       icon:"zap",      unlocked:true,  description:"Completa tu primer circuito correctamente",      condition:"Completar 1 circuito sin errores",                         progress:1,  total:1,  xpReward:50  },
    { id:2,  title:"Maestro de Ohm",       icon:"omega",    unlocked:true,  description:"Domina la Ley de Ohm",                          condition:"Completar todos los niveles del módulo Ley de Ohm",        progress:10, total:10, xpReward:200 },
    { id:3,  title:"Racha Eléctrica",      icon:"flame",    unlocked:true,  description:"Mantén una racha de 7 días",                    condition:"Realizar actividades durante 7 días consecutivos",          progress:7,  total:7,  xpReward:150 },
    { id:4,  title:"Constructor Serial",   icon:"link",     unlocked:true,  description:"Experto en circuitos serie",                    condition:"Completar 15 circuitos en serie",                          progress:15, total:15, xpReward:175 },
    { id:5,  title:"Ing. Paralelo",        icon:"settings", unlocked:false, description:"Domina los circuitos paralelo",                 condition:"Completar todos los niveles del módulo Circuitos Paralelo", progress:6,  total:10, xpReward:200 },
    { id:6,  title:"Kirchhoff Novato",     icon:"book",     unlocked:false, description:"Inicia las Leyes de Kirchhoff",                 condition:"Completar el primer nivel de Leyes de Kirchhoff",           progress:0,  total:1,  xpReward:100 },
    { id:7,  title:"Velocista",            icon:"timer",    unlocked:false, description:"Completa un nivel en menos de 30 s",            condition:"Terminar cualquier nivel en menos de 30 segundos",          progress:0,  total:1,  xpReward:75  },
    { id:8,  title:"Perfeccionista",       icon:"trophy",   unlocked:false, description:"Obtén puntuación perfecta en 5 niveles",        condition:"Completar 5 niveles con 3 estrellas",                      progress:2,  total:5,  xpReward:250 },
  ]

  const unlockedCount = achievements.filter(a => a.unlocked).length

  return (
    <div className="min-h-screen" style={{ background: '#060e1d', color: '#e2e8f0', fontFamily: "'Courier New', 'JetBrains Mono', monospace" }}>

      {/* ── Ambient background ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <HexGrid className="absolute inset-0 w-full h-full text-cyan-500 opacity-40" />
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, #0e749020 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, #1e3a5f18 0%, transparent 70%)' }} />
      </div>

      {/* ── HEADER ── */}
      <Header />

      {/* ── MAIN CONTENT ── */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 py-8">

        {/* Circuit trace accents */}
        <CircuitTrace className="absolute top-4 left-0 w-72 text-cyan-500 opacity-70" />
        <CircuitTrace className="absolute top-4 right-0 w-72 text-cyan-500 opacity-70 scale-x-[-1]" />

        <div className="flex flex-col lg:flex-row gap-6">

          {/* ═══ LEFT COLUMN ═══════════════════════════════════════════════ */}
          <div className="lg:w-2/3 flex flex-col gap-6">

            {/* Profile card */}
            <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(34,211,238,0.12)', background: '#0a1628' }}>

              {/* Banner */}
              <div className="relative h-32 overflow-hidden" style={{ background: '#0d1f3c' }}>
                {/* Grid pattern */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 128" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id="gridPat" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M40 0 L0 0 0 40" fill="none" stroke="#22d3ee" strokeWidth="0.4" opacity="0.25"/>
                    </pattern>
                  </defs>
                  <rect width="600" height="128" fill="url(#gridPat)" />
                </svg>
                {/* Horizontal circuit lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 128" fill="none">
                  <path d="M0 64 H120 L140 44 H220 L240 64 H360 L380 84 H460 L480 64 H600"
                    stroke="#22d3ee" strokeWidth="1.5" opacity="0.35" strokeDasharray="6 4"/>
                  <circle cx="140" cy="44" r="4" fill="#22d3ee" opacity="0.5"/>
                  <circle cx="380" cy="84" r="4" fill="#22d3ee" opacity="0.5"/>
                  <circle cx="240" cy="64" r="3" fill="#22d3ee" opacity="0.35"/>
                </svg>
                {/* Glow overlay */}
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(14,116,144,0.15) 0%, transparent 60%, rgba(6,14,29,0.6) 100%)' }} />
                {/* Scan line effect */}
                <ScanLine className="absolute inset-0 w-full h-full" />

                {/* Edit button (top-right) */}
                <button
                  className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all duration-200 hover:scale-105"
                  style={{ background: 'rgba(6,14,29,0.7)', border: '1px solid rgba(34,211,238,0.25)', color: '#94a3b8', backdropFilter: 'blur(8px)' }}
                >
                  <Edit3 size={12} />
                  Editar Perfil
                </button>
              </div>

              {/* Profile info */}
              <div className="relative px-6 pb-6">
                {/* Avatar */}
                <div className="absolute -top-12 left-6">
                  <div
                    className="w-24 h-24 rounded-xl flex items-center justify-center text-2xl font-bold relative"
                    style={{
                      background: 'linear-gradient(135deg, #0e2744 0%, #1e3a5f 100%)',
                      border: '3px solid #060e1d',
                      color: '#22d3ee',
                      fontFamily: "'Courier New', monospace",
                      boxShadow: '0 0 20px rgba(34,211,238,0.2)',
                    }}
                  >
                    {userData.avatar}
                    {/* online dot */}
                    <span
                      className="absolute bottom-1.5 right-1.5 w-3 h-3 rounded-full animate-pulse"
                      style={{ background: '#22d3ee', boxShadow: '0 0 6px #22d3ee' }}
                    />
                  </div>
                </div>

                {/* User info */}
                <div className="pt-14">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h1 className="text-xl font-bold" style={{ color: '#f1f5f9', fontFamily: 'sans-serif' }}>
                      {userData.name}
                    </h1>
                    <RankBadge rank={userData.rank} />
                  </div>
                  <p className="text-xs mb-3" style={{ color: '#22d3ee' }}>{userData.username}</p>
                  <div className="flex flex-wrap gap-4 text-xs" style={{ color: '#475569' }}>
                    <span className="flex items-center gap-1.5">
                      <Mail size={11} style={{ color: '#334155' }} /> {userData.email}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={11} style={{ color: '#334155' }} /> Se unió en {userData.joinDate}
                    </span>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-6 mt-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  {[
                    { key: 'progreso', label: 'Progreso' },
                    { key: 'logros',   label: `Logros (${unlockedCount}/${achievements.length})` },
                  ].map(({ key, label }) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className="pb-3 text-xs font-semibold tracking-wider uppercase relative transition-colors duration-200"
                      style={{
                        color: activeTab === key ? '#22d3ee' : '#475569',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {label}
                      {activeTab === key && (
                        <span
                          className="absolute bottom-0 left-0 right-0 h-px"
                          style={{ background: 'linear-gradient(90deg, transparent, #22d3ee, transparent)' }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Tab: Progreso ── */}
            {activeTab === 'progreso' && (
              <div className="rounded-2xl p-6" style={{ background: '#0a1628', border: '1px solid rgba(34,211,238,0.1)' }}>
                <h2 className="text-xs font-bold tracking-widest uppercase mb-5 flex items-center gap-2"
                  style={{ color: '#22d3ee', letterSpacing: '0.15em' }}>
                  <CircuitBoard size={14} />
                  Progreso por Módulo
                </h2>

                <div className="space-y-5 mb-7">
                  {progressData.map((m, i) => (
                    <ModuleRow key={i} name={m.name} progress={m.progress} delay={i * 80} />
                  ))}
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  {[
                    { value: '24',  label: 'Niveles',    color: '#22d3ee' },
                    { value: '89%', label: 'Precisión',  color: '#34d399' },
                    { value: '45',  label: 'Circuitos',  color: '#fbbf24' },
                    { value: '12h', label: 'Tiempo',     color: '#a78bfa' },
                  ].map(({ value, label, color }) => (
                    <div key={label} className="rounded-xl p-3 text-center"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <p className="text-xl font-bold font-mono" style={{ color }}>{value}</p>
                      <p className="text-[10px] mt-0.5 uppercase tracking-wider" style={{ color: '#475569' }}>{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Tab: Logros ── */}
            {activeTab === 'logros' && (
              <div className="rounded-2xl p-6" style={{ background: '#0a1628', border: '1px solid rgba(34,211,238,0.1)' }}>
                <h2 className="text-xs font-bold tracking-widest uppercase mb-5 flex items-center gap-2"
                  style={{ color: '#fbbf24', letterSpacing: '0.15em' }}>
                  <Trophy size={14} />
                  Mis Logros
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {achievements.map(a => (
                    <AchievementCard key={a.id} achievement={a} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ═══ RIGHT SIDEBAR ═══════════════════════════════════════════ */}
          <div className="lg:w-1/3 flex flex-col gap-4">

            {/* Main stats card */}
            <div className="rounded-2xl p-5 relative overflow-hidden"
              style={{ background: '#0a1628', border: '1px solid rgba(34,211,238,0.12)' }}>

              {/* Top glow strip */}
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent 10%, #22d3ee60, transparent 90%)' }} />

              {/* User mini-header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{ background: '#22d3ee18', color: '#22d3ee', border: '1px solid #22d3ee35', fontFamily: 'monospace' }}>
                  {userData.avatar}
                </div>
                <div>
                  <p className="text-xs font-semibold" style={{ color: '#e2e8f0' }}>{userData.username}</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <NodeDot size={5} color="#22d3ee" pulse />
                    <span className="text-[10px]" style={{ color: '#22d3ee' }}>Online · Nivel {userData.level}</span>
                  </div>
                </div>
              </div>

              {/* XP bar */}
              <div className="mb-5">
                <XPBar current={userData.xp} total={userData.xpToNextLevel} level={userData.level} />
              </div>

              {/* Stats 2x2 */}
              <div className="grid grid-cols-2 gap-2.5">
                <StatPill icon={<Star size={16}/>}  value={userData.xp}        label="Total XP"      color="#fbbf24" />
                <StatPill icon={<Trophy size={16}/>} value={userData.rank}      label="Rango"         color="#94a3b8" />
                <StatPill icon={<Medal size={16}/>}  value={userData.badges}    label="Insignias"     color="#60a5fa" />
                <StatPill icon={<Flame size={16}/>}  value={`${userData.dayStreak}d`} label="Racha"   color="#f97316" />
              </div>
            </div>

            {/* Recent achievements */}
            <div className="rounded-2xl p-5"
              style={{ background: '#0a1628', border: '1px solid rgba(255,255,255,0.07)' }}>
              <h3 className="text-[10px] font-bold tracking-widest uppercase mb-4 flex items-center gap-2"
                style={{ color: '#fbbf24', letterSpacing: '0.15em' }}>
                <Trophy size={12} /> Logros Recientes
              </h3>
              <div className="space-y-2.5">
                {achievements.filter(a => a.unlocked).slice(0,3).map(a => {
                  const clr = ACHIEVEMENT_COLORS[a.icon]
                  return (
                    <div key={a.id} className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-150"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${clr.icon}18`, color: clr.icon, border: `1px solid ${clr.border}` }}>
                        {ACHIEVEMENT_ICONS[a.icon]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold truncate" style={{ color: '#e2e8f0' }}>{a.title}</p>
                        <p className="text-[10px]" style={{ color: clr.icon }}>+{a.xpReward} XP</p>
                      </div>
                      <span className="text-[10px] px-1.5 py-0.5 rounded font-mono"
                        style={{ background: '#22d3ee10', color: '#22d3ee', border: '1px solid #22d3ee25' }}>
                        ✓
                      </span>
                    </div>
                  )
                })}
              </div>
              <button
                onClick={() => setActiveTab('logros')}
                className="w-full mt-3 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-1.5"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  color: '#64748b',
                  letterSpacing: '0.08em',
                }}
              >
                Ver todos los logros <ChevronRight size={12} />
              </button>
            </div>

            {/* Next objective */}
            <div className="rounded-2xl p-5 relative overflow-hidden"
              style={{ background: 'rgba(14,116,144,0.08)', border: '1px solid rgba(34,211,238,0.18)' }}>
              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
                <svg viewBox="0 0 64 64" fill="none">
                  <circle cx="64" cy="0" r="48" stroke="#22d3ee" strokeWidth="1"/>
                  <circle cx="64" cy="0" r="32" stroke="#22d3ee" strokeWidth="0.8"/>
                </svg>
              </div>
              <h3 className="text-[10px] font-bold tracking-widest uppercase mb-3 flex items-center gap-2"
                style={{ color: '#22d3ee', letterSpacing: '0.15em' }}>
                <Target size={12} /> Siguiente Objetivo
              </h3>
              <p className="text-sm font-bold mb-1 font-sans" style={{ color: '#f1f5f9' }}>
                Ingeniero en Paralelo
              </p>
              <p className="text-[11px] mb-4" style={{ color: '#475569' }}>
                Completa el módulo de Circuitos Paralelo
              </p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <div className="h-full rounded-full" style={{ width: '60%', background: 'linear-gradient(90deg, #0e7490, #22d3ee)', boxShadow: '0 0 6px #22d3ee60' }} />
                </div>
                <span className="text-xs font-mono font-bold" style={{ color: '#22d3ee' }}>60%</span>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* ── CSS animations ── */}
      <style>{`
        @keyframes scan {
          0%   { transform: translateY(-100%); opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateY(3200%); opacity: 0; }
        }
        .animate-scan { animation: scan 4s linear infinite; }

        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-shimmer { animation: shimmer 2.5s linear infinite; }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
      `}</style>
    </div>
  )
}