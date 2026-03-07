import parfume13 from "../assets/parfume13.png";
import parfume14 from "../assets/parfume14.png";
import parfume15 from "../assets/parfume15.png";
import parfume16 from "../assets/parfume16.png";
import parfume17 from "../assets/parfume17.png";
import parfume18 from "../assets/parfume18.png";

export const products = [
  {
    id: 1,
    titleKey: "products.1.title",
    brand: "Maison Élan",
    price: 120,
    ml: 100,
    rating: 4.8,
    image: parfume13,
    descriptionKey: "products.1.description",
    notesKeys: ["Oud", "Vanilla", "Amber", "Saffron"],
    commentsKeys: [1, 2, 3],
  },
  {
    id: 2,
    titleKey: "products.2.title",
    brand: "Aroma Vera",
    price: 95,
    ml: 75,
    rating: 4.5,
    image: parfume14,
    descriptionKey: "products.2.description",
    notesKeys: ["Bergamot", "Orange Blossom", "Jasmine", "Musk"],
    commentsKeys: [4, 5, 6],
  },
  {
    id: 3,
    titleKey: "products.3.title",
    brand: "Noir Atelier",
    price: 110,
    ml: 100,
    rating: 4.7,
    image: parfume15,
    descriptionKey: "products.3.description",
    notesKeys: ["Rose", "Patchouli", "Cedarwood", "Black Pepper"],
    commentsKeys: [1, 5, 6],
  },
  {
    id: 4,
    titleKey: "products.4.title",
    brand: "Maison Élan",
    price: 130,
    ml: 100,
    rating: 4.9,
    image: parfume16,
    descriptionKey: "products.4.description",
    notesKeys: ["Sandalwood", "Leather", "Cardamom", "Incense"],
    commentsKeys: [2, 3, 4],
  },
  {
    id: 5,
    titleKey: "products.5.title",
    brand: "Aroma Vera",
    price: 105,
    ml: 90,
    rating: 4.6,
    image: parfume17,
    descriptionKey: "products.5.description",
    notesKeys: ["Amber", "Tonka Bean", "Vanilla", "Cinnamon"],
    commentsKeys: [1, 3, 5],
  },
  {
    id: 6,
    titleKey: "products.6.title",
    brand: "Pure Essence",
    price: 90,
    ml: 75,
    rating: 4.4,
    image: parfume18,
    descriptionKey: "products.6.description",
    notesKeys: ["White Musk", "Lily", "Cotton Flower", "Soft Woods"],
    commentsKeys: [2, 4, 6],
  },
];

// Комментарии
export const comments = [
  {
    id: 1,
    author: "Emily R.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    textKey: "products.comments.1",
  },
  {
    id: 2,
    author: "Michael T.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    textKey: "products.comments.2",
  },
  {
    id: 3,
    author: "Sophia L.",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 5,
    textKey: "products.comments.3",
  },
  {
    id: 4,
    author: "Daniel K.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 3,
    textKey: "products.comments.4",
  },
  {
    id: 5,
    author: "Olivia M.",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 4,
    textKey: "products.comments.5",
  },
  {
    id: 6,
    author: "James P.",
    avatar: "https://randomuser.me/api/portraits/men/19.jpg",
    rating: 5,
    textKey: "products.comments.6",
  },
];
