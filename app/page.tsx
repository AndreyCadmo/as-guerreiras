import React from 'react';
import Instagram from './components/instagram';
import GoogleReviews from './components/google';
import Footer from './components/footer';
import { principaisPratos } from './data/cardapio';

export default function Home() {
  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans overflow-x-hidden">

      <section className="relative py-28 px-4 text-center bg-slate-950 border-b border-slate-200 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-xs bg-slate-900 px-4 py-1.5 rounded-full border border-slate-800">
            Quiosque & Restaurante
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            As Guerreiras <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
              Sabor Caiçara, Comida de Verdade!
            </span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto">
            Descubra uma experiência gastronômica e turística única em meio à natureza preservada da Ilha Diana, em Santos.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="/cardapio" className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-amber-500/10">
              📋 Ver Cardápio Completo
            </a>
            <a href="/reservas" className="bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-bold px-6 py-3 rounded-xl text-sm transition-all">
              📅 Reservar uma Mesa
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-amber-600 font-bold text-xs uppercase tracking-wider block">Um refúgio escondido</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Conheça a Ilha Diana</h2>
          </div>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Localizado em uma charmosa comunidade caiçara de Santos, o <span className="font-bold text-slate-900">Quiosque As Guerreiras</span> oferece um ambiente familiar e aconchegante de frente para o rio, com uma vista incrível e entrada totalmente gratuita na ilha.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Aqui, além de desfrutar de almoços frescos servidos até as 16h e porções deliciosas até mais tarde, você pode aproveitar nossos <span className="font-bold text-slate-900">passeios de barco por apenas R$ 35 por pessoa</span> ou agendar um tour monitorado repleto de cultura e paisagens inesquecíveis.
          </p>
          <div className="pt-2">
            <a href="/sobre" className="text-amber-600 hover:text-amber-700 font-bold text-sm inline-flex items-center gap-1 transition-colors">
              📖 Leia nossa história completa de superação e fé →
            </a>
          </div>
        </div>
        <div className="relative h-[380px] rounded-3xl overflow-hidden border border-slate-100 shadow-xl">
          <img
            src="./images/local.png"
            alt="Ambiente do Quiosque de frente para a água"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm border border-slate-100 p-4 rounded-2xl max-w-xs shadow-lg">
            <p className="text-xs font-bold text-amber-600">📍 Como Chegar:</p>
            <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed font-medium">
              Pegue a barca no Centro de Santos. Ao desembarcar na ilha, atravesse a ponte amarela até o fim, vire à direita e ande 100 metros!
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-100 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-2">
            <span className="text-amber-600 font-bold text-xs uppercase tracking-wider block">Recomendações da Cozinha</span>
            <h2 className="text-3xl font-black text-slate-900">Os 3 Principais Pratos da Casa</h2>
            <p className="text-slate-500 text-xs md:text-sm max-w-md mx-auto">
              Separamos os queridinhos dos nossos clientes que você não pode deixar de experimentar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principaisPratos.map((prato, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 shadow-sm">
                <div className="space-y-4">
                  <span className="text-[10px] font-bold bg-amber-50 text-amber-600 px-2.5 py-1 rounded-full border border-amber-100 w-max block">
                    {prato.tag}
                  </span>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">{prato.nome}</h3>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{prato.descricao}</p>
                  </div>
                </div>
                <div className="border-t border-slate-100 pt-4 mt-6 flex justify-between items-center">
                  <span className="text-slate-400 text-xs font-medium">Preço</span>
                  <span className="text-amber-600 font-mono font-black text-xl">R$ {prato.preco}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviews />
      <Instagram />
    </div>
  );
}
