import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ShoppingBag, User, Menu, X, Search, Phone, Mail, ChevronDown, Heart, Check, Globe, Settings, DollarSign, LogOut, Facebook, Twitter, Youtube, Linkedin, MapPin } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { logout } from '@/redux/features/auth/authSlice';
import TooEazyLogo from "/public/images/Logo.png"

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState('English');
  const [currency, setCurrency] = useState('USD');
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  
  const { totalItems } = useSelector((state: RootState) => state.cart);
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  const languages = ['English', 'Français', 'Español', 'عربي'];
  const currencies = ['USD', 'EUR', 'GBP', 'MAD'];
  
  const handleLogout = () => {
    dispatch(logout());
    router.push('/login');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setShowLangDropdown(false);
        setShowCurrencyDropdown(false);
        setShowAccountDropdown(false);
      }
      // Close more menu when clicking outside
      if (showMoreMenu && !target.closest('.more-menu') && !target.closest('.more-menu-button')) {
        setShowMoreMenu(false);
      }
    };

    // Close more menu when pressing Escape key
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showMoreMenu) {
        setShowMoreMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [showMoreMenu]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div>
      {/* Top Bar - Disappears on scroll */}
      <div className={`bg-blue-500 text-white text-sm py-2 transition-all duration-300 fixed top-0 left-0 right-0 z-40 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto'}`}>
        <div className="container-custom flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>contact@addina.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <button 
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="flex items-center hover:text-blue-100"
              >
                <Globe className="h-4 w-4 mr-1" />
                <span>{language}</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              {showLangDropdown && (
                <div className="absolute z-50 mt-2 w-40 bg-white rounded-md shadow-lg">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setShowLangDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 flex justify-between items-center"
                    >
                      {lang}
                      {language === lang && <Check className="h-4 w-4 text-blue-500" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="relative">
              <button 
                onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                className="flex items-center hover:text-blue-100"
              >
                <DollarSign className="h-4 w-4 mr-1" />
                <span>{currency}</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              {showCurrencyDropdown && (
                <div className="absolute z-50 mt-2 w-20 bg-white rounded-md shadow-lg right-0">
                  {currencies.map((curr) => (
                    <button
                      key={curr}
                      onClick={() => {
                        setCurrency(curr);
                        setShowCurrencyDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 flex justify-between items-center"
                    >
                      {curr}
                      {currency === curr && <Check className="h-4 w-4 text-blue-500" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="relative">
              <button 
                onClick={() => setShowAccountDropdown(!showAccountDropdown)}
                className="flex items-center hover:text-blue-100"
              >
                <Settings className="h-4 w-4 mr-1" />
                <span>Setting</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              {showAccountDropdown && (
                <div className="absolute z-50 mt-2 w-48 bg-white rounded-md shadow-lg right-0">
                  {isAuthenticated ? (
                    <>
                      <Link href="/account" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                        My Account
                      </Link>
                      <Link href="/orders" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                        My Orders
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link href="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                        Login
                      </Link>
                      <Link href="/register" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                        Register
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Fixed at the top */}
      <nav className={`bg-white shadow-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : 'top-10'}`}>
        <div className="container-custom py-3">
          <div className="flex items-center justify-between">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:text-blue-600"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Logo */}
            <div className="flex-1 flex items-center justify-center md:justify-start">
              <Link href="/" className="text-2xl font-bold text-gray-800">
                <Image src={TooEazyLogo} alt="TooEazy Logo" width={100} height={50} />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium hover:text-blue-600 transition-colors ${
                    router.pathname === link.href ? 'text-blue-600' : 'text-gray-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-6">
              {/* More Menu Button */}
              <button 
                onClick={() => setShowMoreMenu(!showMoreMenu)}
                className="text-gray-700 hover:text-blue-600 transition-colors more-menu-button"
                aria-label="More information"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
              
              <div className="h-6 w-px bg-gray-300"></div>
              <Link href="/wishlist" className="text-gray-700 hover:text-blue-600 transition-colors relative group">
                <Heart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  0
                </span>
                <span className="sr-only">Wishlist</span>
              </Link>
              
              <Link href="/compare" className="text-gray-700 hover:text-blue-600 transition-colors relative group">
                <Check className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  0
                </span>
                <span className="sr-only">Compare</span>
              </Link>
              
              <div className="h-6 w-px bg-gray-300"></div>
              
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>

              <Link 
                href={isAuthenticated ? '/account' : '/login'} 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                aria-label={isAuthenticated ? 'My Account' : 'Login'}
              >
                <User className="h-5 w-5" />
              </Link>

              <Link 
                href="/cart" 
                className="text-gray-700 hover:text-blue-600 transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Search bar - conditionally shown */}
          {isSearchOpen && (
            <div className="pt-4 pb-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full border border-light-gray rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-electric-blue"
                />
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black hover:text-electric-blue"
                  aria-label="Search"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pt-4 pb-2">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`font-medium hover:text-electric-blue transition-colors ${
                      router.pathname === link.href ? 'text-electric-blue' : 'text-black'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* More Info Sidebar */}
      <div 
        className={`fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 more-menu ${
          showMoreMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="text-2xl font-bold">ADDINA</div>
            <button 
              onClick={() => setShowMoreMenu(false)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {/* Search */}
          <div className="p-6 border-b">
            <div className="relative">
              <input
                type="text"
                placeholder="What are you searching for?"
                className="w-full border-b border-gray-300 py-2 px-4 focus:outline-none focus:border-blue-600"
              />
              <Search className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                <span>12/A, Mirnada City Tower, NYC</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gray-500 mr-3" />
                <a href="tel:+088889797697" className="hover:text-blue-600">+088 88979 7697</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-500 mr-3" />
                <a href="mailto:support@mail.com" className="hover:text-blue-600">support@mail.com</a>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="flex-1 p-6 overflow-y-auto">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={`mobile-${link.name}`}>
                  <Link
                    href={link.href}
                    className="block py-2 text-gray-700 hover:text-blue-600"
                    onClick={() => setShowMoreMenu(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              {isAuthenticated ? (
                <>
                  <li>
                    <Link 
                      href="/account" 
                      className="block py-2 text-gray-700 hover:text-blue-600"
                      onClick={() => setShowMoreMenu(false)}
                    >
                      My Account
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        handleLogout();
                        setShowMoreMenu(false);
                      }}
                      className="block py-2 text-gray-700 hover:text-blue-600"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link 
                      href="/login" 
                      className="block py-2 text-gray-700 hover:text-blue-600"
                      onClick={() => setShowMoreMenu(false)}
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/register" 
                      className="block py-2 text-gray-700 hover:text-blue-600"
                      onClick={() => setShowMoreMenu(false)}
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Overlay */}
      {showMoreMenu && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setShowMoreMenu(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
