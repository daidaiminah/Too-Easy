import React, { useState } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/features/cart/cartSlice';
import { Plus, Minus, ShoppingBag, Heart } from 'lucide-react';
import Img24 from '/public/images/IMG-20250521-WA0024.jpg';
import Img25 from '/public/images/IMG-20250521-WA0025.jpg';
import Img23 from '/public/images/IMG-20250521-WA0023.jpg';
import Img13 from '/public/images/IMG-20250521-WA0013.jpg';
import Img18 from '/public/images/IMG-20250521-WA0018.jpg';
import Img20 from '/public/images/IMG-20250521-WA0020.jpg';
import Img19 from '/public/images/IMG-20250521-WA0019.jpg';

// Mock data for products (this would come from API in a real app)
const productData = [
  { id: '1', name: 'Minimal Logo Tee', price: 35, images: [Img24, Img25], slug: 'minimal-logo-tee', description: 'Our signature logo tee featuring a minimalist design. Made from 100% organic cotton for ultimate comfort and breathability.', sizes: ['S', 'M', 'L', 'XL'], colors: ['Black', 'White', 'Gray'] },
  { id: '2', name: 'Urban Hoodie', price: 65, images: [Img23, Img13], slug: 'urban-hoodie', description: 'Stay warm and stylish with our Urban Hoodie. Features a relaxed fit and premium cotton-blend fabric for everyday comfort.', sizes: ['S', 'M', 'L', 'XL'], colors: ['Black', 'Navy', 'Olive'] },
  { id: '3', name: 'Street Smart Cap', price: 25, images: [Img18, Img19], slug: 'street-smart-cap', description: 'Complete your look with our Street Smart Cap. Adjustable strap for a perfect fit and embroidered logo for a subtle branding touch.', sizes: ['One Size'], colors: ['Black', 'White', 'Beige'] },
  { id: '4', name: 'Comfort Track Pants', price: 55, images: [Img20], slug: 'comfort-track-pants', description: 'Our Comfort Track Pants are designed for both style and comfort. Features an elastic waistband, adjustable drawstring, and tapered leg.', sizes: ['S', 'M', 'L', 'XL'], colors: ['Black', 'Gray'] },
];

interface ProductProps {
  product: {
    id: string;
    name: string;
    price: number;
    images: string[];
    slug: string;
    description: string;
    sizes: string[];
    colors: string[];
  };
}

const ProductDetail: NextPage<ProductProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dispatch = useDispatch();

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        quantity,
        size: selectedSize,
        color: selectedColor,
      })
    );
  };

  if (!product) {
    return (
      <Layout>
        <div className="container-custom py-12">
          <p>Product not found</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${product.name} | Too Easy`}
      description={product.description}
    >
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative h-[500px] overflow-hidden">
              <Image
                src={product.images[currentImageIndex]}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-md"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-20 w-20 ${
                      currentImageIndex === index
                        ? 'ring-2 ring-electric-blue'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} - View ${index + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-md"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-montserrat font-bold mb-2">{product.name}</h1>
            <p className="text-xl text-electric-blue font-semibold mb-4">${product.price.toFixed(2)}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border ${
                      selectedSize === size
                        ? 'border-electric-blue bg-electric-blue text-white'
                        : 'border-gray-300 hover:border-electric-blue'
                    } rounded-md transition-colors`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border ${
                      selectedColor === color
                        ? 'border-electric-blue bg-electric-blue text-white'
                        : 'border-gray-300 hover:border-electric-blue'
                    } rounded-md transition-colors`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Quantity</h3>
              <div className="flex items-center border border-gray-300 rounded-md w-32">
                <button
                  onClick={decrementQuantity}
                  className="px-3 py-2 text-gray-500 hover:text-electric-blue"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="flex-1 text-center">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="px-3 py-2 text-gray-500 hover:text-electric-blue"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart & Wishlist Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 btn-primary flex items-center justify-center"
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
              <button className="sm:flex-none px-4 py-2 border border-gray-300 rounded hover:border-electric-blue transition-colors">
                <Heart className="h-5 w-5" />
              </button>
            </div>

            {/* Product Meta */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Material</p>
                  <p>100% Premium Cotton</p>
                </div>
                <div>
                  <p className="text-gray-500">Shipping</p>
                  <p>Free Shipping (3-5 business days)</p>
                </div>
                <div>
                  <p className="text-gray-500">Returns</p>
                  <p>Free 30-day returns</p>
                </div>
                <div>
                  <p className="text-gray-500">SKU</p>
                  <p>TE-{product.id.padStart(6, '0')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // In a real app, fetch products from an API
  const paths = productData.map((product) => ({
    params: { slug: product.slug },
  }));

  return {
    paths,
    fallback: 'blocking', // Show 404 for non-existent slugs
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // In a real app, fetch the specific product from an API
  const slug = params?.slug as string;
  const product = productData.find((p) => p.slug === slug);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
    revalidate: 60, // Re-generate page every 60 seconds if needed
  };
};

export default ProductDetail;
