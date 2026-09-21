import { Dish, Review, GalleryItem } from './types';

import creamyAlfredoImg from './assets/images/creamy_alfredo_1781958600642.jpg';
import beefBurgerImg from './assets/images/beef_burger_1781958615596.jpg';
import grilledSalmonImg from './assets/images/grilled_salmon_1781958630357.jpg';
import chocolateLavaCakeImg from './assets/images/chocolate_lava_cake_1781958645636.jpg';
import restaurantInteriorImg from './assets/images/restaurant_interior_1781958580832.jpg';
import heroSteakGourmetImg from './assets/images/hero_steak_gourmet_1781958560784.jpg';

export const DISHES: Dish[] = [
  {
    id: 'd1',
    name: 'Truffle Garlic Bread',
    description: 'Warm toasted rustic sourdough baguette with black truffle butter, roasted farm garlic, and melted buffalo mozzarella.',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&q=80&w=600',
    category: 'starters',
    isPopular: false,
    preparationTime: '10 mins',
    rating: 4.7,
  },
  {
    id: 'd2',
    name: 'Tuscan Bruschetta',
    description: 'Crisp rustic bread rubbed with garlic, loaded with marinated heirloom cherry tomatoes, basil pesto, and aged balsamic reduction.',
    price: 10.49,
    image: 'https://images.unsplash.com/photo-1572448862527-d3c904757de6?auto=format&fit=crop&q=80&w=600',
    category: 'starters',
    isPopular: false,
    preparationTime: '8 mins',
    rating: 4.6,
  },
  {
    id: 'd3',
    name: 'Creamy Alfredo Pasta',
    description: 'Rich fettuccine tossed in dynamic double cream, aged parmesan cheese sauce, loaded with fresh minced garlic and flat-leaf parsley.',
    price: 12.99,
    image: creamyAlfredoImg,
    category: 'mains',
    isPopular: true,
    preparationTime: '15 mins',
    rating: 4.9,
  },
  {
    id: 'd4',
    name: 'Classic Beef Burger',
    description: 'Succulent double smash beef patties, melted sharp cheddar, vine-ripened tomatoes, crisp romaine, and caramelized onions on toasted brioche.',
    price: 11.99,
    image: beefBurgerImg,
    category: 'mains',
    isPopular: true,
    preparationTime: '12 mins',
    rating: 4.8,
  },
  {
    id: 'd5',
    name: 'Grilled Salmon Fillet',
    description: 'Perfectly pan-seared King salmon, crispy skin, served with roasted green asparagus spears, fresh lemon segment, and dill butter sauce.',
    price: 15.99,
    image: grilledSalmonImg,
    category: 'mains',
    isPopular: true,
    preparationTime: '18 mins',
    rating: 4.9,
  },
  {
    id: 'd6',
    name: 'Molten Chocolate Lava Cake',
    description: 'Decadent dark chocolate sponge cake with liquid fudge center, served warm with vanilla bean gelato and a fresh organic strawberry.',
    price: 6.99,
    image: chocolateLavaCakeImg,
    category: 'desserts',
    isPopular: true,
    preparationTime: '14 mins',
    rating: 4.9,
  },
  {
    id: 'd7',
    name: 'Vanilla Bean Panna Cotta',
    description: 'Silky smooth classic cooked Italian cream, infused with authentic Madagascar vanilla, accompanied by organic wild berry soup.',
    price: 7.49,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=600',
    category: 'desserts',
    isPopular: false,
    preparationTime: '8 mins',
    rating: 4.7,
  },
  {
    id: 'd8',
    name: 'Golden Ginger Mimosa',
    description: 'Sparkling refreshing cocktail with premium prosecco, organic citrus orange juice, and a zest of raw hand-pressed ginger roots.',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=600',
    category: 'drinks',
    isPopular: false,
    preparationTime: '5 mins',
    rating: 4.5,
  },
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    image: creamyAlfredoImg,
    caption: 'Fettuccine Alfredo cooked with premium aged parmesan.',
    category: 'dishes',
  },
  {
    id: 'g2',
    image: restaurantInteriorImg,
    caption: 'Our elegant and intimate main dining setup.',
    category: 'interior',
  },
  {
    id: 'g3',
    image: heroSteakGourmetImg,
    caption: 'Prime ribeye cuts seared by master chefs.',
    category: 'dishes',
  },
  {
    id: 'g4',
    image: beefBurgerImg,
    caption: 'Juicy artisan burgers assembled on buttered brioche.',
    category: 'dishes',
  },
  {
    id: 'g5',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    caption: 'The warm, relaxing ambience during evening hours.',
    category: 'atmosphere',
  },
  {
    id: 'g6',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800',
    caption: 'Unparalleled customer hospitality and wine service.',
    category: 'atmosphere',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Google User 1',
    role: 'Local Guide · 15 reviews',
    text: '[Paste Google Review Here] The ambiance here is incredible! Loved the atmosphere and the food was great. I highly recommend trying this place out.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: 'r2',
    author: 'Google User 2',
    role: 'Local Guide · 42 reviews',
    text: '[Paste Google Review Here] Excellent service and a beautiful interior. The food came out quickly and tasted amazing.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: 'r3',
    author: 'Google User 3',
    role: '3 reviews',
    text: '[Paste Google Review Here] A fantastic hidden gem. We went there for dinner and it exceeded our expectations. Will definitely be back!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
  },
];
