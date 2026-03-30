import React from "react";

function Header() {
  return (
    <header className="bg-[#223153] text-white px-11 py-[20px] flex justify-between items-center sticky top-0 z-50 shadow-lg">
      <div>
        <h1 className="text-cyan-400 m-0">SparkLab</h1>
      </div>

      <nav>
        <ul className="list-none flex gap-4 m-0">
          <a href="#" className="px-4 py-2 rounded-lg hover:bg-cyan-500 transition-colors">Inicio</a>
          <a href="#" className="px-4 py-2 rounded-lg hover:bg-cyan-500 transition-colors">Modos de juego</a>
          <a href="#" className="px-4 py-2 rounded-lg hover:bg-cyan-500 transition-colors">Ranking</a>
          <a href="#" className="px-4 py-2 rounded-lg hover:bg-cyan-500 transition-colors">Informacion</a>
        </ul>
      </nav>

      <div className="flex gap-4">
        <a href="#" className="px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">Registrarse</a>
        <a href="#" className="px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">Iniciar Sesion</a>
      </div>
    </header>
  );
}

export default Header;
