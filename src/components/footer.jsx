import React from 'react'
import { Zap, Github, Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Modos de juego", href: "#" },
    { name: "Ranking", href: "#" },
    { name: "Información", href: "#" },
  ]

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ]

  return (
    <footer className="bg-[#0a1122] border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Contenido principal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo y descripcion */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-cyan-400" />
              <span className="text-cyan-400 text-xl font-bold">SparkLab</span>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-left max-w-xs">
              Aprende electrónica de forma interactiva y divertida.
            </p>
          </div>

          {/* Links de navegacion */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 text-sm hover:text-cyan-400 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Redes sociales */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-slate-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Linea divisora */}
        <div className="h-px bg-gray-800 my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; 2026 SparkLab. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
              Términos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}