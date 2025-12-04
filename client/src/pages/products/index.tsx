import React, { useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { Filter, ChevronDown } from 'lucide-react';
import { Disclosure } from '@headlessui/react';
import Img1 from "/public/images/IMG-20250521-WA0024.jpg"
import Img2 from "/public/images/IMG-20250521-WA0023.jpg"
import Img3 from "/public/images/IMG-20250521-WA0018.jpg"
import Img4 from "/public/images/IMG-20250521-WA0020.jpg"
import Img5 from "/public/images/IMG-20250521-WA0014.jpg"
import Img6 from "/public/images/IMG-20250521-WA0012.jpg"
import Img7 from "/public/images/IMG-20250521-WA0021.jpg"
import Img8 from "/public/images/IMG-20250521-WA0022.jpg"
import Img9 from "/public/images/IMG-20250521-WA0026.jpg"
import Img10 from "/public/images/IMG-20250521-WA0008.jpg"
import Img11 from "/public/images/IMG-20250521-WA0008.jpg"
import Img12 from "/public/images/IMG-20250521-WA0025.jpg"

// Mock data for products (this would come from API in a real app)
const productData = [
  { id: '1', name: 'Minimal Logo Tee', price: 35, image: Img1, slug: 'minimal-logo-tee', category: 'mens' },
  { id: '2', name: 'Urban Hoodie', price: 65, image: Img2, slug: 'urban-hoodie', category: 'mens' },
  { id: '3', name: 'Street Smart Cap', price: 25, image: Img3, slug: 'street-smart-cap', category: 'accessories' },
  { id: '4', name: 'Comfort Track Pants', price: 55, image: Img4, slug: 'comfort-track-pants', category: 'mens' },
  { id: '5', name: 'Classic Bomber Jacket', price: 95, image: Img5, slug: 'classic-bomber-jacket', category: 'womens' },
  { id: '6', name: 'Minimalist Watch', price: 85, image: Img6, slug: 'minimalist-watch', category: 'accessories' },
  { id: '7', name: 'Essential Tote Bag', price: 45, image: Img7, slug: 'essential-tote-bag', category: 'accessories' },
  { id: '8', name: 'Relaxed Fit Sweater', price: 70, image: Img8, slug: 'relaxed-fit-sweater', category: 'womens' },
  { id: '9', name: 'Signature Sneakers', price: 90, image: Img9, slug: 'signature-sneakers', category: 'mens' },
  { id: '10', name: 'Modern Slim Jeans', price: 75, image: Img10, slug: 'modern-slim-jeans', category: 'womens' },
  { id: '11', name: 'Casual Knit Sweater', price: 65, image: Img11, slug: 'casual-knit-sweater', category: 'womens' },
  { id: '12', name: 'Basic White Tee', price: 30, image: Img12, slug: 'basic-white-tee', category: 'mens' },
];

const ProductsPage: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortOption, setSortOption] = useState<string>('newest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all' 
    ? productData 
    : productData.filter(product => product.category === selectedCategory);

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-low') {
      return a.price - b.price;
    }
    if (sortOption === 'price-high') {
      return b.price - a.price;
    }
    // Default to newest
    return parseInt(b.id) - parseInt(a.id);
  });

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'mens', name: 'Men\'s' },
    { id: 'womens', name: 'Women\'s' },
    { id: 'accessories', name: 'Accessories' },
  ];

  const sortOptions = [
    { id: 'newest', name: 'Newest' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
  ];

  return (
    <Layout title="Shop All Products | Too Easy" description="Browse our collection of minimalist streetwear fashion.">
      <div className="container-custom py-12">
        <h1 className="text-3xl font-montserrat font-bold mb-8">All Products</h1>

        {/* Mobile filter button */}
        <div className="md:hidden mb-6">
          <button
            className="flex items-center justify-between w-full bg-white border border-gray-300 p-3 rounded-md"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <span className="flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filters & Sorting
            </span>
            <ChevronDown className={`h-5 w-5 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Mobile Dropdown */}
          <div className={`md:hidden ${isFilterOpen ? 'block' : 'hidden'} mb-6`}>
            <div className="bg-white border border-gray-200 rounded-md p-4 mb-4">
              <h3 className="font-medium mb-3">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center">
                    <input
                      id={`mobile-category-${category.id}`}
                      name="category"
                      type="radio"
                      checked={selectedCategory === category.id}
                      onChange={() => setSelectedCategory(category.id)}
                      className="h-4 w-4 text-electric-blue focus:ring-electric-blue"
                    />
                    <label htmlFor={`mobile-category-${category.id}`} className="ml-2 text-sm text-gray-700">
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-md p-4">
              <h3 className="font-medium mb-3">Sort By</h3>
              <select
                className="block w-full p-2 border border-gray-300 rounded-md focus:ring-electric-blue focus:border-electric-blue"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Filters - Desktop Sidebar */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              <div>
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center">
                      <input
                        id={`category-${category.id}`}
                        name="category"
                        type="radio"
                        checked={selectedCategory === category.id}
                        onChange={() => setSelectedCategory(category.id)}
                        className="h-4 w-4 text-electric-blue focus:ring-electric-blue"
                      />
                      <label htmlFor={`category-${category.id}`} className="ml-2 text-sm text-gray-700">
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Sort By</h3>
                <select
                  className="block w-full p-2 border border-gray-300 rounded-md focus:ring-electric-blue focus:border-electric-blue"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between w-full font-medium">
                        <span>Price</span>
                        <ChevronDown className={`${open ? 'rotate-180 transform' : ''} h-4 w-4`} />
                      </Disclosure.Button>
                      <Disclosure.Panel className="pt-3 pb-2 text-sm text-gray-500">
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <input
                              id="price-all"
                              name="price"
                              type="radio"
                              className="h-4 w-4 text-electric-blue focus:ring-electric-blue"
                              defaultChecked
                            />
                            <label htmlFor="price-all" className="ml-2 text-sm text-gray-700">
                              All
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="price-under-50"
                              name="price"
                              type="radio"
                              className="h-4 w-4 text-electric-blue focus:ring-electric-blue"
                            />
                            <label htmlFor="price-under-50" className="ml-2 text-sm text-gray-700">
                              Under $50
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="price-50-100"
                              name="price"
                              type="radio"
                              className="h-4 w-4 text-electric-blue focus:ring-electric-blue"
                            />
                            <label htmlFor="price-50-100" className="ml-2 text-sm text-gray-700">
                              $50 to $100
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="price-over-100"
                              name="price"
                              type="radio"
                              className="h-4 w-4 text-electric-blue focus:ring-electric-blue"
                            />
                            <label htmlFor="price-over-100" className="ml-2 text-sm text-gray-700">
                              Over $100
                            </label>
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product) => (
                <div key={product.id} className="group">
                  <Link href={`/products/${product.slug}`}>
                    <div className="relative h-80 overflow-hidden mb-4">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
