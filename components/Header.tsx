'use client';

import { ShoppingCart, Search, Menu, User, Heart } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary-black text-white py-2">
        <div className="container mx-auto px-4 text-center text-xs sm:text-sm">
          <p className="hidden sm:block">شحن مجاني للطلبات فوق 5000 ريال | Free Shipping on Orders Over 5000 SAR</p>
          <p className="sm:hidden">شحن مجاني للطلبات فوق 5000 ر.س</p>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
              <span className="text-primary-red">متجر</span>
              <span className="text-primary-black"> مفروشات فاخر</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-primary-black hover:text-primary-red transition-colors font-semibold">
              الرئيسية
            </a>
            <a href="#categories" className="text-primary-black hover:text-primary-red transition-colors font-semibold">
              الفئات
            </a>
            <a href="#products" className="text-primary-black hover:text-primary-red transition-colors font-semibold">
              المنتجات
            </a>
            <a href="#about" className="text-primary-black hover:text-primary-red transition-colors font-semibold">
              من نحن
            </a>
            <a href="#contact" className="text-primary-black hover:text-primary-red transition-colors font-semibold">
              اتصل بنا
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <button className="hidden sm:flex p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Search">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-primary-black" />
            </button>
            <button className="hidden md:flex p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Wishlist">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-primary-black" />
            </button>
            <button className="hidden sm:flex p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Account">
              <User className="w-4 h-4 sm:w-5 sm:h-5 text-primary-black" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative" aria-label="Cart">
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-primary-black" />
              <span className="absolute -top-1 -right-1 bg-primary-red text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-[10px] sm:text-xs">
                0
              </span>
            </button>
            <button 
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-primary-black" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-3">
              <a href="#home" className="text-primary-black hover:text-primary-red transition-colors font-semibold py-2">
                الرئيسية
              </a>
              <a href="#categories" className="text-primary-black hover:text-primary-red transition-colors font-semibold py-2">
                الفئات
              </a>
              <a href="#products" className="text-primary-black hover:text-primary-red transition-colors font-semibold py-2">
                المنتجات
              </a>
              <a href="#about" className="text-primary-black hover:text-primary-red transition-colors font-semibold py-2">
                من نحن
              </a>
              <a href="#contact" className="text-primary-black hover:text-primary-red transition-colors font-semibold py-2">
                اتصل بنا
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
