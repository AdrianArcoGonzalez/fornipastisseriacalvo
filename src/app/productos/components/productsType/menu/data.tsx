interface ShopProduct {
  ca: string;
  es: string;
  en: string;
  tag?: {
    es: string;
    en: string;
    ca: string;
  };
}
interface ShopProductCategory {
  [key: string]: ShopProduct[];
}

const products: ShopProductCategory = {
  sourdough: [
    {
      ca: "Pa de pagès",
      es: "Pan de pagès",
      en: "Country bread",
      tag: { es: "Top Ventas", en: "Top Sales", ca: "Més venuts" },
    },
    {
      ca: "Pa de chia",
      es: "Pan de chía",
      en: "Chia bread",
      tag: { es: "Especial", en: "Special", ca: "Especial" },
    },
    {
      ca: "Pa de espelta",
      es: "Pan de espelta",
      en: "Spelt bread",
      tag: { es: "Especial", en: "Special", ca: "Especial" },
    },
    { ca: "Pa de coca", es: "Pan de coca", en: "Coca bread" },
    { ca: "Rodó", es: "Redondo", en: "Round bread" },
    {
      ca: "Pa de blat de moro",
      es: "Pan de maíz",
      en: "Corn bread",
      tag: { es: "Especial", en: "Special", ca: "Especial" },
    },
    { ca: "Pa integral", es: "Pan integral", en: "Whole wheat bread" },
    { ca: "Pa sense sal", es: "Pan sin sal", en: "Salt-free bread" },

    { ca: "Pa de llenya", es: "Pan de leña", en: "Wood-fired bread" },
    {
      ca: "Pa de sègol",
      es: "Pan de centeno",
      en: "Rye bread",
      tag: { es: "Especial", en: "Special", ca: "Especial" },
    },
    {
      ca: "Pa de sarraí",
      es: "Pan de trigo sarraceno",
      en: "Buckwheat bread",
      tag: { es: "Especial", en: "Special", ca: "Especial" },
    },
    { ca: "Pa de llenya", es: "Pan de leña", en: "Wood-fired bread" },
    { ca: "Pa de cereals", es: "Pan de cereales", en: "Cereal bread" },
    { ca: "Pa de neu", es: "Pan de nieve", en: "Snow bread" },
    {
      ca: "Rústic",
      es: "Rústico",
      en: "Rustic bread",
      tag: { es: "Top Ventas", en: "Top Sales", ca: "Més venuts" },
    },
    { ca: "Viena", es: "Viena", en: "Vienna bread" },
    { ca: "Pa de maquina", es: "Pan de máquina", en: "Machine-made bread" },
  ],
  pastry: [
    { ca: "Croissant", es: "Croissant", en: "Croissant" },
    {
      ca: "Croissant de xocolata amb llet",
      es: "Croissant de chocolate con leche",
      en: "Milk chocolate croissant",
      tag: { es: "Top Ventas", en: "Top Sales", ca: "Més venuts" },
    },
    {
      ca: "Croissant de xocolata blanca",
      es: "Croissant de chocolate blanco",
      en: "White chocolate croissant",
    },
    {
      ca: "Croissant de pistatxo",
      es: "Croissant de pistacho",
      en: "Pistachio croissant",
    },
    {
      ca: "Croissant mini salat",
      es: "Croissant mini salado",
      en: "Mini savory croissant",
    },
    { ca: "Trenes", es: "Trenzas", en: "Braided pastry" },
    { ca: "Ensaimada", es: "Ensaimada", en: "Ensaimada" },
    { ca: "Ensaimada Crema", es: "Ensaimada Crema", en: "Ensaimada Cream" },
    {
      ca: "Ensaimada cabell d'angel",
      es: "Ensaimada cabello de ángel",
      en: "Ensaimada Angel hair",
    },
    { ca: "Donuts", es: "Donuts", en: "Donuts" },
    {
      ca: "Canya de xocolata",
      es: "Caña de chocolate",
      en: "Chocolate cane",
    },
    {
      ca: "Canya de xocolata blanca",
      es: "Caña de chocolate blanco",
      en: "White chocolate cane",
    },
    {
      ca: "Canya de cabell d'angel",
      es: "Caña de cabello de ángel",
      en: "Angel hair cane",
    },
    { ca: "Canya de crema", es: "Caña de crema", en: "Cream cane" },
    {
      ca: "Galetes sense sucre",
      es: "Galletas sin azúcar",
      en: "Sugar-free cookies",
    },
    { ca: "Lents", es: "Lentes", en: "Lentils" },
    {
      ca: "Pasta de full de xocolata amb llet",
      es: "Hojaldre de chocolate con leche",
      en: "Milk chocolate puff pastry",
    },
    {
      ca: "Pasta de full de xocolata blanca",
      es: "Hojaldre de chocolate blanco",
      en: "White chocolate puff pastry",
    },
    {
      ca: "Pasta de full de cabell d'angel",
      es: "Hojaldre de cabello de ángel",
      en: "Angel hair puff pastry",
    },
    {
      ca: "Pasta de full de crema ",
      es: "Hojaldre de crema",
      en: "Cream puff pastry",
    },
    {
      ca: "Pasta de full de xocolata amb llet",
      es: "Hojaldre de chocolate con leche",
      en: "Milk chocolate puff pastry",
    },
    {
      ca: "Coca llardons",
      es: "Coca de chicharrones",
      en: "Crackling flatbread",
    },
    {
      ca: "Entrepans vegetals",
      es: "Bocadillos vegetales",
      en: "Vegetable sandwiches",
    },
    { ca: "Braç de gitano", es: "Brazo de gitano", en: "Swiss roll" },
    { ca: "Lioneses", es: "Lionesas", en: "Cream puffs" },

    {
      ca: "Tartaletes de fruita",
      es: "Tartaletas de fruta",
      en: "Fruit tartlets",
    },
  ],
  finePastry: [
    {
      ca: "Sacher",
      es: "Sacher",
      en: "Sacher",
      tag: { es: "Top Ventas", en: "Top Sales", ca: "Més venuts" },
    },
    {
      ca: "Pastís de formatge",
      es: "Pastel de queso",
      en: "Cheesecake",
    },
    {
      ca: "Pastís de pastanaga",
      es: "Pastel de zanahoria",
      en: "Carrot cake",
    },
    { ca: "Red Velvet", es: "Red Velvet", en: "Red Velvet" },
    {
      ca: "Masini nata",
      es: "Tarta San Marcos nata",
      en: "Masini cream",
      tag: { es: "Top Ventas", en: "Top Sales", ca: "Més venuts" },
    },
    { ca: "Masini trufa", es: "Tarta San Marcos trufa", en: "Masini truffle" },
    {
      ca: "Masini nata i trufa",
      es: "Tarta San Marcos nata y trufa",
      en: "Masini cream and truffle",
    },
    {
      ca: "Masini de vainilla",
      es: "Tarta San Marcos de vainilla",
      en: "Masini vanilla",
    },
    { ca: "Sara", es: "Sara", en: "Sara" },
    { ca: "Mouse de fresa", es: "Mousse de fresa", en: "Strawberry mousse" },
    { ca: "Mouse de llimona", es: "Mousse de limón", en: "Lemon mousse" },
    {
      ca: "Mouse de cacaolat",
      es: "Mousse de cacaolat",
      en: "Cacaolat mousse",
      tag: { es: "Novedad", en: "New", ca: "Novetat" },
    },
    { ca: "Mouse de taronja", es: "Mousse de naranja", en: "Orange mousse" },
    { ca: "Mouse de lotus", es: "Mousse de lotus", en: "Lotus mousse" },
    { ca: "Mouse de kinder", es: "Mousse de kinder", en: "Kinder mousse" },
    {
      ca: "Mouse de crema catalana",
      es: "Mousse de crema catalana",
      en: "Crema catalana mousse",
    },
    {
      ca: "Mouse de xocolata",
      es: "Mousse de chocolate",
      en: "Chocolate mousse",
    },
    {
      ca: "Mouse de xocolata blanca",
      es: "Mousse de chocolate blanco",
      en: "White chocolate mousse",
    },
    {
      ca: "Mouse de stracciatella",
      es: "Mousse de stracciatella",
      en: "Stracciatella mousse",
    },
    { ca: "Mouse de mango", es: "Mousse de mango", en: "Mango mousse" },
  ],
};

export default products;
