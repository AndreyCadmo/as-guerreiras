export interface ItemCardapio {
    nome: string;
    preco: number;
    precoMeia?: number;
    descricao?: string;
    tags?: string[];
}

export const porcoes: ItemCardapio[] = [
    { nome: "Camarão Crocante da Casa", preco: 90.00, precoMeia: 50.00, descricao: "Douradinho, sequinho e viciante", tags: ["Serve 3 a 4 pessoas"] },
    { nome: "Calabresa Acebolada", preco: 40.00, precoMeia: 25.00, descricao: "Simples, bem feita e irresistível", tags: ["Serve 3 a 4 pessoas"] },
    { nome: "Batata Frita Crocante", preco: 40.00, precoMeia: 25.00, descricao: "Dourada por fora, macia por dentro", tags: ["Serve 3 a 4 pessoas"] },
    { nome: "Isca de Frango Crocante", preco: 60.00, precoMeia: 40.00, descricao: "Temperada e suculenta", tags: ["Serve 3 a 4 pessoas"] },
    { nome: "Salgados no Copo (Sazonal)", preco: 15.00, descricao: "Disponível a partir das 16h" },
    { nome: "Churros no Copo (Sazonal)", preco: 15.00, descricao: "Disponível a partir das 16h" },
    { nome: "Arroz Branco Soltinho", preco: 20.00 }
];

export const aLaCarte: ItemCardapio[] = [
    { nome: "Camarão Empanado Completo", preco: 150.00, descricao: "Camarão crocante + arroz + fritas + molho da casa", tags: ["Especial da Casa", "Serve 3 pessoas"] },
    { nome: "Filé de Peixe com Molho de Camarão", preco: 130.00, descricao: "Leve, saboroso e com aquele toque especial do mar", tags: ["Mais Pedido", "Serve 3 pessoas"] },
    { nome: "Frango à Parmegiana", preco: 125.00, descricao: "Molho bem temperado, queijo derretendo... sem erro!", tags: ["Serve 3 pessoas"] }
];

export const individuais: ItemCardapio[] = [
    { nome: "Filé de Peixe ou Frango Completo", preco: 40.00, descricao: "Arroz, fritas e molho da casa", tags: ["Mais Pedido", "Individual"] },
    { nome: "Lasanha de Carne", preco: 45.00, descricao: "Molho encorpado, queijo gratinado e servido com carinho", tags: ["Individual"] },
    { nome: "Omelete Completo", preco: 39.00, descricao: "Com arroz, fritas e legumes refogados", tags: ["Individual"] },
    { nome: "Omelete Simples", preco: 21.00, descricao: "Feita com 3 ovos, queijo OU tomatinhos em rodelas", tags: ["Individual"] },
    { nome: "Moqueca Caiçara (Vegano)", preco: 39.00, descricao: "Moqueca de palmito, banana-da-terra, pimentões, tomates e leite de coco. Acompanha arroz.", tags: ["Prato Vegano", "Individual"] }
];

export const sobremesas: ItemCardapio[] = [
    { nome: "Pudim", preco: 12.00, descricao: "Clássico que nunca sai de moda!" },
    { nome: "Mousse de Fruta", preco: 12.00, descricao: "Leve, geladinha e feita com frutas selecionadas." },
    { nome: "Surpresa Caiçara", preco: 20.00, descricao: "Brownie chocolatudo com pedacinhos de castanhas e sorvete. Finalizado com calda de chocolate.", tags: ["Novidade Exclusiva"] }
];

export const bebidas: ItemCardapio[] = [
    { nome: "Dianinha (O Queridinho)", preco: 23.00, descricao: "Chopp de vinho + mousse de maracujá + saquê seco. Refrescante, diferente e viciante!", tags: ["Drinks da Casa", "Mais Pedido"] },
    { nome: "Batidas de Pinga (Coco ou Maracujá)", preco: 20.00, tags: ["Drinks da Casa"] },
    { nome: "Sakerita (Morango ou Abacaxi)", preco: 23.00, tags: ["Drinks da Casa"] },
    { nome: "Espanhola / Caipirinha / Caipiroska", preco: 21.00, descricao: "Caipirinhas tradicionais feitas sem leite condensado.", tags: ["Drinks da Casa"] },
    { nome: "Cerveja Original 600ml / Heineken 600ml", preco: 20.00, tags: ["Cervejas Geladas"] },
    { nome: "Cerveja Original / Heineken (Lata/Long Neck)", preco: 7.00, tags: ["Cervejas Geladas"] },
    { nome: "Refrigerante Lata 350ml", preco: 6.00, descricao: "Coca, Coca Zero, Antártica, Laranja, Uva, Sprite" },
    { nome: "Suco Natural (Maracujá, Limão ou Abacaxi)", preco: 12.00 },
    { nome: "Água sem Gás / Com Gás", preco: 4.00, precoMeia: 5.00 }
];

export const principaisPratos = [
    {
        nome: "Camarão Empanado Completo",
        preco: "150,00",
        descricao: "Camarão crocante de altíssima qualidade acompanhado de arroz soltinho, batata frita e molho especial da casa.",
        tag: "🥇 O Especial da Casa"
    },
    {
        nome: "Filé de Peixe com Molho de Camarão",
        preco: "130,00",
        descricao: "Peixe grelhado leve e saboroso, coberto com um molho de camarão cremoso e aquele toque caiçara do mar.",
        tag: "⭐ O Mais Pedido"
    },
    {
        nome: "Moqueca Caiçara (Vegana)",
        preco: "39.00",
        descricao: "Deliciosa moqueca individual de palmito e banana-da-terra, pimentões selecionados, tomates e leite de coco. Acompanha arroz.",
        tag: "🌱 Sucesso Vegano"
    }
];