'use client'

import { useState } from 'react';
import { porcoes, aLaCarte, individuais, sobremesas, bebidas, ItemCardapio, veganos, drinks, energeticos, cervejasGeladas, variados, doses, vegetarianos } from '../../data/cardapio';

export default function Page() {
    const [categoriaAtiva, setCategoriaAtiva] = useState<'principais' | 'individuais' | 'bebidas' | 'veganos'>('principais');

    return (
        <div className="bg-white text-slate-800 min-h-screen font-sans flex flex-col justify-between">
            <div>
                <div className="bg-slate-950 py-16 px-4 text-center border-b border-slate-900 relative overflow-hidden text-white">
                    <div className="absolute inset-0 opacity-5 bg-[url('/caminho-da-sua-imagem/logo-guerreiras.png')] bg-no-repeat bg-center bg-contain"></div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <span className="text-amber-500 font-bold uppercase tracking-wider text-xs bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                            Cardápio Oficial
                        </span>
                        <h1 className="text-4xl font-black mt-3 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                            Sabor Caiçara, Comida de Verdade!
                        </h1>
                        <div className="text-center mt-4 space-y-2 max-w-xl mx-auto">
                            <p className="text-slate-400 text-xs md:text-sm font-medium">
                                Ambiente familiar, de frente para o rio e uma vista incrível na Ilha Diana.
                            </p>
                            <p className="text-[10px] md:text-xs text-amber-500/80 tracking-wide font-semibold uppercase flex items-center justify-center gap-1.5 bg-amber-500/5 py-1.5 px-4 rounded-full max-w-sm md:max-w-max mx-auto border border-amber-500/10 text-center whitespace-normal md:whitespace-nowrap">
                                <span>🐟</span>
                                <span>Cardápio exclusivamente caiçara (Sem opções de carne)</span>
                            </p>
                        </div>
                    </div>

                </div>

                <div className="max-w-7xl mx-auto px-4 mt-10">
                    <div className="flex bg-slate-50 p-1 rounded-2xl max-w-lvh mx-auto border border-slate-100 shadow-sm">
                        <button
                            onClick={() => setCategoriaAtiva('principais')}
                            className={`flex-1 py-3 text-xs md:text-sm font-bold rounded-xl transition-all duration-200 ${categoriaAtiva === 'principais'
                                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/10'
                                : 'text-slate-500 hover:text-slate-800'
                                }`}
                        >
                            🐟 Para Compartilhar
                        </button>
                        <button
                            onClick={() => setCategoriaAtiva('individuais')}
                            className={`flex-1 py-3 text-xs md:text-sm font-bold rounded-xl transition-all duration-200 ${categoriaAtiva === 'individuais'
                                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/10'
                                : 'text-slate-500 hover:text-slate-800'
                                }`}
                        >
                            🍛 Pratos & Doces
                        </button>
                        <button
                            onClick={() => setCategoriaAtiva('bebidas')}
                            className={`flex-1 py-3 text-xs md:text-sm font-bold rounded-xl transition-all duration-200 ${categoriaAtiva === 'bebidas'
                                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/10'
                                : 'text-slate-500 hover:text-slate-800'
                                }`}
                        >
                            🍹 Drinks & Bebidas
                        </button>

                        <button
                            onClick={() => setCategoriaAtiva('veganos')}
                            className={`flex-1 py-3 text-xs md:text-sm font-bold rounded-xl transition-all duration-200 ${categoriaAtiva === 'veganos'
                                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/10'
                                : 'text-slate-500 hover:text-slate-800'
                                }`}
                        >
                            🌱 Veganos & Vegetarianos
                        </button>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 py-12">
                    {categoriaAtiva === 'principais' && (
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-xl font-black text-slate-900 border-b border-slate-100 pb-3 mb-6 uppercase tracking-wide flex items-center gap-2">
                                    🍤 Porções <span className="text-xs text-slate-400 font-normal normal-case">(Serve de 3 a 4 pessoas)</span>
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {porcoes.map((item, idx) => (
                                        <CardItem key={idx} item={item} showMeia={true} />
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-black text-slate-900 border-b border-slate-100 pb-3 mb-6 uppercase tracking-wide flex items-center gap-2">
                                    🍲 Pratos À La Carte <span className="text-xs text-slate-400 font-normal normal-case">(Serve 3 pessoas)</span>
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {aLaCarte.map((item, idx) => (
                                        <CardItem key={idx} item={item} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {categoriaAtiva === 'individuais' && (
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-xl font-black text-slate-900 border-b border-slate-100 pb-3 mb-6 uppercase tracking-wide">
                                    🍽️ Pratos Individuais
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {individuais.map((item, idx) => (
                                        <CardItem key={idx} item={item} />
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-black text-slate-900 border-b border-slate-100 pb-3 mb-6 uppercase tracking-wide">
                                    🍰 Sobremesas
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {sobremesas.map((item, idx) => (
                                        <CardItem key={idx} item={item} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {categoriaAtiva === 'veganos' && (
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-xl font-black text-slate-900 border-b border-slate-100 pb-3 mb-6 uppercase tracking-wide">
                                    🌴 Pratos Veganos
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {veganos.map((item, idx) => (
                                        <CardItem key={idx} item={item} />
                                    ))}
                                </div>
                                <h2 className="text-xl font-black text-slate-900 border-b border-slate-100 mt-12 pb-3 mb-6 uppercase tracking-wide">
                                    🥗 Pratos Vegetarianos
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {vegetarianos.map((item, idx) => (
                                        <CardItem key={idx} item={item} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {categoriaAtiva === 'bebidas' && (
                        <div>
                            <h2 className="text-xl font-black text-slate-900 border-b border-slate-100 pb-3 mb-6 uppercase tracking-wide">
                                🍻 Bebidas
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {bebidas.map((item, idx) => (
                                    <CardItem key={idx} item={item} />
                                ))}
                            </div>
                            <h2 className="text-xl font-black text-slate-900 border-b border-slate-100 mt-12 pb-3 mb-6 uppercase tracking-wide">
                                🍹 Drinks da Casa
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {drinks.map((item, idx) => (
                                    <CardItem key={idx} item={item} />
                                ))}
                            </div>
                            <h2 className="text-xl font-black text-slate-900 border-b border-slate-100 mt-12 pb-3 mb-6 uppercase tracking-wide">
                                🥤 Energéticos
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {energeticos.map((item, idx) => (
                                    <CardItem key={idx} item={item} />
                                ))}
                            </div>
                            <h2 className="text-xl font-black text-slate-900 border-b border-slate-100 mt-12 pb-3 mb-6 uppercase tracking-wide">
                                🍺 Cervejas
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {cervejasGeladas.map((item, idx) => (
                                    <CardItem key={idx} item={item} />
                                ))}
                            </div>
                            <h2 className="text-xl font-black text-slate-900 border-b border-slate-100 mt-12 pb-3 mb-6 uppercase tracking-wide">
                                🍹 Variados
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {variados.map((item, idx) => (
                                    <CardItem key={idx} item={item} />
                                ))}
                            </div>
                            <h2 className="text-xl font-black text-slate-900 border-b border-slate-100 mt-12 pb-3 mb-6 uppercase tracking-wide">
                                🥂 Doses
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {doses.map((item, idx) => (
                                    <CardItem key={idx} item={item} />
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="mt-16 text-center border-t border-slate-100 pt-8 text-slate-400 text-xs space-y-2 font-medium">
                        <p>❤️ A gente cozinha com amor para você voltar sempre!</p>
                        <p>🥡 Taxa de Marmita: R$ 1,00 | Gelo ou Limão Extra: R$ 1,00</p>
                    </div>
                </div>
            </div >
        </div >
    );
}

function CardItem({ item }: { item: ItemCardapio; showMeia?: boolean }) {
    return (
        <div className="bg-white p-5 rounded-2xl border border-slate-100 hover:shadow-md transition-all duration-300 flex flex-col justify-between gap-4 shadow-sm">
            <div>
                <div className="flex justify-between items-start gap-4">
                    <h3 className="font-bold text-base text-slate-900">{item.nome}</h3>
                </div>
                {item.descricao && (
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.descricao}</p>
                )}
            </div>

            <div className="flex items-center justify-between gap-2 mt-auto pt-2 border-t border-slate-50/80">
                {item.tags && item.tags.length > 0 ? (
                    <div className="flex flex-wrap gap-1">
                        {item.tags.map((tag, i) => (
                            <span
                                key={i}
                                className={`text-[9px] px-2 py-0.5 rounded-full border font-bold ${tag.includes("Especial") || tag.includes("Mais Pedido") || tag.includes("Exclusiva")
                                    ? "bg-amber-50 text-amber-600 border-amber-100"
                                    : "bg-slate-50 text-slate-500 border-slate-100"
                                    }`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                ) : (
                    <div />
                )}

                <span className="text-[10px] bg-slate-50 text-slate-400 font-medium px-2 py-1 rounded-lg border border-slate-100 whitespace-nowrap">
                    📋 Valor no local
                </span>
            </div>
        </div>
    );
}
