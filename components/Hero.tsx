'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const slides = [
  {
    title: 'مجموعة الأثاث الفاخر',
    subtitle: 'اكتشف أرقى قطع الأثاث لمنزلك',
    description: 'تصاميم عصرية وجودة استثنائية',
    cta: 'تسوق الآن',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80',
  },
  {
    title: 'غرف نوم راقية',
    subtitle: 'راحة وأناقة لا مثيل لها',
    description: 'صُممت لتمنحك أفضل تجربة نوم',
    cta: 'اكتشف المزيد',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80',
  },
  {
    title: 'غرف معيشة عصرية',
    subtitle: 'أثاث يعكس ذوقك الرفيع',
    description: 'تشكيلة متنوعة من التصاميم الحديثة',
    cta: 'استكشف الآن',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-gray-100">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative container mx-auto px-4 h-full flex items-center justify-between gap-8">
            {/* Logo Container - Right Side */}
            <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-end md:order-2">
              <div className="bg-white/98 backdrop-blur-md rounded-3xl shadow-2xl border-4 border-primary-red/30 p-4 sm:p-6 md:p-8 lg:p-10 hover:scale-105 transition-all duration-500 hover:shadow-primary-red/50 hover:border-primary-red/50">
                <img 
                  src="/logo.svg" 
                  alt="Carolina-Süd Möbel Logo" 
                  className="w-64 h-auto sm:w-72 md:w-80 lg:w-96 xl:w-[450px] object-contain drop-shadow-lg"
                  style={{ aspectRatio: '3/2' }}
                />
              </div>
            </div>
            
            {/* Content - Left Side */}
            <div className="hidden md:block max-w-xl text-white md:order-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 animate-fade-in leading-tight">
                {slide.title}
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl mb-2 md:mb-3 font-semibold">
                {slide.subtitle}
              </p>
              <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-gray-200">
                {slide.description}
              </p>
              <button className="bg-primary-red hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-lg">
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 sm:p-3 rounded-full transition-all z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-primary-black" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 sm:p-3 rounded-full transition-all z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary-black" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-primary-red w-6 sm:w-8' : 'bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
