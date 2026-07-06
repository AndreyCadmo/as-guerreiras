'use client'

import { useState, useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import { format, isBefore, startOfDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';

export default function Reserve() {
    const [tipoReserva, setTipoReserva] = useState<'mesa' | 'pacote'>('mesa');
    const [nome, setNome] = useState('');
    const [dataSelecionada, setDataSelecionada] = useState<Date | undefined>(undefined);
    const [mostrarCalendario, setMostrarCalendario] = useState(false);
    const [hora, setHora] = useState('11:00');
    const [pessoas, setPessoas] = useState('');
    const [preferenciaMesa, setPreferenciaMesa] = useState('');
    const [erroPessoas, setErroPessoas] = useState(false);
    const [horariosDisponiveis, setHorariosDisponiveis] = useState<string[]>([]);

    const TELEFONE_QUIOSQUE = "5513974010251";

    const horariosDiasUteis = ["11:00", "12:30", "13:40", "15:30", "17:10", "18:30", "19:30"];
    const horariosSábado = ["11:00", "12:30", "13:40", "16:30", "18:30", "19:30"];
    const horariosDomingo = ["11:00", "14:00", "15:00", "15:30", "17:30", "18:30"];

    useEffect(() => {
        if (!dataSelecionada) {
            setHorariosDisponiveis(horariosDiasUteis);
            setHora('11:00');
            return;
        }

        const diaSemana = dataSelecionada.getDay();
        let novosHorarios: string[] = [];

        if (diaSemana === 6) {
            novosHorarios = horariosSábado;
        } else if (diaSemana === 0) {
            novosHorarios = horariosDomingo;
        } else {
            novosHorarios = horariosDiasUteis;
        }

        setHorariosDisponiveis(novosHorarios);
        if (!novosHorarios.includes(hora)) {
            setHora(novosHorarios[0]);
        }
    }, [dataSelecionada]);

    const bloquearData = (day: Date) => {
        const hoje = startOfDay(new Date());
        const diaSemana = day.getDay();
        return isBefore(day, hoje) || diaSemana === 1 || diaSemana === 2;
    };

    const handleEnviarReserva = (e: React.FormEvent) => {
        e.preventDefault();

        if (!dataSelecionada) return;
        if (tipoReserva === 'mesa' && Number(pessoas) > 24) return;

        const dataHoraFormatada = `${format(dataSelecionada, 'dd/MM/yyyy')} às ${hora}h`;

        let mensagem = '';

        if (tipoReserva === 'mesa') {
            mensagem = `Olá! Me chamo ${nome}. Gostaria de reservar uma mesa para o dia ${dataHoraFormatada} para ${pessoas} pessoas.`;
            if (preferenciaMesa) {
                mensagem += ` (Preferência de local: ${preferenciaMesa})`;
            }
        } else {
            mensagem = `Olá! Me chamo ${nome}. Gostaria de solicitar um orçamento para o Pacote Fechado (Evento Exclusivo) para o dia ${dataHoraFormatada}, com uma estimativa de ${pessoas} convidados.`;
        }

        const urlWhatsApp = `https://api.whatsapp.com/send?phone=${TELEFONE_QUIOSQUE}&text=${encodeURIComponent(mensagem)}`;
        window.open(urlWhatsApp, '_blank');
    };

    return (
        <div className="w-full bg-slate-900 p-6 md:p-8 rounded-3xl shadow-xl border border-slate-800 text-white flex flex-col justify-between relative">
            <div>
                <div className="text-center mb-6">
                    <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase">Agendamento Online</span>
                    <h2 className="text-3xl font-black mt-1">Faça sua Reserva</h2>
                    <p className="text-slate-400 mt-2 text-xs md:text-sm">
                        Garanta seu lugar na Ilha Diana. Sem taxas de conveniência!
                    </p>
                </div>

                <div className="flex bg-slate-950 p-1 rounded-xl mb-6">
                    <button
                        type="button"
                        className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all ${tipoReserva === 'mesa' ? 'bg-amber-500 text-slate-950 shadow font-bold' : 'text-slate-400 hover:text-white'}`}
                        onClick={() => { setTipoReserva('mesa'); setPessoas(''); setErroPessoas(false); }}
                    >
                        🪑 Reservar Mesa
                    </button>
                    <button
                        type="button"
                        className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all ${tipoReserva === 'pacote' ? 'bg-amber-500 text-slate-950 shadow font-bold' : 'text-slate-400 hover:text-white'}`}
                        onClick={() => { setTipoReserva('pacote'); setPessoas('15'); setErroPessoas(false); }}
                    >
                        🎉 Fechar grupo
                    </button>
                </div>

                <form onSubmit={handleEnviarReserva} className="space-y-4">
                    <div>
                        <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Seu Nome</label>
                        <input
                            type="text"
                            required
                            placeholder="Ex: Sara"
                            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors text-white"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative">
                        <div className="relative">
                            <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Data</label>
                            <button
                                type="button"
                                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors text-white text-left flex justify-between items-center"
                                onClick={() => setMostrarCalendario(!mostrarCalendario)}
                            >
                                <span>{dataSelecionada ? format(dataSelecionada, 'dd/MM/yyyy') : "Selecione o dia"}</span>
                                <span className="text-slate-500 text-xs">📅</span>
                            </button>

                            {mostrarCalendario && (
                                <div className="absolute z-50 mt-2 p-3 bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl left-0 top-full text-white card-calendario">
                                    <DayPicker
                                        mode="single"
                                        selected={dataSelecionada}
                                        onSelect={(dia) => {
                                            setDataSelecionada(dia);
                                            setMostrarCalendario(false);
                                        }}
                                        disabled={bloquearData}
                                        locale={ptBR}
                                    />
                                </div>
                            )}
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Horário</label>
                            <select
                                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors text-white cursor-pointer"
                                value={hora}
                                onChange={(e) => setHora(e.target.value)}
                            >
                                {horariosDisponiveis.map((h) => (
                                    <option key={h} value={h}>{h} h</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Nº de Pessoas</label>
                            {tipoReserva === 'mesa' ? (
                                <input
                                    type="number"
                                    required
                                    min="1"
                                    max="24"
                                    placeholder="Ex: 4"
                                    className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors text-white ${erroPessoas ? 'border-red-500 focus:border-red-500' : 'border-slate-700 focus:border-amber-500'}`}
                                    value={pessoas}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        setPessoas(val);
                                        if (Number(val) > 24) setErroPessoas(true);
                                        else setErroPessoas(false);
                                    }}
                                />
                            ) : (
                                <select
                                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors text-white cursor-pointer"
                                    value={pessoas}
                                    onChange={(e) => setPessoas(e.target.value)}
                                >
                                    <option value="15">15 a 24 pessoas</option>
                                    <option value="30">25 a 40 pessoas</option>
                                    <option value="50">41 a 50 pessoas</option>
                                </select>
                            )}
                        </div>
                    </div>

                    {tipoReserva === 'mesa' && erroPessoas && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs py-2 px-4 rounded-xl text-center font-medium animate-pulse">
                            ⚠️ Para reservas acima de 24 pessoas, selecione a opção <strong>"Fechar grupo"</strong> no topo do formulário.
                        </div>
                    )}

                    {tipoReserva === 'mesa' ? (
                        <div>
                            <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Preferência de Mesa (Opcional)</label>
                            <input
                                type="text"
                                placeholder="Ex: Mesas de baixo, perto da água"
                                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors text-white"
                                value={preferenciaMesa}
                                onChange={(e) => setPreferenciaMesa(e.target.value)}
                            />
                        </div>
                    ) : (
                        <div className="bg-slate-950/50 p-4 rounded-xl border border-dashed border-slate-700 text-xs text-slate-400 space-y-1">
                            <p className="font-semibold text-amber-400">📌 Regras do Pacote Exclusivo:</p>
                            <p className="text-[11px] text-amber-500/90 font-medium pb-1">⚠️ Cardápio exclusivamente caiçara (Sem opções de carne vermelha ou suína)</p>
                            <p className="pt-1">• Capacidade permitida: Mínimo de 15 e máximo de 50 pessoas.</p>
                            <p className="text-slate-300">• O Quiosque será fechado apenas para grupos acima de 24 pessoas.</p>
                            <p className="text-[11px] text-amber-500/90 font-medium pb-1">• Escolher pacote de acordo com o número de pessoas e itens desejados.</p>
                            <p>• A reserva do pacote deve ser feita com antecedência mínima de 7 dias.</p>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={!dataSelecionada || (tipoReserva === 'mesa' && erroPessoas)}
                        className={`w-full font-black py-3.5 px-4 rounded-xl transition-colors shadow-lg flex justify-center items-center gap-2 mt-2 ${!dataSelecionada || (tipoReserva === 'mesa' && erroPessoas)
                            ? 'bg-slate-800 text-slate-500 cursor-not-allowed shadow-none border border-slate-700/50'
                            : 'bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-amber-500/10'
                            }`}
                    >
                        <span>💬 Enviar Solicitação via WhatsApp</span>
                    </button>
                </form>

                {tipoReserva === 'mesa' && (
                    <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-2 gap-4 text-[11px] text-slate-400 animate-fadeIn">
                        <div className="bg-slate-950/40 p-3 rounded-xl border border-slate-800/50">
                            <p className="text-amber-400 font-bold uppercase tracking-wider text-[9px] mb-1">🌿 Tradição Caiçara</p>
                            <p className="leading-relaxed">Um ambiente autêntico e tradicional mantido por uma comunidade local acolhedora no coração da Ilha Diana.</p>
                        </div>
                        <div className="bg-slate-950/40 p-3 rounded-xl border border-slate-800/50">
                            <p className="text-amber-400 font-bold uppercase tracking-wider text-[9px] mb-1">🍤 Frescor Garantido</p>
                            <p className="leading-relaxed">Ingredientes selecionados e frutos do mar preparados na hora com o legítimo tempero caiçara tradicional.</p>
                        </div>
                        <div className="bg-slate-950/40 p-3 rounded-xl border border-slate-800/50">
                            <p className="text-amber-400 font-bold uppercase tracking-wider text-[9px] mb-1">⚓ Sem Custos Extra</p>
                            <p className="leading-relaxed">O serviço de agendamento e reserva de mesas é 100% gratuito. Você paga apenas o que consumir no local.</p>
                        </div>
                        <div className="bg-slate-950/40 p-3 rounded-xl border border-slate-800/50">
                            <p className="text-amber-400 font-bold uppercase tracking-wider text-[9px] mb-1">👨‍👩‍👧 Ambiente Familiar</p>
                            <p className="leading-relaxed">Espaço acolhedor, ideal para reunir amigos e familiares para desfrutar de uma refeição relaxante.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}