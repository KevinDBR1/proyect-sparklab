import React from 'react'
import { FlaskConical, Trophy, BookOpen, Users } from 'lucide-react'

// Componente de tuerca
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

export default function Information() {
  const features = [
    {
      icon: FlaskConical,
      title: "Laboratorio Virtual",
      description: "Construye circuitos arrastrando componentes en un lienzo interactivo."
    },
    {
      icon: Trophy,
      title: "Gamificacion",
      description: "Gana XP, sube de nivel y desbloquea logros mientras aprendes."
    },
    {
      icon: BookOpen,
      title: "Misiones Guiadas",
      description: "Aprende paso a paso con desafios progresivos y retroalimentacion."
    },
    {
      icon: Users,
      title: "Leaderboard Global",
      description: "Compite con otros estudiantes y escala en el ranking."
    }
  ]

  return (
    <section className="relative bg-[#0f172a] py-30 px-4 overflow-hidden">
      
      {/* Tuercas girando a la izquierda */}
      <Nut className="absolute top-12 left-8 w-10 h-10 text-cyan-400/40 animate-spin-slow" />
      <Nut className="absolute bottom-16 left-16 w-8 h-8 text-cyan-500/30 animate-spin-slow delay-300" />
      <Nut className="absolute top-1/2 left-6 w-6 h-6 text-cyan-400/20 animate-spin-slow delay-500" />

      {/* Tuercas girando a la derecha */}
      <Nut className="absolute top-16 right-12 w-9 h-9 text-cyan-400/40 animate-spin-slow delay-200" />
      <Nut className="absolute bottom-12 right-8 w-7 h-7 text-cyan-500/30 animate-spin-slow delay-400" />
      <Nut className="absolute top-1/3 right-6 w-6 h-6 text-cyan-400/20 animate-spin-slow delay-600" />

      <h2 className="text-3xl md:text-4xl font-bold text-cyan-500 text-center mb-16">
        Caracteristicas
      </h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group p-6 rounded-xl border border-gray-700/50 bg-[#0f172a] hover:border-cyan-500/70 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer"
          >
            {/* Icono */}
            <div className="w-12 h-12 rounded-lg bg-slate-800 border border-gray-700/50 flex items-center justify-center mb-4 group-hover:border-cyan-500/50 group-hover:bg-slate-800/80 transition-all duration-300">
              <feature.icon className="w-6 h-6 text-cyan-400" />
            </div>
            
            {/* Titulo */}
            <h3 className="text-white font-semibold text-lg mb-2">
              {feature.title}
            </h3>
            
            {/* Descripcion */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}