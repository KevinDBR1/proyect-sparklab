"use client"

import React, { useState } from 'react'
import { Zap, Eye, EyeOff, Mail, Lock, Home } from 'lucide-react'

// Componente de rayo
function LightningBolt({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}

// Componente de patron de circuito PCB
function CircuitPattern({ className }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Linea 1 - Superior izquierda */}
      <path d="M50 20 L50 60 L100 60" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="50" cy="20" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="100" cy="60" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      
      {/* Linea 2 */}
      <path d="M20 100 L80 100 L80 140 L140 140" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="20" cy="100" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="140" cy="140" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      
      {/* Linea 3 */}
      <path d="M60 180 L60 220 L120 220 L120 260" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="60" cy="180" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="120" cy="260" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      
      {/* Linea 4 - Centro */}
      <path d="M150 80 L150 120 L200 120 L200 80 L250 80" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="150" cy="80" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="250" cy="80" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      
      {/* Linea 5 */}
      <path d="M180 160 L240 160 L240 200 L300 200" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="180" cy="160" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="300" cy="200" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      
      {/* Linea 6 - Derecha */}
      <path d="M280 40 L280 100 L340 100 L340 60" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="280" cy="40" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="340" cy="60" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      
      {/* Linea 7 */}
      <path d="M300 140 L360 140 L360 180" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="300" cy="140" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="360" cy="180" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      
      {/* Linea 8 - Inferior */}
      <path d="M100 300 L100 340 L160 340 L160 380" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="100" cy="300" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="160" cy="380" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      
      {/* Linea 9 */}
      <path d="M200 280 L200 320 L260 320 L260 360 L320 360" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="200" cy="280" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="320" cy="360" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      
      {/* Linea 10 */}
      <path d="M340 240 L340 300 L380 300" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="340" cy="240" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="380" cy="300" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  )
}

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4 overflow-hidden relative">
      
      {/* Patron de circuito de fondo - izquierda */}
      <CircuitPattern className="absolute top-0 left-0 w-80 h-80 text-cyan-500/20" />
      <CircuitPattern className="absolute bottom-0 left-10 w-72 h-72 text-cyan-400/15 rotate-90" />
      
      {/* Patron de circuito de fondo - derecha */}
      <CircuitPattern className="absolute top-10 right-0 w-80 h-80 text-cyan-500/20 rotate-180" />
      <CircuitPattern className="absolute bottom-0 right-0 w-72 h-72 text-cyan-400/15 -rotate-90" />

      {/* Rayos decorativos - izquierda */}
      <LightningBolt className="absolute top-20 left-16 w-8 h-8 text-cyan-400/40 animate-pulse" />
      <LightningBolt className="absolute top-48 left-8 w-6 h-6 text-cyan-300/30 animate-pulse delay-300" />
      <LightningBolt className="absolute bottom-32 left-20 w-7 h-7 text-cyan-500/35 animate-pulse delay-500" />
      <LightningBolt className="absolute bottom-60 left-6 w-5 h-5 text-cyan-400/25 animate-pulse delay-700" />

      {/* Rayos decorativos - derecha */}
      <LightningBolt className="absolute top-24 right-12 w-7 h-7 text-cyan-400/40 animate-pulse delay-200" />
      <LightningBolt className="absolute top-56 right-20 w-6 h-6 text-cyan-300/30 animate-pulse delay-400" />
      <LightningBolt className="absolute bottom-40 right-8 w-8 h-8 text-cyan-500/35 animate-pulse delay-600" />
      <LightningBolt className="absolute bottom-72 right-16 w-5 h-5 text-cyan-400/25 animate-pulse" />

      {/* Lineas de energia animadas */}
      <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse" />
      <div className="absolute top-2/3 right-0 w-40 h-px bg-gradient-to-l from-transparent via-cyan-400/50 to-transparent animate-pulse delay-300" />
      <div className="absolute top-1/2 left-0 w-24 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent animate-pulse delay-500" />

      {/* Tarjeta de Login */}
      <div className="relative w-full max-w-md z-10">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-32 bg-cyan-500/20 blur-3xl rounded-full" />
        
        <div className="relative bg-slate-800/60 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 shadow-2xl shadow-cyan-500/10">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 mb-4 shadow-lg shadow-cyan-500/30 relative overflow-hidden">
              <Zap className="w-8 h-8 text-white relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent animate-pulse" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Iniciar Sesion</h1>
            <p className="text-gray-400 text-sm">Conecta con el mundo de la electronica</p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="group">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Correo electronico
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full bg-slate-900/50 border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-600 group-focus-within:bg-cyan-400 group-focus-within:shadow-lg group-focus-within:shadow-cyan-400/50 transition-all duration-300" />
              </div>
            </div>

            {/* Password */}
            <div className="group">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Contrasena
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Tu contrasena"
                  className="w-full bg-slate-900/50 border border-gray-700 rounded-xl py-3 pl-12 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-600 group-focus-within:bg-cyan-400 group-focus-within:shadow-lg group-focus-within:shadow-cyan-400/50 transition-all duration-300" />
              </div>
            </div>

            <div className="text-right">
              <a href="#" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                Olvidaste tu contrasena?
              </a>
            </div>

            {/* Boton Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="relative w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              <span className="relative flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Conectando...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    Iniciar Sesion
                  </>
                )}
              </span>
            </button>
          </form>

          {/* Separador */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-700" />
            <span className="text-gray-500 text-sm">o continua con</span>
            <div className="flex-1 h-px bg-gray-700" />
          </div>

          {/* Botones sociales */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 bg-slate-900/50 border border-gray-700 rounded-xl py-3 text-gray-300 hover:border-cyan-500/50 hover:text-white transition-all duration-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 bg-slate-900/50 border border-gray-700 rounded-xl py-3 text-gray-300 hover:border-cyan-500/50 hover:text-white transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </button>
          </div>

          {/* Link a registro */}
          <p className="text-center text-gray-400 text-sm mt-8">
            No tienes una cuenta?{' '}
            <a href="/register" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
              Registrate aqui
            </a>
          </p>
        </div>
      </div>
      <a href="/" className="absolute top-6 left-6 z-20 w-10 h-10 rounded-xl bg-slate-800/60 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300 backdrop-blur-sm"
      title="Volver al inicio">
        <Home className="w-5 h-5" />
      </a>
    </div>
  )
}