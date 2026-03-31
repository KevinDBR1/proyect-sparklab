import React from 'react'
import { FlaskConical, Trophy, BookOpen, Users } from 'lucide-react'

export default function Information() {
  const features = [
    {
      icon: FlaskConical,
      title: "Laboratorio Virtual",
      description: "Construye circuitos arrastrando componentes en un lienzo interactivo."
    },
    {
      icon: Trophy,
      title: "Gamificación",
      description: "Gana XP, sube de nivel y desbloquea logros mientras aprendes."
    },
    {
      icon: BookOpen,
      title: "Misiones Guiadas",
      description: "Aprende paso a paso con desafíos progresivos y retroalimentación."
    },
    {
      icon: Users,
      title: "Leaderboard Global",
      description: "Compite con otros estudiantes y escala en el ranking."
    }
  ]

  return (
    <section className="bg-[#0f172a] py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-500 text-center mb-16">
        Características
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