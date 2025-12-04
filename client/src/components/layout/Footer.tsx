import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-montserrat font-bold text-xl mb-4">TOO EASY</h3>
            <p className="text-light-gray mb-4 text-sm">
              Effortless Style for Every Step.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-electric-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-electric-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-electric-blue transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div className="col-span-1">
            <h4 className="font-montserrat font-semibold text-md mb-4">SHOP</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products/mens" className="text-light-gray hover:text-white transition-colors text-sm">
                  Men&apos;s Clothing
                </Link>
              </li>
              <li>
                <Link href="/products/womens" className="text-light-gray hover:text-white transition-colors text-sm">
                  Women&apos;s Clothing
                </Link>
              </li>
              <li>
                <Link href="/products/accessories" className="text-light-gray hover:text-white transition-colors text-sm">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/products/new-arrivals" className="text-light-gray hover:text-white transition-colors text-sm">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h4 className="font-montserrat font-semibold text-md mb-4">COMPANY</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-light-gray hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-light-gray hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-light-gray hover:text-white transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-light-gray hover:text-white transition-colors text-sm">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service Links */}
          <div className="col-span-1">
            <h4 className="font-montserrat font-semibold text-md mb-4">CUSTOMER SERVICE</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-light-gray hover:text-white transition-colors text-sm">
                  Help & FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-light-gray hover:text-white transition-colors text-sm">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-light-gray hover:text-white transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-light-gray hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-10 border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <h4 className="font-montserrat font-semibold text-md mb-2">SUBSCRIBE TO OUR NEWSLETTER</h4>
              <p className="text-light-gray text-sm mb-4 md:mb-0">
                Be the first to know about new collections and exclusive offers.
              </p>
            </div>
            <div>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow py-2 px-4 text-black focus:outline-none focus:ring-2 focus:ring-electric-blue"
                  required
                />
                <button
                  type="submit"
                  className="bg-electric-blue text-white py-2 px-4 hover:bg-opacity-90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-light-gray text-sm">
          <p>&copy; {new Date().getFullYear()} Too Easy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
