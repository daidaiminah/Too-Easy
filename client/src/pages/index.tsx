import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from "/public/images/IMG-20250521-WA0004.jpg"
import img2 from "/public/images/IMG-20250521-WA0005.jpg"
import img3 from "/public/images/IMG-20250521-WA0006.jpg"

import img4 from "/public/images/IMG-20250521-WA0024.jpg"
import img5 from "/public/images/IMG-20250521-WA0023.jpg"
import img6 from "/public/images/IMG-20250521-WA0018.jpg"
import img7 from "/public/images/IMG-20250521-WA0020.jpg"


const Home: NextPage = () => {
  // Hero images that will rotate
  const heroImages = [img1, img2, img3, img4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change image every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // 10 seconds for demonstration, change to 30000 for 30 seconds

    return () => clearInterval(interval);
  }, []);
  // Featured categories
  const categories = [
    { name: "Men's Collection", image: img1, href: "/products/mens" },
    { name: "Women's Collection", image: img2, href: "/products/womens" },
    { name: "Accessories", image: img3, href: "/products/accessories" }
  ];

  // Featured products
  const featuredProducts = [
    { id: '1', name: 'Minimal Logo Tee', price: 35, image: img4, slug: 'minimal-logo-tee' },
    { id: '2', name: 'Urban Hoodie', price: 65, image: img5, slug: 'urban-hoodie' },
    { id: '3', name: 'Street Smart Cap', price: 25, image: img6, slug: 'street-smart-cap' },
    { id: '4', name: 'Comfort Track Pants', price: 55, image: img7, slug: 'comfort-track-pants' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Blurred Background Image */}
        <div className="absolute inset-0">
          <Image 
            src={img1}
            alt="Too Easy Fashion Background"
            fill
            style={{ objectFit: 'cover' }}
            className="blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative h-full container-custom flex items-center px-4">
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <span className="text-lg md:text-xl font-medium text-blue-300 mb-4 inline-block">New Collection 2024</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Elevate Your Style with Our Latest Collection
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-lg">
                Discover the perfect blend of comfort and style with our handpicked selection of premium fashion.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/products" 
                  className="bg-white text-gray-900 font-medium px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300 inline-flex items-center"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/collections" 
                  className="border-2 border-white text-white font-medium px-8 py-3 rounded-md hover:bg-white hover:bg-opacity-10 transition duration-300"
                >
                  View Collection
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Right Side - Changing Image */}
          <div className="hidden lg:block w-1/2 pl-12 relative h-full">
            <div className="relative w-full h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={heroImages[currentImageIndex]}
                    alt={`Fashion Item ${currentImageIndex + 1}`}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="drop-shadow-2xl"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">New Arrivals</h2>
            <div className="flex space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* Product Card 1 */}
            <div className="bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[3/4]">
                <Image
                  src={img1}
                  alt="Product 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <p className="text-sm text-gray-500 mb-1">Men's T-Shirt</p>
                <h3 className="font-medium text-gray-900 mb-1">Classic Fit T-Shirt</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold">$29.99</span>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[3/4]">
                <Image
                  src={img2}
                  alt="Product 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <p className="text-sm text-gray-500 mb-1">Women's Dress</p>
                <h3 className="font-medium text-gray-900 mb-1">Summer Floral Dress</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold">$49.99</span>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[3/4]">
                <Image
                  src={img3}
                  alt="Product 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <p className="text-sm text-gray-500 mb-1">Men's Jeans</p>
                <h3 className="font-medium text-gray-900 mb-1">Slim Fit Jeans</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold">$59.99</span>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[3/4]">
                <Image
                  src={img4}
                  alt="Product 4"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <p className="text-sm text-gray-500 mb-1">Women's Top</p>
                <h3 className="font-medium text-gray-900 mb-1">Casual Blouse</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold">$34.99</span>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 5 - Only visible on larger screens */}
            <div className="hidden lg:block bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[3/4]">
                <Image
                  src={img5}
                  alt="Product 5"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <p className="text-sm text-gray-500 mb-1">Accessories</p>
                <h3 className="font-medium text-gray-900 mb-1">Leather Belt</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold">$29.99</span>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 - Free Delivery */}
            <div className="flex items-start">
              <div className="bg-blue-50 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Free Delivery</h3>
                <p className="text-gray-600">Free shipping on all order</p>
              </div>
            </div>

            {/* Feature 2 - Money Return */}
            <div className="flex items-start">
              <div className="bg-green-50 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Money Return</h3>
                <p className="text-gray-600">Back guarantee under 7 days</p>
              </div>
            </div>

            {/* Feature 3 - Online Support */}
            <div className="flex items-start">
              <div className="bg-purple-50 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Online Support 24/7</h3>
                <p className="text-gray-600">Support online 24 hours a day</p>
              </div>
            </div>

            {/* Feature 4 - Reliable */}
            <div className="flex items-start">
              <div className="bg-amber-50 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Reliable</h3>
                <p className="text-gray-600">Trusted by 1000+ brands</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div 
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-80 overflow-hidden"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                  <Link href={category.href} className="text-white flex items-center hover:text-electric-blue transition-colors">
                    Shop Now <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/products/${product.slug}`}>
                  <div className="relative h-72 overflow-hidden mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                  <p className="text-electric-blue font-medium">${product.price.toFixed(2)}</p>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/products" className="btn-secondary inline-block">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-96">
                <Image
                  src="/IMG-20250521-WA0013.jpg"
                  alt="Our Quality"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-montserrat font-bold mb-6">Our Commitment to Quality</h2>
              <p className="text-gray-600 mb-6">
                At Too Easy, we believe that style should never compromise on comfort. Every piece in our collection is crafted with premium materials and meticulous attention to detail, ensuring that you look and feel your best with every wear.
              </p>
              <p className="text-gray-600 mb-8">
                Our minimalist approach to design is rooted in the belief that true style is effortless. Clean lines, bold statements, and versatile pieces that transition seamlessly from day to night – that's the Too Easy promise.
              </p>
              <Link href="/about" className="btn-primary inline-block">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-montserrat font-bold mb-4">Join the Too Easy Community</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter to receive exclusive offers, early access to new collections, and style inspiration directly to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow py-3 px-4 text-black focus:outline-none focus:ring-2 focus:ring-electric-blue"
                required
              />
              <button
                type="submit"
                className="bg-electric-blue text-white py-3 px-6 hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
