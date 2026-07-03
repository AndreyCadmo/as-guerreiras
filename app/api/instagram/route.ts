import { NextResponse } from 'next/server';

export async function GET() {

    const mockPosts = [
        {
            urlPost: "https://www.instagram.com/asguerreirasdailhadiana/",
            urlImagem: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500",
            alt: "Post Informativo"
        },
        {
            urlPost: "https://www.instagram.com/asguerreirasdailhadiana/",
            urlImagem: "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?w=500",
            alt: "Horário das Barcas"
        },
        {
            urlPost: "https://www.instagram.com/asguerreirasdailhadiana/",
            urlImagem: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=500",
            alt: "Cardápio"
        },
        {
            urlPost: "https://www.instagram.com/asguerreirasdailhadiana/",

            urlImagem: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500",
            alt: "Espaço Pet"
        }
    ];

    return NextResponse.json(mockPosts);
}