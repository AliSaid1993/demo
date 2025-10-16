'use client';

import { Mail } from 'lucide-react';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-primary-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-primary-red w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Mail className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            اشترك في نشرتنا الإخبارية
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 px-4">
            احصل على آخر العروض والتحديثات مباشرة في بريدك الإلكتروني
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-4 py-3 sm:px-6 sm:py-4 rounded-lg text-primary-black text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary-red"
              required
            />
            <button
              type="submit"
              className="bg-primary-red hover:bg-red-700 px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-sm sm:text-base font-bold transition-all transform hover:scale-105 whitespace-nowrap"
            >
              اشترك الآن
            </button>
          </form>

          <p className="text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4 px-4">
            نحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت.
          </p>
        </div>
      </div>
    </section>
  );
}
