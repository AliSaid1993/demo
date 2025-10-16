'use client';

import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-12">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              <span className="text-primary-red">متجر</span> مفروشات فاخر
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
              وجهتك الأولى للأثاث الفاخر والتصاميم العصرية. نقدم لك أفضل المنتجات بأعلى معايير الجودة.
            </p>
            <div className="flex gap-2 sm:gap-3">
              <a href="#" className="bg-gray-800 hover:bg-primary-red p-2 sm:p-3 rounded-full transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-red p-2 sm:p-3 rounded-full transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-red p-2 sm:p-3 rounded-full transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-red p-2 sm:p-3 rounded-full transition-colors" aria-label="Youtube">
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">روابط سريعة</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-primary-red transition-colors">من نحن</a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-primary-red transition-colors">المنتجات</a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-primary-red transition-colors">العروض الخاصة</a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-primary-red transition-colors">المدونة</a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-primary-red transition-colors">اتصل بنا</a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">خدمة العملاء</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-primary-red transition-colors">سياسة الشحن</a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-primary-red transition-colors">سياسة الإرجاع</a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-primary-red transition-colors">الأسئلة الشائعة</a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-primary-red transition-colors">الشروط والأحكام</a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-primary-red transition-colors">سياسة الخصوصية</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">تواصل معنا</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary-red flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base text-gray-400">
                  الرياض، المملكة العربية السعودية
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary-red flex-shrink-0" />
                <a href="tel:+966500000000" className="text-sm sm:text-base text-gray-400 hover:text-primary-red transition-colors">
                  +966 50 000 0000
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary-red flex-shrink-0" />
                <a href="mailto:info@luxuryfurniture.sa" className="text-sm sm:text-base text-gray-400 hover:text-primary-red transition-colors break-all">
                  info@luxuryfurniture.sa
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 متجر مفروشات فاخر. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-primary-red transition-colors text-sm">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-red transition-colors text-sm">
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
