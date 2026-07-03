import React from 'react'

export default function About() {
    return (
        <div className="bg-slate-50 text-slate-800 min-h-screen font-sans">

            <div className="bg-slate-900 text-white py-20 px-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center"></div>
                <div className="relative z-10 max-w-2xl mx-auto">
                    <span className="text-amber-500 font-semibold uppercase tracking-wider text-sm">Conheça nossa trajetória</span>
                    <h1 className="text-4xl md:text-5xl font-black mt-2">Nossa História</h1>
                    <p className="text-slate-400 mt-4 text-sm md:text-base">
                        Uma caminhada feita de trabalho, family, perseverança e fé na Ilha Diana.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

                <div className="lg:col-span-2 flex flex-col justify-between gap-6 h-full">

                    <div className="text-base leading-relaxed text-slate-700 bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-slate-100 flex-grow">
                        <p className="font-semibold text-lg text-slate-900">
                            Toda grande história começa com um sonho. A nossa nasceu da coragem, da fé e da vontade de nunca desistir.
                        </p>

                        <p className="mt-4">
                            Em 2005, em meio às dificuldades financeiras, surgiu uma ideia inesperada assistindo a um programa da Palmirinha: uma receita de massa de pastel caseira. Sem dinheiro para investir, nossa eterna guerreira, a **Vó Lourdes**, acreditou no plano e nos ajudou a comprar os primeiros ingredientes. Naquela noite, com uma pequena mesa na porta de casa, vendemos absolutamente tudo.
                        </p>

                        <blockquote className="border-l-4 border-amber-500 pl-4 my-6 italic text-slate-600 bg-amber-50/50 py-3 pr-2 rounded-r-lg">
                            "Filha, que orgulho! Eu sabia que você conseguiria. Mesmo com medo, você foi e fez. Você não me pediu o peixe, pediu ajuda com a vara."
                            <span className="block text-xs font-bold mt-1 text-slate-500">— Vó Lourdes</span>
                        </blockquote>

                        <p className="mt-4">
                            Após a mudança para a Ilha Diana, o sonho ficou adormecido até 2007, quando voltamos a vender bolos na Festa de Agosto. Em 2009, encaramos o desafio de assumir a organização da Festa do Bom Jesus. Na época éramos apenas "As Guerreiras", hoje transformadas em uma comissão unida.
                        </p>

                        <p className="mt-4">
                            Passamos por provações severas, como em 2020, enfrentando três cirurgias complexas e meses sem andar. Mas a fé nos manteve de pé. Em 2023, decidimos manter a barraca funcionando após os festejos, oficializando o **Quiosque As Guerreiras**. E em novembro de 2024, inauguramos o nosso espaço físico definitivo.
                        </p>

                        <p className="pt-6 mt-6 border-t border-slate-100 text-sm text-slate-500">
                            O nome do quiosque é uma homenagem eterna à Vó Lourdes, que sempre nos chamava de suas guerreiras. Hoje, recebemos cada visitante com muito carinho, buscando evoluir com humildade.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 min-h-[112px]">
                        <div>
                            <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2 mb-1.5">
                                🐾 Espaço Pet Friendly
                            </h3>
                            <p className="text-xs text-slate-600 max-w-xl leading-relaxed">
                                Adoramos receber visitantes de quatro patas! Mas fique atento às regras municipais de transporte da barca: permitido apenas animais de pequeno porte (até 10kg) e obrigatoriamente dentro de caixas de transporte adequadas.
                            </p>
                        </div>
                        <span className="text-2xl self-center hidden md:block select-none">🐶</span>
                    </div>

                </div>

                <div className="space-y-6 flex flex-col justify-between h-full">

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex-1 content-center">
                        <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2 mb-3">
                            🕒 Horário de Funcionamento
                        </h3>
                        <ul className="space-y-2.5 text-sm text-slate-600">
                            <li className="flex justify-between items-center border-b border-slate-100 pb-1.5">
                                <span>📅 Quarta a Sexta:</span>
                                <span className="text-slate-900 font-bold font-mono">11:00 – 23:30</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-slate-100 pb-1.5">
                                <span>📅 Sábado e Domingo:</span>
                                <span className="text-slate-900 font-bold font-mono">11:00 – 23:00</span>
                            </li>
                            <li className="flex justify-between items-center text-slate-400">
                                <span>❌ Segunda e Terça:</span>
                                <span className="font-semibold">Fechado</span>
                            </li>
                            <li className="text-xs text-slate-500 pt-2 leading-relaxed">
                                🍳 <strong>Almoço Completo:</strong> Servido até às 16h. Após esse horário, servimos porções e sobremesas.
                            </li>
                        </ul>
                    </div>

                    <div className="bg-amber-500 text-slate-950 p-6 rounded-2xl shadow-sm border border-amber-600 flex-1">
                        <h3 className="font-black text-lg flex items-center gap-2 mb-3">
                            ✨ Lazer & Experiências
                        </h3>
                        <ul className="space-y-3 text-xs md:text-sm font-medium">
                            <li className="flex items-start gap-2">
                                <span>🚤</span>
                                <div><strong>Passeio de Barco:</strong> Apenas R$ 35 por pessoa pela região.</div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>📸</span>
                                <div><strong>Turismo Monitorado:</strong> Conheça a história e pontos turísticos.</div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>🍽️</span>
                                <div><strong>Eventos & Grupos:</strong> Cardápios especiais sob agendamento.</div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-sm flex-1">
                        <h3 className="font-bold text-lg text-amber-400 flex items-center gap-2 mb-2">
                            ⛵ Como Chegar (Travessia)
                        </h3>
                        <p className="text-xs text-slate-300 mb-3">
                            O acesso é feito por barca pública (atrás da Alfândega, Centro de Santos).
                        </p>
                        <div className="space-y-3 text-xs">
                            <p className="font-semibold text-slate-200 border-b border-slate-800 pb-1">Horários recomendados:</p>
                            <div className="space-y-1.5 text-slate-400 font-medium">
                                <div>• <strong>Quarta a Sexta:</strong> 10:00 ou 12:00</div>
                                <div>• <strong>Sábados:</strong> 09:00, 10:00 ou 12:00</div>
                                <div>• <strong>Domingos/Feriados:</strong> 09:30, 10:30 ou 13:30</div>
                            </div>
                            <p className="text-[11px] text-amber-400 leading-relaxed border-t border-slate-800 pt-2">
                                ➡️ Saindo da barca, siga pela ponte amarela até o fim, vire à direita e caminhe 100 metros!
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 pb-16">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <div className="mb-4">
                        <h3 className="font-bold text-xl text-slate-900 flex items-center gap-2">
                            📍 Localização no Mapa
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">
                            Caso queira explorar o entorno do Quiosque As Guerreiras na Ilha Diana.
                        </p>
                    </div>
                    <div className="w-full h-[450px] overflow-hidden rounded-xl border border-slate-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d488.10198184964247!2d-46.30810390911286!3d-23.915442089635707!2m3!1f141.56249999999997!2f0!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x94ce0564464af2c9%3A0x2c48bee10b558dc3!2sAs%20Guerreiras%20Restaurante%20na%20Ilha%20Diana!5e1!3m2!1spt-BR!2sbr!4v1783031223706!5m2!1spt-BR!2sbr"
                            className="w-full h-full"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                        ></iframe>
                    </div>
                </div>
            </div>

        </div>
    )
}
