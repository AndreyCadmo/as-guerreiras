'use client'

import React from 'react';

export default function Instagram() {
    const fotosInstagram = [
        {
            urlPost: "https://www.instagram.com/p/DNvv2IxYkj3/",
            urlImagem: "./images/foto1.jpg",
            alt: "Post de Moqueca - As Guerreiras"
        },
        {
            urlPost: "https://www.instagram.com/p/DVCvvBJgHVE/",
            urlImagem: "./images/foto2.jpg",
            alt: "Post de Frutos do Mar - As Guerreiras"
        },
        {
            urlPost: "https://www.instagram.com/p/DWIe6hvDv1f/",
            urlImagem: "./images/foto3.jpg",
            alt: "Post da Ilha Diana - As Guerreiras"
        },
        {
            urlPost: "https://www.instagram.com/p/DZBOKuqFqGA/",
            urlImagem: "./images/foto4.jpg",
            alt: "Post do Quiosque - As Guerreiras"
        }
    ];

    return (
        <section className="bg-white py-24 px-4 border-t border-slate-100">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-16 space-y-2">
                    <span className="text-pink-600 font-bold text-xs uppercase tracking-wider block">Siga nosso dia a dia</span>
                    <h2 className="text-3xl font-black tracking-tight text-slate-900">@asguerreirasdailhadiana</h2>
                    <p className="text-slate-500 text-xs md:text-sm max-w-sm mx-auto font-medium">
                        Fique por dentro das novidades, pratos do dia e registros reais do nosso cantinho caiçara.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    {fotosInstagram.map((foto, idx) => (
                        <a
                            key={idx}
                            href={foto.urlPost}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-square rounded-3xl overflow-hidden border border-slate-100 shadow-sm block hover:shadow-xl transition-all duration-300"
                        >
                            <img
                                src={foto.urlImagem}
                                alt={foto.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-4 py-2 rounded-xl shadow-md">
                                    Ver no Instagram 📸
                                </span>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}