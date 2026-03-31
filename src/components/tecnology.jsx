import React from 'react'

export default function Tecnology() {
  const technologies = [
    { name: "React", color: "text-cyan-400", icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <circle cx="12" cy="12" r="2.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
      </svg>
    )},
    { name: "Tailwind CSS", color: "text-cyan-400", icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.11 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.48 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35.98 1 2.11 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C11.61 13.15 10.48 12 7 12z"/>
      </svg>
    )},
    { name: "Supabase", color: "text-emerald-400", icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm0 8a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z"/>
      </svg>
    )},
    { name: "TypeScript", color: "text-blue-400", icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor"/>
        <text x="12" y="16" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold">TS</text>
      </svg>
    )},
    { name: "Vite", color: "text-yellow-400", icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M12 3c-1.5 5-3 8-4.5 12h3L12 21l1.5-6h3C15 11 13.5 8 12 3z"/>
      </svg>
    )},
    { name: "Vercel", color: "text-white", icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <polygon points="12,2 22,20 2,20"/>
      </svg>
    )}
  ]

  return (
    <div>
      <div className='h-1 bg-cyan-500'></div>
      
      <div className="bg-[#0f172a] py-30 px-4">
        <h2 className="text-center text-cyan-500 text-3xl font-bold mb-16">
          Tecnologías implementadas
        </h2>
        
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-slate-800/50 border border-gray-700/50 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10 hover:border-gray-600 "
            >
              <div className={`${tech.color} transition-transform duration-300 group-hover:scale-110`}>
                {tech.icon}
              </div>
              <span className="text-gray-300 text-sm font-bold">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className='h-1 bg-cyan-500'></div>
    </div>
  )
}