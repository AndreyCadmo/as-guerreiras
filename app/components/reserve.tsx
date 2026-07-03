'use client'

import { useState } from 'react';

export default function Reserve() {
    const [tipoReserva, setTipoReserva] = useState<'mesa' | 'pacote'>('mesa');
    const [nome, setNome] = useState('');
    const [dataHora, setDataHora] = useState('');
    const [pessoas, setPessoas] = useState('');
    const [preferenciaMesa, setPreferenciaMesa] = useState('');

    const TELEFONE_QUIOSQUE = "5513974010251";

    const handleEnviarReserva = (e: React.FormEvent) => {
        e.preventDefault();

        let dataHoraFormatada = '';
        if (dataHora) {
            const [dataParte, horaParte] = dataHora.split('T');
            const [ano, mes, dia] = dataParte.split('-');
            dataHoraFormatada = `${dia}/${mes}/${ano} às ${horaParte}`;
        }

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
        <div className="w-full bg-slate-900 p-6 md:p-8 rounded-3xl shadow-xl border border-slate-800 text-white flex flex-col justify-between">
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
                        className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all ${tipoReserva === 'mesa' ? 'bg-amber-500 text-slate-950 shadow font-bold' : 'text-slate-400 hover:text-white'
                            }`}
                        onClick={() => { setTipoReserva('mesa'); setPessoas(''); }}
                    >
                        🪑 Reservar Mesa
                    </button>
                    <button
                        type="button"
                        className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all ${tipoReserva === 'pacote' ? 'bg-amber-500 text-slate-950 shadow font-bold' : 'text-slate-400 hover:text-white'
                            }`}
                        onClick={() => { setTipoReserva('pacote'); setPessoas('15'); }}
                    >
                        🎉 Fechar Restaurante
                    </button>
                </div>

                <form onSubmit={handleEnviarReserva} className="space-y-4">
                    <div>
                        <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Seu Nome</label>
                        <input
                            type="text"
                            required
                            placeholder="Ex: Sara"
                            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Data e Horário</label>
                            <input
                                type="datetime-local"
                                required
                                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors text-white cursor-pointer
        [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-70 hover:[&::-webkit-calendar-picker-indicator]:opacity-100"
                                value={dataHora}
                                onChange={(e) => setDataHora(e.target.value)}
                                onClick={(e) => {
                                    try {
                                        (e.target as HTMLInputElement).showPicker();
                                    } catch (err) {
                                        console.log(err);
                                    }
                                }}
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Nº de Pessoas</label>
                            {tipoReserva === 'mesa' ? (
                                <input
                                    type="number"
                                    required
                                    min="1"
                                    placeholder="Ex: 4"
                                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                                    value={pessoas}
                                    onChange={(e) => setPessoas(e.target.value)}
                                />
                            ) : (
                                <select
                                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                                    value={pessoas}
                                    onChange={(e) => setPessoas(e.target.value)}
                                >
                                    <option value="15">15 a 25 pessoas</option>
                                    <option value="30">26 a 40 pessoas</option>
                                    <option value="50">41 a 50 pessoas (Máximo)</option>
                                </select>
                            )}
                        </div>
                    </div>

                    {tipoReserva === 'mesa' ? (
                        <div>
                            <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Preferência de Mesa (Opcional)</label>
                            <input
                                type="text"
                                placeholder="Ex: Mesas de baixo, perto da água"
                                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                                value={preferenciaMesa}
                                onChange={(e) => setPreferenciaMesa(e.target.value)}
                            />
                        </div>
                    ) : (
                        <div className="bg-slate-950/50 p-4 rounded-xl border border-dashed border-slate-700 text-xs text-slate-400 space-y-1">
                            <p className="font-semibold text-amber-400">📌 Regras do Pacote Exclusivo:</p>
                            <p>• O quiosque será fechado apenas para o seu grupo.</p>
                            <p>• Capacidade permitida: Mínimo de 15 e máximo de 50 pessoas.</p>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-amber-500 text-slate-950 font-black py-3.5 px-4 rounded-xl hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/10 flex justify-center items-center gap-2 mt-2"
                    >
                        <span>💬 Enviar Solicitação via WhatsApp</span>
                    </button>
                </form>
            </div>
        </div>
    );
}