import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Top Fashion Trends for 2023',
    excerpt: 'Discover the latest fashion trends that will dominate 2023 and how to style them.',
    content: `# Top Fashion Trends for 2023

As we step into 2023, the fashion world is embracing a mix of nostalgia and futuristic elements. Here are the key trends to watch out for:

## 1. Sustainable Fashion
Eco-friendly materials and sustainable production methods are no longer optional. Brands are focusing on circular fashion and upcycled materials.

## 2. Bold Colors
Vibrant hues and bold color blocking are making a strong statement this year.

## 3. 90s Revival
From baggy jeans to crop tops, 90s fashion is back with a modern twist.`,
    image: '/images/blog/trends-2023.jpg',
    date: '2023-06-15',
    author: 'Jane Smith',
    category: 'Fashion',
  },
  {
    id: 2,
    title: 'How to Style Denim on Denim',
    excerpt: 'Master the art of the Canadian tuxedo with these styling tips and tricks.',
    content: `# How to Style Denim on Denim

Denim on denim, also known as the "Canadian tuxedo," can be a stylish choice when done right. Here's how to nail the look:

## 1. Vary the Washes
Pair different shades of denim to create contrast between top and bottom.

## 2. Break It Up
Add a belt or layer with a white t-shirt to break up the denim.

## 3. Accessorize Wisely
Keep accessories minimal to let the denim shine.`,
    image: '/images/blog/denim-style.jpg',
    date: '2023-05-22',
    author: 'Mike Johnson',
    category: 'Style Tips',
  },
  {
    id: 3,
    title: 'The Ultimate Guide to Sustainable Fashion',
    excerpt: 'Learn how to build a sustainable wardrobe that\'s both stylish and eco-friendly.',
    content: `# The Ultimate Guide to Sustainable Fashion

Building a sustainable wardrobe is easier than you think. Here's how to get started:

## 1. Invest in Quality
Choose well-made pieces that will last longer.

## 2. Buy Second-Hand
Thrifting is a great way to reduce fashion waste.

## 3. Care for Your Clothes
Proper maintenance extends the life of your garments.`,
    image: '/images/blog/sustainable-fashion.jpg',
    date: '2023-04-10',
    author: 'Sarah Williams',
    category: 'Sustainability',
  },
  {
    id: 4,
    title: 'Accessories That Elevate Any Outfit',
    excerpt: 'Discover the power of accessories in transforming your look instantly.',
    content: `# Accessories That Elevate Any Outfit

Accessories can make or break an outfit. Here are the must-have pieces:

## 1. Statement Watches
A quality watch adds sophistication to any look.

## 2. Versatile Scarves
Perfect for adding color and texture.

## 3. Classic Belts
Define your waist and complete your outfit.`,
    image: '/images/blog/accessories.jpg',
    date: '2023-03-28',
    author: 'David Chen',
    category: 'Accessories',
  },
  {
    id: 5,
    title: 'Seasonal Color Palettes for 2023',
    excerpt: 'Find out which colors will dominate each season in 2023 and how to wear them.',
    content: `# Seasonal Color Palettes for 2023

Each season brings its own color trends. Here's what to expect in 2023:

## Spring
Soft pastels and floral tones dominate.

## Summer
Vibrant, saturated colors take center stage.

## Fall
Rich, warm earth tones are in vogue.

## Winter
Deep jewel tones and classic neutrals prevail.`,
    image: '/images/blog/color-palettes.jpg',
    date: '2023-02-15',
    author: 'Emily Rodriguez',
    category: 'Trends',
  },
];

export const featuredPosts = blogPosts.slice(0, 3);

export const recentPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 4);

export const categories = [...new Set(blogPosts.map(post => post.category))];
