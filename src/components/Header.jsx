import React, { useState } from "react";
import { Zap, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Inicio",        href: "/"        },
  { label: "Modos de Juego",href: "#"        },
  { label: "Ranking",       href: "#"        },
  { label: "Información",   href: "/profile" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 h-20"
        style={{
          background: "rgba(6, 14, 29, 0.92)",
          borderBottom: "1px solid rgba(34, 211, 238, 0.12)",
          backdropFilter: "blur(14px)",
          fontFamily: "'Courier New', 'JetBrains Mono', monospace",
        }}
      >
        {/* ── Logo ── */}
        <a href="/" className="flex items-center gap-2 no-underline group">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{
              background: "rgba(34,211,238,0.12)",
              border: "1px solid rgba(34,211,238,0.35)",
              boxShadow: "0 0 10px rgba(34,211,238,0.15)",
            }}
          >
            <Zap size={14} style={{ color: "#22d3ee" }} />
          </div>
          <span
            className="text-sm font-bold tracking-widest uppercase"
            style={{ color: "#22d3ee", letterSpacing: "0.22em" }}
          >
            SparkLab
          </span>
        </a>

        {/* ── Nav (desktop) ── */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="relative px-4 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors duration-200 rounded-lg group no-underline"
              style={{ color: "#64748b", letterSpacing: "0.12em" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#22d3ee")}
              onMouseLeave={e => (e.currentTarget.style.color = "#64748b")}
            >
              {label}
              {/* hover underline */}
              <span
                className="absolute bottom-0.5 left-3 right-3 h-px rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                style={{ background: "linear-gradient(90deg, transparent, #22d3ee80, transparent)" }}
              />
            </a>
          ))}
        </nav>

        {/* ── Auth buttons (desktop) ── */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="/register"
            className="px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase no-underline transition-all duration-200"
            style={{
              color: "#64748b",
              border: "1px solid rgba(255,255,255,0.08)",
              letterSpacing: "0.1em",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = "#94a3b8";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = "#64748b";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
            }}
          >
            Registrarse
          </a>
          <a
            href="/login"
            className="px-4 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase no-underline transition-all duration-200"
            style={{
              background: "rgba(34,211,238,0.1)",
              color: "#22d3ee",
              border: "1px solid rgba(34,211,238,0.35)",
              letterSpacing: "0.1em",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(34,211,238,0.18)";
              e.currentTarget.style.boxShadow = "0 0 12px rgba(34,211,238,0.2)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(34,211,238,0.1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Iniciar Sesión
          </a>
        </div>

        {/* ── Hamburger (mobile) ── */}
        <button
          className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg"
          style={{ color: "#64748b", border: "1px solid rgba(255,255,255,0.08)" }}
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </header>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div
          className="md:hidden fixed top-14 left-0 right-0 z-40 px-4 py-4 flex flex-col gap-1"
          style={{
            background: "rgba(6,14,29,0.97)",
            borderBottom: "1px solid rgba(34,211,238,0.1)",
            backdropFilter: "blur(14px)",
            fontFamily: "'Courier New', monospace",
          }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase no-underline transition-colors duration-200"
              style={{ color: "#64748b", letterSpacing: "0.12em" }}
              onClick={() => setMobileOpen(false)}
              onMouseEnter={e => (e.currentTarget.style.color = "#22d3ee")}
              onMouseLeave={e => (e.currentTarget.style.color = "#64748b")}
            >
              {label}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-3 pt-3"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <a href="/register"
              className="px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase text-center no-underline"
              style={{ color: "#64748b", border: "1px solid rgba(255,255,255,0.08)", letterSpacing: "0.1em" }}>
              Registrarse
            </a>
            <a href="/login"
              className="px-4 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase text-center no-underline"
              style={{ background: "rgba(34,211,238,0.1)", color: "#22d3ee", border: "1px solid rgba(34,211,238,0.35)", letterSpacing: "0.1em" }}>
              Iniciar Sesión
            </a>
          </div>
        </div>
      )}
    </>
  );
}