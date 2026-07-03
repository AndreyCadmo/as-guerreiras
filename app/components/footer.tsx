import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 py-12 px-4 mt-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="text-center md:text-left space-y-1">
                    <p className="text-sm font-bold text-white tracking-wide">
                        © {new Date().getFullYear()} As Guerreiras da Ilha Diana
                    </p>
                    <p className="text-xs text-slate-500">
                        Todos os direitos reservados. Comida caiçara com amor e tradição.
                    </p>
                </div>

                <div className="text-center md:text-right">
                    <p className="text-xs text-slate-500 font-medium">
                        Orgulhosamente desenvolvido por
                    </p>
                    <a
                        href="https://www.andreycadmo.dev.br"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-black text-amber-500 hover:text-amber-400 transition-colors tracking-tight inline-flex items-center gap-1 mt-0.5 group"
                    >
                        Andrey Cadmo
                        <span className="transform group-hover:translate-x-1 transition-transform inline-block">🚀</span>
                    </a>
                </div>

            </div>
        </footer>
    )
}
