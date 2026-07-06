'use client'

import { fotosGaleria, fotosGaleriaIlhaDiana } from '@/app/data/galeria'
import React, { useState } from 'react'

export default function Page() {
    const [fotoAmpliada, setFotoAmpliada] = useState<{ url: string; alt: string } | null>(null);

    return (
        <div className="bg-white text-slate-800 min-h-screen font-sans flex flex-col justify-between relative">
            <div>
                <div className="bg-slate-950 py-16 px-4 text-center border-b border-slate-900 relative overflow-hidden text-white">
                    <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&q=80')] bg-cover bg-center"></div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <span className="text-amber-500 font-bold uppercase tracking-wider text-xs bg-slate-900/90 px-3 py-1 rounded-full border border-slate-800 backdrop-blur-sm">
                            Galeria de Fotos
                        </span>
                        <h1 className="text-3xl md:text-4xl font-extrabold mt-4">
                            Momentos Inesquecíveis no Quiosque As Guerreiras
                        </h1>
                        <p className="mt-2 text-sm md:text-base text-slate-300">
                            Explore nossa galeria de fotos e reviva os momentos especiais que tornam o Quiosque As Guerreiras um lugar único. Desde pratos deliciosos até eventos memoráveis, cada image conta uma história de sabor, alegria e hospitalidade.
                        </p>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-xl font-black text-slate-900 border-b border-slate-100 pb-3 mb-6 uppercase tracking-wide flex items-center gap-2">
                                🍤 Comidas e Bebidas
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {fotosGaleria.map((foto) => (
                                    <div
                                        key={foto.id}
                                        className="overflow-hidden rounded-xl shadow-md border border-slate-100 bg-slate-50 aspect-square cursor-pointer"
                                        onClick={() => setFotoAmpliada({ url: foto.url, alt: foto.alt })}
                                    >
                                        <img
                                            src={foto.url}
                                            alt={foto.alt}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-black text-slate-900 border-b border-slate-100 pb-3 mb-6 uppercase tracking-wide flex items-center gap-2">
                                🌿 Ilha Diana e Natureza ao Redor
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {fotosGaleriaIlhaDiana.map((foto) => (
                                    <div
                                        key={foto.id}
                                        className="overflow-hidden rounded-xl shadow-md border border-slate-100 bg-slate-50 aspect-square cursor-pointer"
                                        onClick={() => setFotoAmpliada({ url: foto.url, alt: foto.alt })}
                                    >
                                        <img
                                            src={foto.url}
                                            alt={foto.alt}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {fotoAmpliada && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 cursor-zoom-out"
                    onClick={() => setFotoAmpliada(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/50 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold transition-colors shadow-lg"
                        onClick={() => setFotoAmpliada(null)}
                    >
                        &times;
                    </button>

                    <div
                        className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl border border-slate-800 bg-slate-900"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={fotoAmpliada.url}
                            alt={fotoAmpliada.alt}
                            className="w-full h-auto max-h-[85vh] object-contain block mx-auto"
                        />
                        {fotoAmpliada.alt && (
                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-4 pt-12 text-center">
                                <p className="text-white text-sm font-semibold tracking-wide drop-shadow-md">
                                    {fotoAmpliada.alt}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}