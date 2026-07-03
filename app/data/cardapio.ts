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
    { nome: "Arroz Branco Soltinho", preco: 20.00 },
    { nome: "Mini Pasteis", preco: 60.00, descricao: "Consultar sabores no Local", tags: ["12 unidades"] }
];

export const aLaCarte: ItemCardapio[] = [
    { nome: "Camarão Empanado Completo", preco: 150.00, descricao: "Camarão crocante + arroz + fritas + molho da casa", tags: ["Especial da Casa", "Serve 3 pessoas"] },
    { nome: "Filé de Peixe com Molho de Camarão", preco: 130.00, descricao: "Leve, saboroso e com aquele toque especial do mar", tags: ["Mais Pedido", "Serve 3 pessoas"] },
    { nome: "Frango à Parmegiana", preco: 125.00, descricao: "Molho bem temperado, queijo derretendo... sem erro!", tags: ["Serve 3 pessoas"] }
];

export const individuais: ItemCardapio[] = [
    { nome: "Filé de Peixe ou Frango Completo", preco: 40.00, descricao: "Arroz, fritas e molho da casa", tags: ["Mais Pedido", "Individual"] },
    { nome: "Lasanha (Carne ou Camarão)", preco: 45.00, descricao: "Molho encorpado, queijo gratinado e servido com carinho", tags: ["Individual"] },
    { nome: "Omelete Completo", preco: 39.00, descricao: "Com arroz, fritas e legumes refogados", tags: ["Individual"] },
    { nome: "Omelete Simples", preco: 21.00, descricao: "Feita com 3 ovos, queijo OU tomatinhos em rodelas", tags: ["Individual"] },
    { nome: "Moqueca Caiçara", preco: 39.00, descricao: "Moqueca de palmito, banana-da-terra, pimentões, tomates e leite de coco. Acompanha arroz.", tags: ["Prato Vegano", "Individual"] }
];

export const sobremesas: ItemCardapio[] = [
    { nome: "Pudim", preco: 12.00, descricao: "Clássico que nunca sai de moda!" },
    { nome: "Mousse de Fruta", preco: 12.00, descricao: "Leve, geladinha e feita com frutas selecionadas." },
    { nome: "Surpresa Caiçara", preco: 20.00, descricao: "Brownie chocolatudo com pedacinhos de castanhas e sorvete. Finalizado com calda de chocolate.", tags: ["Novidade Exclusiva"] }
];

export const veganos: ItemCardapio[] = [
    { nome: "Moqueca Caiçara", preco: 39.00, descricao: "Moqueca de palmito, banana-da-terra, pimentões, tomates e leite de coco. Acompanha arroz.", tags: ["Prato Vegano", "Individual"] }
];

export const vegetarianos: ItemCardapio[] = [
    { nome: "Omelete Completo", preco: 39.00, descricao: "Com arroz, fritas e legumes refogados", tags: ["Individual"] },
    { nome: "Omelete Simples", preco: 21.00, descricao: "Feita com 3 ovos, queijo OU tomatinhos em rodelas", tags: ["Individual"] }
];

export const refrigerantes: ItemCardapio[] = [
    { nome: "Lata 350ml", preco: 6.00, descricao: "Coca, Coca Zero, Antártica, Laranja, Uva, Sprite" },
    { nome: "Garrafa 200ml", preco: 4.00 },
    { nome: "Schweppes Citrus", preco: 7.00 },
    { nome: "Schweppes Tônica", preco: 7.00 }
];

export const cervejasGeladas: ItemCardapio[] = [
    { nome: "Original 269ml", preco: 7.00, tags: ["A Mais Pedida"] },
    { nome: "Itaipava / Império 269ml", preco: 5.00, tags: ["Leve e Econômica"] },
    { nome: "Amstel / Budweiser 269ml", preco: 6.00 },
    { nome: "Skol 269ml", preco: 6.00 },
    { nome: "Spaten 269ml", preco: 7.00 },
    { nome: "Heineken 269ml", preco: 8.00, tags: ["A Mais Pedida"] },
    { nome: "Corona / Stella 269ml", preco: 9.00 },
    { nome: "Original 600ml", preco: 20.00, tags: ["A Mais Pedida"] },
    { nome: "Heineken 600ml", preco: 20.00, tags: ["A Mais Pedida"] },
    { nome: "Heineken sem Álcool", preco: 10.00 }
];

export const bebidas: ItemCardapio[] = [
    { nome: "Guaraviton", preco: 6.00 },
    { nome: "Água sem Gás", preco: 4.00 },
    { nome: "Água com Gás", preco: 5.00 },
    { nome: "Água Saborizada", preco: 6.00 },
    { nome: "Gatorade", preco: 10.00 },
    { nome: "Suco Del Valle 500ml", preco: 8.00 },
    { nome: "Suco Del Valle 1L", preco: 12.00 },
    { nome: "H2O", preco: 8.00 },
    { nome: "Suco Natural", preco: 12.00, descricao: "Maracujá, limão ou abacaxi" }
];

export const energeticos: ItemCardapio[] = [
    { nome: "Red Bull 250ml", preco: 15.00 },
    { nome: "Monster 473ml", preco: 15.00 }
];

export const drinks: ItemCardapio[] = [
    { nome: "Dianinha (O Queridinho)", preco: 23.00, descricao: "Chopp de vinho + mousse de maracujá + saquê seco. Refrescante, diferente e viciante!", tags: ["Sucesso"] },
    { nome: "Batidas de Pinga", preco: 20.00, descricao: "Coco ou maracujá" },
    { nome: "Sakerita", preco: 23.00, descricao: "Morango ou abacaxi" },
    { nome: "Espanhola", preco: 20.00, descricao: "Doce, cremosa e perigosa" },
    { nome: "Caipirinha / Caipiroska", preco: 21.00, descricao: "(Sem leite condensado)" },
    { nome: "Batida de Vodka", preco: 21.00 }
];

export const variados: ItemCardapio[] = [
    { nome: "Ice Smirnoff", preco: 13.00 },
    { nome: "Ice 51", preco: 12.00, descricao: "Kiwi ou Maracujá" },
    { nome: "Beats G&T", preco: 12.00 },
    { nome: "Skol Beats", preco: 10.00 },
    { nome: "Chopp de Vinho", preco: 20.00 }
];

export const doses: ItemCardapio[] = [
    { nome: "Velho Barreiro / 51", preco: 5.00 },
    { nome: "Saquê / Conhaque", preco: 5.00 },
    { nome: "Conhaque com Mel e Limão", preco: 10.00 },
    { nome: "Vodka Smirnoff / Rum / Gin", preco: 10.00 },
    { nome: "Tequila", preco: 20.00 },
    { nome: "Licor 43", preco: 25.00 },
    { nome: "Ballantine's / Red Label", preco: 20.00 },
    { nome: "Campari", preco: 10.00 },
    { nome: "Shot de Tequila (Limão e Sal)", preco: 15.00 },
    { nome: "Balyena", preco: 15.00 }
];

export const principaisPratos = [
    {
        nome: "Camarão Empanado Completo",
        preco: "150,00",
        descricao: "Camarão crocante de altíssima qualidade acompanhado de arroz soltinho, batata frita e molho especial da casa.",
        tag: "🥇 O Especial da Casa",
        serve: "3 pessoas"
    },
    {
        nome: "Filé de Peixe com Molho de Camarão",
        preco: "130,00",
        descricao: "Peixe leve e saboroso, coberto com um molho de camarão cremoso e aquele toque caiçara do mar.",
        tag: "⭐ O Mais Pedido",
        serve: "3 pessoas"
    },
    {
        nome: "Frango à Parmegiana",
        preco: "125,00",
        descricao: "Frango suculento coberto com molho de tomate caseiro e queijo gratinado, servido com arroz e fritas.",
        tag: "🍽️ Clássico da Casa",
        serve: "3 pessoas"
    }
];
