'use client';

import { useState } from 'react';

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <header className="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800 backdrop-blur-md bg-opacity-95">
            <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">

                <a href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity h-full py-2">
                    <img
                        src="/images/logo.png"
                        alt="Logo Quiosque As Guerreiras"
                        className="h-full w-auto object-contain"
                    />
                    <div className="flex flex-col justify-center hidden sm:flex">
                        <span className="text-xs bg-slate-800 text-amber-500 px-2 py-0.5 rounded-full border border-slate-700 w-max font-semibold tracking-wider uppercase mb-0.5">
                            Ilha Diana
                        </span>
                        <span className="text-[10px] text-slate-400 italic">
                            Sabor caiçara, comida de verdade!
                        </span>
                    </div>
                </a>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <a href="/" className="hover:text-amber-500 transition-colors">
                        Início
                    </a>
                    <a href="/cardapio" className="hover:text-amber-500 transition-colors">
                        Cardápio
                    </a>
                    <a href="/reservas" className="hover:text-amber-500 transition-colors">
                        Reservas
                    </a>
                    <a href="/galeria" className="hover:text-amber-500 transition-colors">
                        Galeria
                    </a>
                    <a href="/sobre" className="hover:text-amber-500 transition-colors ">
                        Nossa História
                    </a>
                </nav>

                <div className="hidden md:block">
                    <a
                        href="/reservas"
                        className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-colors shadow-lg shadow-amber-500/10 text-center block"
                    >
                        Reservar Agora
                    </a>
                </div>

                <button
                    onClick={() => setMenuAberto(!menuAberto)}
                    className="md:hidden p-2 text-slate-400 hover:text-white transition-colors focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {menuAberto ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

            </div>

            {menuAberto && (
                <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 py-4 space-y-3">
                    <a
                        href="/"
                        className="block py-2 text-slate-300 hover:text-white font-medium"
                        onClick={() => setMenuAberto(false)}
                    >
                        🏠 Início
                    </a>
                    <a
                        href="/cardapio"
                        className="block py-2 text-slate-300 hover:text-white font-medium"
                        onClick={() => setMenuAberto(false)}
                    >
                        📋 Cardápio
                    </a>
                    <a
                        href="/reservas"
                        className="block py-2 text-slate-300 hover:text-white font-medium"
                        onClick={() => setMenuAberto(false)}
                    >
                        📅 Reservas
                    </a>
                    <a
                        href="/galeria"
                        className="block py-2 text-slate-300 hover:text-white font-medium"
                        onClick={() => setMenuAberto(false)}
                    >
                        📸 Galeria
                    </a>
                    <a
                        href="/sobre"
                        className="block py-2 text-amber-400 font-semibold"
                        onClick={() => setMenuAberto(false)}
                    >
                        📖 Nossa História
                    </a>
                    <a
                        href="/reservas"
                        className="w-full bg-amber-500 text-slate-950 font-bold py-3 rounded-xl text-sm transition-colors text-center block"
                        onClick={() => setMenuAberto(false)}
                    >
                        Reservar Agora
                    </a>
                </div>
            )}
        </header>
    );
}