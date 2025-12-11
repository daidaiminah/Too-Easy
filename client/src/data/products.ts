import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic White Sneakers',
    price: 89.99,
    description: 'Comfortable and stylish white sneakers for everyday wear.',
    image: '/images/products/sneakers.jpg',
    category: 'footwear',
    rating: 4.5,
    reviews: 128,
    inStock: true,
  },
  {
    id: 2,
    name: 'Slim Fit Jeans',
    price: 59.99,
    description: 'Classic blue denim jeans with a modern slim fit.',
    image: '/images/products/jeans.jpg',
    category: 'pants',
    rating: 4.2,
    reviews: 89,
    inStock: true,
  },
  {
    id: 3,
    name: 'Cotton T-Shirt',
    price: 24.99,
    description: 'Soft cotton t-shirt available in multiple colors.',
    image: '/images/products/tshirt.jpg',
    category: 'tops',
    rating: 4.0,
    reviews: 156,
    inStock: true,
  },
  {
    id: 4,
    name: 'Leather Jacket',
    price: 199.99,
    description: 'Genuine leather jacket for a timeless look.',
    image: '/images/products/jacket.jpg',
    category: 'outerwear',
    rating: 4.8,
    reviews: 42,
    inStock: true,
  },
  {
    id: 5,
    name: 'Running Shoes',
    price: 119.99,
    description: 'Lightweight running shoes with excellent cushioning.',
    image: '/images/products/running-shoes.jpg',
    category: 'footwear',
    rating: 4.6,
    reviews: 201,
    inStock: true,
  },
  {
    id: 6,
    name: 'Knit Sweater',
    price: 69.99,
    description: 'Warm and cozy knit sweater for cold days.',
    image: '/images/products/sweater.jpg',
    category: 'tops',
    rating: 4.3,
    reviews: 78,
    inStock: false,
  },
  {
    id: 7,
    name: 'Baseball Cap',
    price: 29.99,
    description: 'Classic baseball cap with adjustable strap.',
    image: '/images/products/cap.jpg',
    category: 'accessories',
    rating: 4.1,
    reviews: 93,
    inStock: true,
  },
  {
    id: 8,
    name: 'Denim Jacket',
    price: 89.99,
    description: 'Classic denim jacket with a modern fit.',
    image: '/images/products/denim-jacket.jpg',
    category: 'outerwear',
    rating: 4.4,
    reviews: 67,
    inStock: true,
  },
];

export const categories = [
  { id: 1, name: 'T-Shirts', slug: 't-shirts', productCount: 12 },
  { id: 2, name: 'Jeans', slug: 'jeans', productCount: 8 },
  { id: 3, name: 'Dresses', slug: 'dresses', productCount: 15 },
  { id: 4, name: 'Jackets', slug: 'jackets', productCount: 6 },
  { id: 5, name: 'Shoes', slug: 'shoes', productCount: 10 },
  { id: 6, name: 'Accessories', slug: 'accessories', productCount: 20 },
];

export const featuredProducts = products.slice(0, 4);

export const newArrivals = [...products].sort((a, b) => b.id - a.id).slice(0, 4);

export const bestSellers = [...products]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 4);
