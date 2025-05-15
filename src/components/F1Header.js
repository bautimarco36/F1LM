import React from 'react';

const F1Header = () => {
  return (
    <header className="bg-black text-white py-6 px-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg className="w-10 h-10 text-red-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z" fill="currentColor"/>
          </svg>
          <h1 className="text-2xl font-bold">F1<span className="text-red-600">LM</span></h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-red-500 transition-colors">Inicio</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Historias</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Noticias</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Estadísticas</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default F1Header;