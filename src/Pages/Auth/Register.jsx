"use client"

import React, { useState } from 'react'
import { Zap, Eye, EyeOff, Mail, Lock, User, CheckCircle, Home } from 'lucide-react'

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
      <path d="M50 20 L50 60 L100 60" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="50" cy="20" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="100" cy="60" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      
      <path d="M20 100 L80 100 L80 140 L140 140" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="20" cy="100" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="140" cy="140" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      
      <path d="M60 180 L60 220 L120 220 L120 260" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="60" cy="180" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="120" cy="260" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      
      <path d="M150 80 L150 120 L200 120 L200 80 L250 80" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="150" cy="80" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="250" cy="80" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      
      <path d="M180 160 L240 160 L240 200 L300 200" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="180" cy="160" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="300" cy="200" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      
      <path d="M280 40 L280 100 L340 100 L340 60" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="280" cy="40" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="340" cy="60" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      
      <path d="M300 140 L360 140 L360 180" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="300" cy="140" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="360" cy="180" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      
      <path d="M100 300 L100 340 L160 340 L160 380" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="100" cy="300" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="160" cy="380" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      
      <path d="M200 280 L200 320 L260 320 L260 360 L320 360" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="200" cy="280" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="320" cy="360" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      
      <path d="M340 240 L340 300 L380 300" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="340" cy="240" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="380" cy="300" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  )
}

// Componente de conexion de circuito
function CircuitConnection({ active }) {
  return (
    <div className="flex items-center gap-1">
      <div className={`w-2 h-2 rounded-full transition-all duration-500 ${active ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-gray-600'}`} />
      <div className={`w-8 h-0.5 transition-all duration-500 ${active ? 'bg-gradient-to-r from-cyan-400 to-teal-400' : 'bg-gray-700'}`} />
      <div className={`w-2 h-2 rounded-full transition-all duration-500 ${active ? 'bg-teal-400 shadow-lg shadow-teal-400/50' : 'bg-gray-600'}`} />
    </div>
  )
}

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  const hasName = formData.name.length > 2
  const hasEmail = formData.email.includes('@')
  const hasPassword = formData.password.length >= 6
  const passwordsMatch = formData.password === formData.confirmPassword && formData.confirmPassword.length > 0

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4 overflow-hidden relative">
      
      {/* Patron de circuito de fondo */}
      <CircuitPattern className="absolute top-0 left-0 w-96 h-96 text-cyan-500/20" />
      <CircuitPattern className="absolute bottom-0 left-5 w-80 h-80 text-cyan-400/15 rotate-90" />
      <CircuitPattern className="absolute top-5 right-0 w-96 h-96 text-cyan-500/20 rotate-180" />
      <CircuitPattern className="absolute bottom-0 right-0 w-80 h-80 text-cyan-400/15 -rotate-90" />

      {/* Rayos decorativos - izquierda */}
      <LightningBolt className="absolute top-16 left-12 w-8 h-8 text-cyan-400/40 animate-pulse" />
      <LightningBolt className="absolute top-44 left-6 w-6 h-6 text-cyan-300/30 animate-pulse delay-300" />
      <LightningBolt className="absolute bottom-36 left-16 w-7 h-7 text-cyan-500/35 animate-pulse delay-500" />
      <LightningBolt className="absolute bottom-64 left-4 w-5 h-5 text-cyan-400/25 animate-pulse delay-700" />

      {/* Rayos decorativos - derecha */}
      <LightningBolt className="absolute top-20 right-10 w-7 h-7 text-cyan-400/40 animate-pulse delay-200" />
      <LightningBolt className="absolute top-52 right-16 w-6 h-6 text-cyan-300/30 animate-pulse delay-400" />
      <LightningBolt className="absolute bottom-44 right-6 w-8 h-8 text-cyan-500/35 animate-pulse delay-600" />
      <LightningBolt className="absolute bottom-80 right-12 w-5 h-5 text-cyan-400/25 animate-pulse" />

      {/* Lineas de energia animadas */}
      <div className="absolute top-1/3 left-0 w-36 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse" />
      <div className="absolute top-3/4 right-0 w-44 h-px bg-gradient-to-l from-transparent via-cyan-400/50 to-transparent animate-pulse delay-300" />
      <div className="absolute top-1/2 left-0 w-28 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent animate-pulse delay-500" />

      {/* Tarjeta de Registro */}
      <div className="relative w-full max-w-md z-10">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-32 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 blur-3xl rounded-full" />
        
        <div className="relative bg-slate-800/60 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 shadow-2xl shadow-cyan-500/10">
          
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 mb-4 shadow-lg shadow-cyan-500/30 relative overflow-hidden">
              <Zap className="w-8 h-8 text-white relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent animate-pulse" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Crear Cuenta</h1>
            <p className="text-gray-400 text-sm">Unete al mundo de la electronica</p>
          </div>

          {/* Indicador de progreso */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500 ${hasName ? 'bg-cyan-500 shadow-lg shadow-cyan-500/30' : 'bg-slate-700 border border-gray-600'}`}>
              {hasName ? <CheckCircle className="w-4 h-4 text-white" /> : <span className="text-gray-400 text-xs">1</span>}
            </div>
            <CircuitConnection active={hasName} />
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500 ${hasEmail ? 'bg-cyan-500 shadow-lg shadow-cyan-500/30' : 'bg-slate-700 border border-gray-600'}`}>
              {hasEmail ? <CheckCircle className="w-4 h-4 text-white" /> : <span className="text-gray-400 text-xs">2</span>}
            </div>
            <CircuitConnection active={hasEmail} />
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500 ${hasPassword ? 'bg-cyan-500 shadow-lg shadow-cyan-500/30' : 'bg-slate-700 border border-gray-600'}`}>
              {hasPassword ? <CheckCircle className="w-4 h-4 text-white" /> : <span className="text-gray-400 text-xs">3</span>}
            </div>
            <CircuitConnection active={hasPassword} />
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500 ${passwordsMatch ? 'bg-teal-500 shadow-lg shadow-teal-500/30' : 'bg-slate-700 border border-gray-600'}`}>
              {passwordsMatch ? <CheckCircle className="w-4 h-4 text-white" /> : <span className="text-gray-400 text-xs">4</span>}
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nombre */}
            <div className="group">
              <label className="block text-gray-300 text-sm font-medium mb-2">Nombre completo</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="w-full bg-slate-900/50 border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
                <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300 ${hasName ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-gray-600'}`} />
              </div>
            </div>

            {/* Email */}
            <div className="group">
              <label className="block text-gray-300 text-sm font-medium mb-2">Correo electronico</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="w-full bg-slate-900/50 border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
                <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300 ${hasEmail ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-gray-600'}`} />
              </div>
            </div>

            {/* Password */}
            <div className="group">
              <label className="block text-gray-300 text-sm font-medium mb-2">Contrasena</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Minimo 6 caracteres"
                  className="w-full bg-slate-900/50 border border-gray-700 rounded-xl py-3 pl-12 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-500 hover:text-cyan-400 transition-colors">
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
                <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300 ${hasPassword ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-gray-600'}`} />
              </div>
              {/* Indicador de fuerza */}
              <div className="flex gap-1 mt-2">
                <div className={`h-1 flex-1 rounded-full transition-all duration-300 ${formData.password.length > 0 ? 'bg-red-500' : 'bg-gray-700'}`} />
                <div className={`h-1 flex-1 rounded-full transition-all duration-300 ${formData.password.length >= 4 ? 'bg-yellow-500' : 'bg-gray-700'}`} />
                <div className={`h-1 flex-1 rounded-full transition-all duration-300 ${formData.password.length >= 6 ? 'bg-cyan-500' : 'bg-gray-700'}`} />
                <div className={`h-1 flex-1 rounded-full transition-all duration-300 ${formData.password.length >= 8 ? 'bg-teal-500' : 'bg-gray-700'}`} />
              </div>
            </div>

            {/* Confirmar Password */}
            <div className="group">
              <label className="block text-gray-300 text-sm font-medium mb-2">Confirmar contrasena</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Repite tu contrasena"
                  className="w-full bg-slate-900/50 border border-gray-700 rounded-xl py-3 pl-12 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-500 hover:text-cyan-400 transition-colors">
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
                <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300 ${passwordsMatch ? 'bg-teal-400 shadow-lg shadow-teal-400/50' : 'bg-gray-600'}`} />
              </div>
            </div>

            {/* Boton Submit */}
            <button
              type="submit"
              disabled={isLoading || !passwordsMatch}
              className="relative w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden group mt-6"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Creando cuenta...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    Crear Cuenta
                  </>
                )}
              </span>
            </button>
          </form>

          {/* Link a login */}
          <p className="text-center text-gray-400 text-sm mt-6">
            Ya tienes una cuenta?{' '}
            <a href="/login" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
              Inicia sesion
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