import { NextResponse } from 'next/server';

export async function GET() {
    const PLACE_ID = "ChIJgUbEo8cfqokR5lP9_Wh_DaM";
    const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

    const reviewsMapeadas = [
        {
            autor: "Katia Cilene",
            nota: 5,
            texto: "Lugar maravilhoso, comida excelente, fresca e muito saborosa. Atendimento nota 10, pessoas muito simpáticas e acolhedoras. A travessia de barca até a Ilha Diana já vale o passeio!",
            fotoPerfil: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100"
        },
        {
            autor: "Lucas Alencar",
            nota: 5,
            texto: "Ambiente familiar fantástico bem de frente para o rio. O camarão crocante é sequinho e imperdível, e os pratos servem muito bem. Excelente custo-benefício em Santos.",
            fotoPerfil: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100"
        },
        {
            autor: "Priscila Mendes",
            nota: 5,
            texto: "Comida caiçara de verdade feita com muito amor. É um refúgio super tranquilo escondido na ilha. Atendimento impecável das guerreiras, com certeza voltaremos sempre!",
            fotoPerfil: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
        }
    ];

    if (!API_KEY) {
        console.log("❌ ERRO: A variável GOOGLE_PLACES_API_KEY não foi encontrada no .env.local");
        return NextResponse.json(reviewsMapeadas);
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&reviews_sort=newest&language=pt-BR&key=${API_KEY}`;

    try {
        const res = await fetch(url, { next: { revalidate: 0 } });
        const data = await res.json();

        if (data.status && data.status !== "OK") {
            console.log(`❌ ERRO DO GOOGLE MAPS: Status [${data.status}] - Mensagem:`, data.error_message || "Sem mensagem");
            return NextResponse.json(reviewsMapeadas);
        }

        if (!data.result || !data.result.reviews) {
            console.log("⚠️ AVISO: O Google respondeu OK, mas não encontrou nenhuma avaliação para este Place ID.");
            return NextResponse.json(reviewsMapeadas);
        }

        const ultimasReviews = data.result.reviews.slice(0, 3).map((review: any) => ({
            autor: review.author_name,
            nota: review.rating,
            texto: review.text,
            fotoPerfil: review.profile_photo_url || "https://www.gstatic.com/images/branding/product/2x/maps_96dp.png"
        }));

        console.log("✅ SUCESSO: Avaliações carregadas direto do Google Maps!");
        return NextResponse.json(ultimasReviews);
    } catch (error) {
        console.log("❌ ERRO NO FETCH DA APLICAÇÃO:", error);
        return NextResponse.json(reviewsMapeadas);
    }
}