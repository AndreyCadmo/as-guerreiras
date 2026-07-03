import Reserve from '@/app/components/reserve'
import React from 'react'

export default function Page() {
    return (
        <div className="bg-white text-slate-800 min-h-screen flex flex-col font-sans">

            <div className="bg-slate-950 py-16 px-4 text-center border-b border-slate-900 relative overflow-hidden text-white">
                <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200')] bg-cover bg-center"></div>
                <div className="relative z-10 max-w-2xl mx-auto">
                    <span className="text-amber-500 font-bold uppercase tracking-wider text-xs bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                        Agendamento Online
                    </span>
                    <h1 className="text-4xl font-black mt-3 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                        Reserve sua Mesa
                    </h1>
                    <p className="text-slate-400 mt-2 text-xs md:text-sm">
                        Garanta sua experiência caiçara com conforto e tranquilidade na Ilha Diana.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch px-4 py-16 flex-grow">

                <div className="lg:col-span-5 flex flex-col gap-6">
                    <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 shadow-xl flex flex-col justify-between flex-1">
                        <div>
                            <h3 className="font-black text-lg text-amber-400 flex items-center gap-2 mb-4">
                                🕒 Horários do Quiosque
                            </h3>
                            <ul className="space-y-4 text-xs md:text-sm text-slate-300">
                                <li className="bg-amber-500/10 text-amber-400 p-3 rounded-2xl border border-amber-500/20 text-xs leading-relaxed font-medium">
                                    Aviso Importante (Até o final de Agosto): De quarta a sexta-feira, o atendimento é realizado somente com agendamento antecipado.
                                </li>
                                <li className="flex items-start gap-2 pt-1">
                                    <span className="text-amber-500 font-bold">•</span>
                                    <p><strong>Sábados e Domingos:</strong> Atendimento normal das 11h às 23h.</p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-amber-500 font-bold">•</span>
                                    <p><strong>Almoço Caiçara:</strong> Servido completo até às 16h. Após esse horário, trabalhamos com porções, drinks e sobremesas.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 shadow-xl flex flex-col justify-between flex-1">
                        <div>
                            <h3 className="font-black text-lg text-sky-400 flex items-center gap-2 mb-3">
                                ⛵ Travessia de Barca (Santos ⇄ Ilha Diana)
                            </h3>
                            <p className="text-xs text-slate-400 mb-4 leading-relaxed font-medium">
                                O acesso à ilha é feito exclusivamente por transporte público marítimo. A barca sai de Santos (atrás da Alfândega, no Centro). Planeje sua ida com base nos horários recomendados:
                            </p>

                            <div className="space-y-4 text-xs border-t border-slate-800 pt-4">
                                <div>
                                    <p className="font-bold text-slate-200 mb-2">📅 Sábados, Domingos e Feriados:</p>
                                    <p className="text-slate-400 mb-2 font-medium">Principais saídas de Santos pela manhã:</p>
                                    <div className="flex gap-2">
                                        <span className="bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-sky-400 font-mono font-bold shadow-sm">09:30</span>
                                        <span className="bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-sky-400 font-mono font-bold shadow-sm">10:30</span>
                                        <span className="bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-sky-400 font-mono font-bold shadow-sm">13:30</span>
                                    </div>
                                </div>
                                <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 text-[11px] text-slate-400 font-medium shadow-sm leading-relaxed">
                                    💡 <strong>Dica:</strong> O passeio de barco até a ilha é lindo e super tranquilo. Para não perder a viagem, chegue ao píer com 15 minutos de antecedência!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7 w-full flex">
                    <React.Suspense fallback={
                        <div className="bg-slate-900 w-full h-full min-h-[500px] rounded-3xl animate-pulse border border-slate-800 flex items-center justify-center text-slate-400 font-medium">
                            Carregando o formulário de reservas...
                        </div>
                    }>
                        <Reserve />
                    </React.Suspense>
                </div>

            </div>
        </div>
    )
}