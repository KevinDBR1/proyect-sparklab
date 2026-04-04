import { Zap } from "lucide-react"

// Componente de rayo decorativo
function LightningBolt({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  )
}

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

// Componente de tornillo
function Screw({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      <line x1="12" y1="10" x2="12" y2="22" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <line x1="9" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="9" y1="16" x2="15" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="9" y1="19" x2="15" y2="19" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  )
}

// Componente de mini robot
function MiniRobot({ className }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <circle cx="16" cy="2" r="1.5" fill="currentColor" opacity="0.6" />
      <rect x="8" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.7" />
      <circle cx="20" cy="12" r="2" fill="currentColor" opacity="0.7" />
      <line x1="12" y1="15" x2="20" y2="15" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <rect x="10" y="18" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      <line x1="10" y1="22" x2="6" y2="22" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <line x1="22" y1="22" x2="26" y2="22" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <rect x="14" y="21" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.4" />
    </svg>
  )
}

export default function Banner() {
  return (
    <section className="relative min-h-[500px] md:min-h-[800px] flex items-center justify-center overflow-hidden bg-[#0f172a]">
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f172a]" />
      
      {/* Rayos izquierda */}
      <LightningBolt className="absolute top-20 left-8 w-6 h-6 text-cyan-400 animate-pulse" />
      <LightningBolt className="absolute top-40 left-16 w-8 h-8 text-cyan-300 animate-pulse delay-300" />
      <LightningBolt className="absolute bottom-32 left-12 w-5 h-5 text-cyan-500 animate-pulse delay-500" />
      <LightningBolt className="absolute top-60 left-4 w-4 h-4 text-cyan-400 animate-pulse delay-700" />
      
      {/* Rayos derecha */}
      <LightningBolt className="absolute top-24 right-10 w-7 h-7 text-cyan-400 animate-pulse delay-200" />
      <LightningBolt className="absolute top-52 right-20 w-5 h-5 text-cyan-300 animate-pulse delay-400" />
      <LightningBolt className="absolute bottom-40 right-8 w-6 h-6 text-cyan-500 animate-pulse delay-600" />
      
      {/* Tuercas y tornillos izquierda */}
      <Nut className="absolute top-32 left-24 w-8 h-8 text-cyan-400/60 animate-spin-slow" />
      <Screw className="absolute bottom-48 left-20 w-6 h-6 text-cyan-300/50 animate-bounce-slow" />
      <Nut className="absolute top-72 left-6 w-5 h-5 text-cyan-500/40 animate-spin-slow delay-500" />
      
      {/* Tuercas y tornillos derecha */}
      <Screw className="absolute top-36 right-24 w-7 h-7 text-cyan-400/50 animate-bounce-slow delay-300" />
      <Nut className="absolute bottom-52 right-16 w-6 h-6 text-cyan-300/60 animate-spin-slow delay-200" />
      <Screw className="absolute top-64 right-6 w-5 h-5 text-cyan-500/40 animate-bounce-slow delay-700" />
      
      {/* Mini robots flotantes */}
      <MiniRobot className="absolute top-16 left-[15%] w-10 h-10 text-cyan-400 animate-float" />
      <MiniRobot className="absolute bottom-24 left-[10%] w-8 h-8 text-cyan-300 animate-float delay-500" />
      <MiniRobot className="absolute top-28 right-[12%] w-9 h-9 text-cyan-400 animate-float delay-300" />
      <MiniRobot className="absolute bottom-36 right-[18%] w-7 h-7 text-cyan-500 animate-float delay-700" />
      <MiniRobot className="absolute top-1/2 left-[5%] w-6 h-6 text-cyan-400/70 animate-float delay-200" />
      <MiniRobot className="absolute top-1/3 right-[8%] w-8 h-8 text-cyan-300/80 animate-float delay-600" />
      
      {/* Lineas de circuito de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-px h-32 bg-cyan-400" />
        <div className="absolute top-1/3 left-1/4 w-24 h-px bg-cyan-400" />
        <div className="absolute bottom-1/4 right-1/4 w-px h-24 bg-cyan-400" />
        <div className="absolute bottom-1/3 right-1/4 w-32 h-px bg-cyan-400" />
      </div>
      
      {/* Contenido principal */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <span className="text-cyan-400 text-sm font-medium">Plataforma Educativa de Electrónica</span>
        </div>
        
        {/* Titulo principal */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
          <span className="text-white">Empieza a conectar con el </span>
          <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 bg-clip-text text-transparent">
            mundo de la electrónica
          </span>
        </h1>
        
        {/* Subtitulo */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
          Empieza a desarrollar habilidades en electrónica básica armando tu primer circuito
        </p>
        
        {/* Boton CTA */}
        <button className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-105">
          <Zap className="w-5 h-5" />
          Comienza a conectar
        </button>
      </div>
      
      {/* Efecto de brillo inferior */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/20 blur-3xl rounded-full" />
    </section>
  )
}