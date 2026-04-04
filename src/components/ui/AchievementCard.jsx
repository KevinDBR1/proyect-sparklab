import React, { useState } from 'react'
import { X, Zap, Flame, Trophy } from 'lucide-react'

// Iconos para los logros
function AchievementIcon({ icon, size = "normal", unlocked = true }) {
  const sizeClass = size === "large" ? "w-10 h-10" : "w-6 h-6"
  const colorClass = unlocked ? "" : "opacity-50"
  
  const icons = {
    zap: <Zap className={`${sizeClass} text-yellow-400 ${colorClass}`} />,
    omega: <span className={`font-bold ${size === "large" ? "text-2xl" : "text-lg"} text-cyan-400 ${colorClass}`}>Ω</span>,
    flame: <Flame className={`${sizeClass} text-orange-400 ${colorClass}`} />,
    link: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`${sizeClass} text-cyan-400 ${colorClass}`}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
    settings: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`${sizeClass} text-gray-400 ${colorClass}`}>
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    ),
    book: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`${sizeClass} text-gray-400 ${colorClass}`}>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ),
    timer: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`${sizeClass} text-gray-400 ${colorClass}`}>
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    trophy: <Trophy className={`${sizeClass} text-gray-400 ${colorClass}`} />,
  }
  
  return icons[icon] || <Zap className={`${sizeClass} text-cyan-400 ${colorClass}`} />
}

export default function AchievementCard({ achievement }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {/* Card del logro */}
      <div 
        onClick={() => setShowModal(true)}
        className={`relative group cursor-pointer p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${
          achievement.unlocked 
            ? 'bg-[#111c32] border-cyan-500/40 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10' 
            : 'bg-[#0d1525] border-gray-700/50 hover:border-gray-600'
        }`}
      >
        {/* Icono */}
        <div className={`w-14 h-14 mx-auto mb-3 rounded-xl flex items-center justify-center ${
          achievement.unlocked 
            ? 'bg-[#1a2742]' 
            : 'bg-[#151f30]'
        }`}>
          <AchievementIcon icon={achievement.icon} unlocked={achievement.unlocked} />
        </div>
        
        {/* Titulo */}
        <p className={`text-center text-xs font-medium ${
          achievement.unlocked ? 'text-white' : 'text-gray-500'
        }`}>
          {achievement.title}
        </p>

        {/* Check de completado */}
        {achievement.unlocked && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}

        {/* Barra de progreso para no completados */}
        {!achievement.unlocked && (
          <div className="mt-2 h-1 bg-[#1a2742] rounded-full overflow-hidden">
            <div 
              className="h-full bg-cyan-500/50 rounded-full"
              style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
            ></div>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="relative w-full max-w-sm bg-[#111c32] border border-cyan-500/30 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 px-5 py-4">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-bold">Detalles del Logro</h3>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-white/80 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-2 inline-block px-3 py-1 bg-[#0a1628]/50 rounded-full">
                <span className="text-cyan-200 text-sm font-medium">{achievement.title}</span>
              </div>
            </div>

            {/* Contenido */}
            <div className="p-5">
              {/* Icono grande */}
              <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                achievement.unlocked ? 'bg-[#1a2742]' : 'bg-[#151f30]'
              }`}>
                <AchievementIcon icon={achievement.icon} size="large" unlocked={achievement.unlocked} />
              </div>

              <p className="text-center text-gray-300 text-sm mb-5">{achievement.description}</p>

              {/* Condiciones */}
              <div className="bg-[#0a1628] rounded-xl p-4 mb-4">
                <p className="text-cyan-400 text-xs font-medium mb-2">Condiciones de Obtencion:</p>
                <p className="text-gray-300 text-sm">{achievement.condition}</p>
                
                <div className="mt-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-500">Progreso</span>
                    <span className="text-cyan-400 font-bold">{achievement.progress} / {achievement.total}</span>
                  </div>
                  <div className="h-2 bg-[#1a2742] rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        achievement.unlocked ? 'bg-green-500' : 'bg-cyan-500'
                      }`}
                      style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="mt-2 text-right">
                  <span className={`text-xs font-bold ${achievement.unlocked ? 'text-green-400' : 'text-cyan-400'}`}>
                    {Math.round((achievement.progress / achievement.total) * 100)}%
                  </span>
                </div>
              </div>

              {/* Recompensa */}
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                <p className="text-yellow-400 text-xs font-medium mb-1">Recompensa</p>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-white font-bold">{achievement.xpReward} XP</span>
                </div>
              </div>
            </div>

            {/* Boton cerrar */}
            <div className="px-5 pb-5">
              <button 
                onClick={() => setShowModal(false)}
                className="w-full py-2.5 bg-cyan-500 hover:bg-cyan-400 text-white font-bold rounded-xl transition-colors"
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