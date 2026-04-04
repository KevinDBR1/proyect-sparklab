import React, { useState } from 'react'
import { 
  Zap, 
  Trophy, 
  Flame, 
  Star, 
  Medal, 
  Calendar,
  Mail,
  Edit3,
  ChevronRight,
  Cpu,
  CircuitBoard
} from 'lucide-react'
import AchievementCard from '../components/ui/AchievementCard'
import Header from '../components/Header'

// Componente de tuerca decorativa
function Nut({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L3 7v10l9 5 9-5V7l-9-5z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
    </svg>
  )
}

// Componente de linea de circuito decorativa
function CircuitDecoration({ className }) {
  return (
    <svg viewBox="0 0 200 50" className={className} fill="none">
      <path 
        d="M0 25 H50 L60 15 H80 L90 25 H120 L130 35 H150 L160 25 H200" 
        stroke="currentColor" 
        strokeWidth="1.5"
        opacity="0.4"
      />
      <circle cx="60" cy="15" r="4" fill="currentColor" opacity="0.6"/>
      <circle cx="130" cy="35" r="4" fill="currentColor" opacity="0.6"/>
      <circle cx="90" cy="25" r="3" fill="currentColor" opacity="0.4"/>
    </svg>
  )
}

export default function Profile() {
  const [activeTab, setActiveTab] = useState('progreso')

  // Datos del usuario (simulados)
  const userData = {
    name: "Carlos Rodriguez",
    username: "@carlos_circuits",
    email: "carlos@example.com",
    avatar: "C",
    level: 12,
    xp: 2450,
    xpToNextLevel: 3000,
    rank: "Plata",
    badges: 8,
    dayStreak: 15,
    joinDate: "Marzo 2026"
  }

  // Progreso por modulos
  const progressData = [
    { name: "Ley de Ohm", progress: 100, color: "bg-green-500" },
    { name: "Circuitos Serie", progress: 85, color: "bg-cyan-500" },
    { name: "Circuitos Paralelo", progress: 60, color: "bg-blue-500" },
    { name: "Leyes de Kirchhoff", progress: 40, color: "bg-purple-500" },
    { name: "Capacitores", progress: 20, color: "bg-yellow-500" },
    { name: "Inductores", progress: 0, color: "bg-gray-500" },
  ]

  // Logros
  const achievements = [
    {
      id: 1,
      title: "Primera Chispa",
      icon: "zap",
      unlocked: true,
      description: "Completa tu primer circuito correctamente",
      condition: "Completar 1 circuito sin errores",
      progress: 1,
      total: 1,
      xpReward: 50
    },
    {
      id: 2,
      title: "Maestro de Ohm",
      icon: "omega",
      unlocked: true,
      description: "Domina la Ley de Ohm",
      condition: "Completar todos los niveles del modulo Ley de Ohm",
      progress: 10,
      total: 10,
      xpReward: 200
    },
    {
      id: 3,
      title: "Racha Electrica",
      icon: "flame",
      unlocked: true,
      description: "Manten una racha de 7 dias",
      condition: "Realizar actividades durante 7 dias consecutivos",
      progress: 7,
      total: 7,
      xpReward: 150
    },
    {
      id: 4,
      title: "Constructor Serial",
      icon: "link",
      unlocked: true,
      description: "Experto en circuitos serie",
      condition: "Completar 15 circuitos en serie",
      progress: 15,
      total: 15,
      xpReward: 175
    },
    {
      id: 5,
      title: "Ingeniero en Paralelo",
      icon: "settings",
      unlocked: false,
      description: "Domina los circuitos paralelo",
      condition: "Completar todos los niveles del modulo Circuitos Paralelo",
      progress: 6,
      total: 10,
      xpReward: 200
    },
    {
      id: 6,
      title: "Kirchhoff Novato",
      icon: "book",
      unlocked: false,
      description: "Inicia el aprendizaje de las Leyes de Kirchhoff",
      condition: "Completar el primer nivel de Leyes de Kirchhoff",
      progress: 0,
      total: 1,
      xpReward: 100
    },
    {
      id: 7,
      title: "Velocista",
      icon: "timer",
      unlocked: false,
      description: "Completa un nivel en menos de 30 segundos",
      condition: "Terminar cualquier nivel en menos de 30 segundos",
      progress: 0,
      total: 1,
      xpReward: 75
    },
    {
      id: 8,
      title: "Perfeccionista",
      icon: "trophy",
      unlocked: false,
      description: "Obten puntuacion perfecta en 5 niveles",
      condition: "Completar 5 niveles con 3 estrellas",
      progress: 2,
      total: 5,
      xpReward: 250
    },
  ]

  // Obtener color del rango
  const getRankColor = (rank) => {
    switch(rank) {
      case "Bronce": return "text-amber-600"
      case "Plata": return "text-gray-300"
      case "Oro": return "text-yellow-400"
      case "Diamante": return "text-cyan-400"
      default: return "text-gray-400"
    }
  }

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <Header />
      
      {/* Contenido principal */}
      <div className="relative overflow-hidden">
        {/* Decoraciones de circuito en las esquinas */}
        <CircuitDecoration className="absolute top-8 left-0 w-48 text-cyan-500" />
        <CircuitDecoration className="absolute top-8 right-0 w-48 text-cyan-500 scale-x-[-1]" />
        <CircuitDecoration className="absolute bottom-8 right-0 w-64 text-cyan-400 scale-x-[-1]" />
        
        {/* Tuercas decorativas */}
        <Nut className="absolute bottom-24 left-8 w-10 h-10 text-cyan-400/20 animate-spin-slow" />
        <Nut className="absolute bottom-16 right-16 w-12 h-12 text-cyan-500/15 animate-spin-slow delay-300" />

        <div className="max-w-6xl mx-auto px-4 py-8">
          
          {/* Layout principal: 2 columnas */}
          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* ========== COLUMNA IZQUIERDA ========== */}
            <div className="lg:w-2/3">
              
              {/* Banner */}
              <div className="relative h-36 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-t-xl overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                  <svg className="w-full h-full" viewBox="0 0 600 150">
                    <pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                      <path d="M10 40 H30 L40 30 H50 L60 40 H70" stroke="#22d3ee" strokeWidth="1.5" fill="none"/>
                      <circle cx="30" cy="40" r="3" fill="#22d3ee"/>
                      <circle cx="60" cy="40" r="3" fill="#22d3ee"/>
                      <path d="M40 10 V25" stroke="#22d3ee" strokeWidth="1.5" fill="none"/>
                      <path d="M40 55 V70" stroke="#22d3ee" strokeWidth="1.5" fill="none"/>
                    </pattern>
                    <rect width="600" height="150" fill="url(#circuit)"/>
                  </svg>
                </div>
              </div>

              {/* Seccion de perfil */}
              <div className="relative bg-[#111c32] rounded-b-xl px-6 pb-6">
                
                {/* Avatar */}
                <div className="absolute -top-16 left-6">
                  <div className="w-28 h-28 rounded-xl bg-[#1a2742] border-4 border-[#111c32] flex items-center justify-center text-4xl font-bold text-gray-400 shadow-lg">
                    {userData.avatar}
                  </div>
                </div>

                {/* Boton editar perfil */}
                <div className="flex justify-end pt-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#1a2742] border border-gray-600 rounded-lg text-white text-sm hover:border-cyan-500/50 transition-colors">
                    <Edit3 className="w-4 h-4" />
                    Editar Perfil
                  </button>
                </div>

                {/* Info del usuario */}
                <div className="mt-4">
                  <h1 className="text-2xl font-bold text-white">{userData.name}</h1>
                  <p className="text-cyan-400 text-sm">{userData.username}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 mt-3 text-gray-400 text-sm">
                    <span className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      {userData.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Se unio en {userData.joinDate}
                    </span>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-6 mt-6 border-b border-gray-700">
                  <button 
                    onClick={() => setActiveTab('progreso')}
                    className={`pb-3 text-sm font-medium transition-colors relative ${
                      activeTab === 'progreso' 
                        ? 'text-white' 
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    Progreso
                    {activeTab === 'progreso' && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"></span>
                    )}
                  </button>
                  <button 
                    onClick={() => setActiveTab('logros')}
                    className={`pb-3 text-sm font-medium transition-colors relative ${
                      activeTab === 'logros' 
                        ? 'text-white' 
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    Logros
                    {activeTab === 'logros' && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"></span>
                    )}
                  </button>
                </div>
              </div>

              {/* Contenido de tabs */}
              <div className="mt-6">
                
                {/* Tab Progreso */}
                {activeTab === 'progreso' && (
                  <div>
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <CircuitBoard className="w-5 h-5 text-cyan-400" />
                      Progreso por Modulo
                    </h2>
                    
                    <div className="bg-[#111c32] rounded-xl p-6 border border-gray-800">
                      <div className="space-y-5">
                        {progressData.map((module, index) => (
                          <div key={index}>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-gray-300 text-sm font-medium">{module.name}</span>
                              <span className="text-cyan-400 text-sm font-bold">{module.progress}%</span>
                            </div>
                            <div className="h-2 bg-[#1a2742] rounded-full overflow-hidden">
                              <div 
                                className={`h-full ${module.color} rounded-full transition-all duration-500`}
                                style={{ width: `${module.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Estadisticas */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-700">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-cyan-400">24</p>
                          <p className="text-gray-500 text-xs">Niveles Completados</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-green-400">89%</p>
                          <p className="text-gray-500 text-xs">Precision</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-yellow-400">45</p>
                          <p className="text-gray-500 text-xs">Circuitos</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-purple-400">12h</p>
                          <p className="text-gray-500 text-xs">Tiempo Jugado</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab Logros */}
                {activeTab === 'logros' && (
                  <div>
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-yellow-400" />
                      Mis Logros
                      <span className="text-sm font-normal text-gray-500 ml-1">
                        ({achievements.filter(a => a.unlocked).length}/{achievements.length})
                      </span>
                    </h2>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {achievements.map((achievement) => (
                        <AchievementCard key={achievement.id} achievement={achievement} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ========== COLUMNA DERECHA (SIDEBAR) ========== */}
            <div className="lg:w-1/3 space-y-4">
              
              {/* Card principal de stats */}
              <div className="bg-[#111c32] rounded-xl p-5 border border-gray-800">
                {/* Header con icono y nivel */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{userData.username}</p>
                    <p className="text-cyan-400 text-xs">Nivel {userData.level}</p>
                  </div>
                </div>

                {/* Barra de XP */}
                <div className="mb-5">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-500">XP</span>
                    <span className="text-cyan-400">{userData.xp} / {userData.xpToNextLevel}</span>
                  </div>
                  <div className="h-2 bg-[#1a2742] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-cyan-500 rounded-full"
                      style={{ width: `${(userData.xp / userData.xpToNextLevel) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Grid de stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-3 bg-[#1a2742] rounded-lg">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <div>
                      <p className="text-white font-bold text-sm">{userData.xp}</p>
                      <p className="text-gray-500 text-xs">Total XP</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 p-3 bg-[#1a2742] rounded-lg">
                    <Trophy className={`w-5 h-5 ${getRankColor(userData.rank)}`} />
                    <div>
                      <p className={`font-bold text-sm ${getRankColor(userData.rank)}`}>{userData.rank}</p>
                      <p className="text-gray-500 text-xs">Rango</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 p-3 bg-[#1a2742] rounded-lg">
                    <Medal className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="text-white font-bold text-sm">{userData.badges}</p>
                      <p className="text-gray-500 text-xs">Insignias</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 p-3 bg-[#1a2742] rounded-lg">
                    <Flame className="w-5 h-5 text-orange-400" />
                    <div>
                      <p className="text-white font-bold text-sm">{userData.dayStreak}</p>
                      <p className="text-gray-500 text-xs">Dias Racha</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Logros recientes */}
              <div className="bg-[#111c32] rounded-xl p-5 border border-gray-800">
                <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-yellow-400" />
                  Logros Recientes
                </h3>
                
                <div className="space-y-3">
                  {achievements.filter(a => a.unlocked).slice(0, 3).map((achievement) => (
                    <div key={achievement.id} className="flex items-center gap-3 p-2 bg-[#1a2742] rounded-lg">
                      <AchievementIconSmall icon={achievement.icon} />
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium truncate">{achievement.title}</p>
                        <p className="text-cyan-400 text-xs">+{achievement.xpReward} XP</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => setActiveTab('logros')}
                  className="w-full mt-4 py-2 bg-[#1a2742] hover:bg-[#243552] border border-gray-700 rounded-lg text-white text-sm transition-colors flex items-center justify-center gap-2"
                >
                  Ver todos los logros
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Siguiente objetivo */}
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-xl p-5 border border-cyan-500/20">
                <h3 className="text-cyan-400 font-semibold text-sm mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  Siguiente Objetivo
                </h3>
                <p className="text-white font-medium text-sm mb-1">Ingeniero en Paralelo</p>
                <p className="text-gray-400 text-xs mb-3">Completa el modulo de Circuitos Paralelo</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-[#1a2742] rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <span className="text-cyan-400 text-xs font-bold">60%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Componente para iconos pequeños de logros en el sidebar
function AchievementIconSmall({ icon }) {
  const icons = {
    zap: <Zap className="w-5 h-5 text-yellow-400" />,
    omega: <span className="text-cyan-400 font-bold">Ω</span>,
    flame: <Flame className="w-5 h-5 text-orange-400" />,
    link: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-cyan-400">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
  }
  
  return (
    <div className="w-8 h-8 rounded-lg bg-[#111c32] flex items-center justify-center">
      {icons[icon] || <Zap className="w-5 h-5 text-cyan-400" />}
    </div>
  )
}