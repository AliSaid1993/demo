'use client';

import { Sofa, Bed, Lamp, Armchair, Home, UtensilsCrossed } from 'lucide-react';

const categories = [
  {
    name: 'غرف المعيشة',
    icon: Sofa,
    count: '120+ منتج',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80',
  },
  {
    name: 'غرف النوم',
    icon: Bed,
    count: '95+ منتج',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&q=80',
  },
  {
    name: 'الإضاءة',
    icon: Lamp,
    count: '80+ منتج',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&q=80',
  },
  {
    name: 'الكراسي',
    icon: Armchair,
    count: '65+ منتج',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=400&q=80',
  },
  {
    name: 'غرف الطعام',
    icon: UtensilsCrossed,
    count: '75+ منتج',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&q=80',
  },
  {
    name: 'ديكور المنزل',
    icon: Home,
    count: '150+ منتج',
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=400&q=80',
  },
];

export default function Categories() {
  return (
    <section id="categories" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-black mb-3 sm:mb-4">
            تصفح حسب <span className="text-primary-red">الفئة</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            اكتشف مجموعتنا الواسعة من الأثاث الفاخر المصنف حسب الغرف والاستخدام
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-56 sm:h-60 md:h-64"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                
                <div className="relative h-full flex flex-col justify-end p-4 sm:p-5 md:p-6">
                  <div className="bg-white/10 backdrop-blur-sm w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary-red transition-colors">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                    {category.name}
                  </h3>
                  <p className="text-white/90 text-xs sm:text-sm">
                    {category.count}
                  </p>
                </div>

                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-primary-red text-white px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  تسوق الآن
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
