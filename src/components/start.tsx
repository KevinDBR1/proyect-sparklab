"use client"

import React, { useEffect, useRef, useState } from 'react'
import { Zap } from 'lucide-react'

// Componente de tuerca (reutilizado del banner)
function Nut({ className }: { className?: string }) {
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

export default function Start() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative bg-[#0f172a] py-30 px-4 overflow-hidden"
    >
      
      {/* Tuercas girando a la izquierda */}
      <Nut className="absolute top-12 left-8 w-10 h-10 text-cyan-400/40 animate-spin-slow" />
      <Nut className="absolute bottom-16 left-16 w-8 h-8 text-cyan-500/30 animate-spin-slow delay-300" />
      <Nut className="absolute top-1/2 left-6 w-6 h-6 text-cyan-400/20 animate-spin-slow delay-500" />

      {/* Tuercas girando a la derecha */}
      <Nut className="absolute top-16 right-12 w-9 h-9 text-cyan-400/40 animate-spin-slow delay-200" />
      <Nut className="absolute bottom-12 right-8 w-7 h-7 text-cyan-500/30 animate-spin-slow delay-400" />
      <Nut className="absolute top-1/3 right-6 w-6 h-6 text-cyan-400/20 animate-spin-slow delay-600" />

      {/* Contenido con animacion de entrada */}
      <div 
        className={`max-w-2xl mx-auto text-center transition-all duration-700 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          ¿Listo para{' '}
          <span className="text-cyan-400">encender</span>
          {' '}tu aprendizaje?
        </h2>
        
        <p className="text-gray-400 mb-8">
          Crea tu cuenta gratis y comienza a construir circuitos hoy.
        </p>
        
        <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
          Crear Cuenta
          <Zap className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
}