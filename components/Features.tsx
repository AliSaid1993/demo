'use client';

import { Truck, Shield, Headphones, CreditCard } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'شحن مجاني',
    description: 'للطلبات فوق 5000 ريال',
  },
  {
    icon: Shield,
    title: 'ضمان الجودة',
    description: 'ضمان لمدة 5 سنوات',
  },
  {
    icon: Headphones,
    title: 'دعم 24/7',
    description: 'خدمة عملاء متميزة',
  },
  {
    icon: CreditCard,
    title: 'دفع آمن',
    description: 'طرق دفع متعددة',
  },
];

export default function Features() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="bg-gray-100 group-hover:bg-primary-red w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-black group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-primary-black mb-1 sm:mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
