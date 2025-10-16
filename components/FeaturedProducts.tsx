'use client';

import { ShoppingCart, Heart, Eye } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'كنبة فاخرة مودرن',
    price: '12,500',
    originalPrice: '15,000',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80',
    badge: 'خصم 20%',
    rating: 5,
  },
  {
    id: 2,
    name: 'طقم غرفة نوم كلاسيك',
    price: '18,900',
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&q=80',
    badge: 'جديد',
    rating: 5,
  },
  {
    id: 3,
    name: 'طاولة طعام خشبية',
    price: '8,750',
    originalPrice: '10,500',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&q=80',
    badge: 'عرض خاص',
    rating: 4,
  },
  {
    id: 4,
    name: 'كرسي استرخاء جلد',
    price: '5,200',
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&q=80',
    badge: 'الأكثر مبيعاً',
    rating: 5,
  },
  {
    id: 5,
    name: 'مكتبة خشبية عصرية',
    price: '6,800',
    originalPrice: '8,000',
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500&q=80',
    badge: 'خصم',
    rating: 4,
  },
  {
    id: 6,
    name: 'طقم صالون فاخر',
    price: '22,000',
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=500&q=80',
    badge: 'حصري',
    rating: 5,
  },
  {
    id: 7,
    name: 'سرير مزدوج راقي',
    price: '9,500',
    originalPrice: '11,000',
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=500&q=80',
    badge: 'توفير',
    rating: 5,
  },
  {
    id: 8,
    name: 'خزانة ملابس كبيرة',
    price: '14,300',
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&q=80',
    badge: 'جديد',
    rating: 4,
  },
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-black mb-3 sm:mb-4">
            المنتجات <span className="text-primary-red">المميزة</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            اختيارنا الحصري من أفضل قطع الأثاث الفاخر بأسعار تنافسية
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative overflow-hidden aspect-square bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Badge */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 bg-primary-red text-white px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-semibold">
                  {product.badge}
                </div>

                {/* Quick Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 sm:gap-3">
                  <button className="bg-white p-2 sm:p-3 rounded-full hover:bg-primary-red hover:text-white transition-colors" aria-label="Add to wishlist">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button className="bg-white p-2 sm:p-3 rounded-full hover:bg-primary-red hover:text-white transition-colors" aria-label="Quick view">
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button className="bg-white p-2 sm:p-3 rounded-full hover:bg-primary-red hover:text-white transition-colors" aria-label="Add to cart">
                    <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>

              <div className="p-3 sm:p-4 md:p-5">
                <h3 className="text-base sm:text-lg font-bold text-primary-black mb-2 group-hover:text-primary-red transition-colors line-clamp-2">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex gap-1 mb-2 sm:mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-3 h-3 sm:w-4 sm:h-4 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary-red">
                    {product.price} ر.س
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs sm:text-sm text-gray-400 line-through">
                      {product.originalPrice} ر.س
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <button className="bg-primary-black hover:bg-primary-red text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-bold transition-all transform hover:scale-105">
            عرض جميع المنتجات
          </button>
        </div>
      </div>
    </section>
  );
}
