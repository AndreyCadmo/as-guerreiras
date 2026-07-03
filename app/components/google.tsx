'use client'

import { useEffect, useState } from 'react';

interface Review {
    autor: string;
    nota: number;
    texto: string;
    fotoPerfil: string;
}

export default function GoogleReviews() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        fetch('/api/reviews')
            .then((res) => res.json())
            .then((data) => {
                if (!data.error) {
                    setReviews(data);
                }
                setCarregando(false);
            })
            .catch(() => setCarregando(false));
    }, []);

    return (
        <section className="bg-white py-24 px-4 border-t border-slate-100">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-16 space-y-2">
                    <span className="text-amber-600 font-bold text-xs uppercase tracking-wider block">
                        Depoimentos Reais
                    </span>
                    <h2 className="text-3xl font-black tracking-tight text-slate-900">
                        Avaliações no Google Maps
                    </h2>
                    <p className="text-slate-500 text-xs md:text-sm max-w-sm mx-auto font-medium">
                        Veja o que os nossos clientes estão falando direto do nosso perfil oficial.
                    </p>
                </div>

                {carregando ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[1, 2, 3].map((n) => (
                            <div key={n} className="bg-slate-900 border border-slate-800 h-48 rounded-3xl animate-pulse shadow-xl" />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {reviews.length > 0 ? (
                            reviews.map((review, idx) => (
                                <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-3xl flex flex-col justify-between shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-slate-700">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={review.fotoPerfil}
                                                    alt={review.autor}
                                                    className="w-8 h-8 rounded-full object-cover border border-slate-700 bg-slate-950"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = 'https://www.gstatic.com/images/branding/product/2x/maps_96dp.png';
                                                    }}
                                                />
                                                <h4 className="font-bold text-sm text-slate-100 truncate max-w-[140px]">
                                                    {review.autor}
                                                </h4>
                                            </div>

                                            <div className="text-amber-400 text-sm tracking-normal flex gap-0.5">
                                                {"★".repeat(review.nota)}{"☆".repeat(5 - review.nota)}
                                            </div>
                                        </div>

                                        <p className="text-xs text-slate-300 italic leading-relaxed line-clamp-4 font-medium pt-1">
                                            {review.texto ? `"${review.texto}"` : "Avaliou o restaurante com nota máxima no Google Maps."}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between border-t border-slate-800/80 pt-4 mt-6">
                                        <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">
                                            Google Review 🌍
                                        </span>
                                        <span className="text-amber-500/20 text-xs font-black select-none">
                                            5.0
                                        </span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-1 md:col-span-3 text-center py-8 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm">
                                <p className="text-xs text-slate-400 font-medium">
                                    Nenhuma avaliação recente encontrada. Visite nosso perfil no Maps!
                                </p>
                            </div>
                        )}
                    </div>
                )}

            </div>
        </section>
    );
}