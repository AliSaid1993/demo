# متجر مفروشات فاخر | Luxury Furniture Store

A modern, luxury furniture e-commerce website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and elegant design with white background and red/black color scheme
- 📱 **Fully responsive layout** - Optimized for all devices:
  - 📱 Mobile (320px+)
  - 📱 Tablet (640px+)
  - 💻 Laptop (1024px+)
  - 🖥️ Desktop (1280px+)
- 🌐 RTL (Right-to-Left) support for Arabic language
- 🛍️ Complete e-commerce home page sections:
  - Hero slider with auto-play (responsive heights)
  - Product categories (adaptive grid)
  - Featured products grid (1-4 columns based on screen)
  - Features/benefits section
  - Newsletter subscription
  - Comprehensive footer
- ⚡ Built with Next.js 14 App Router
- 🎯 TypeScript for type safety

## 🚀 التقنيات المستخدمة

- **Next.js 14** - إطار عمل React للإنتاج
- **TypeScript** - للكتابة الآمنة
- **Tailwind CSS** - للتصميم السريع والمرن
- **Lucide React** - مكتبة أيقونات حديثة
- **Google Fonts (Cairo)** - خط عربي جميل

## 📦 التثبيت والتشغيل

### المتطلبات
- Node.js 18.17 أو أحدث
- npm أو yarn أو pnpm

### خطوات التثبيت

1. **استنساخ المشروع:**
```bash
git clone <repository-url>
cd Demo
```

2. **تثبيت الحزم:**
```bash
npm install
```

3. **تشغيل السيرفر المحلي:**
```bash
npm run dev
```

4. **فتح المتصفح:**
افتح [http://localhost:3000](http://localhost:3000)

## 🏗️ البناء للإنتاج

```bash
npm run build
npm start
```

## 📱 الاستجابة للشاشات

الموقع متجاوب تماماً مع جميع أحجام الشاشات:

| الجهاز | العرض | الحالة |
|--------|-------|--------|
| هواتف صغيرة | 320px - 374px | ✅ |
| هواتف متوسطة | 375px - 639px | ✅ |
| أجهزة لوحية | 640px - 1023px | ✅ |
| كمبيوتر محمول | 1024px - 1279px | ✅ |
| شاشات كبيرة | 1280px+ | ✅ |

## 🌐 النشر على Vercel

### الطريقة السريعة (موصى بها)

1. **ادفع الكود إلى GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **اربط مع Vercel:**
   - اذهب إلى [vercel.com](https://vercel.com)
   - اضغط "Import Project"
   - اختر المستودع من GitHub
   - اضغط "Deploy"

### باستخدام Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

**📖 للمزيد من التفاصيل، راجع [DEPLOYMENT.md](./DEPLOYMENT.md)**

## 📂 هيكل المشروع

```
Demo/
├── app/
│   ├── layout.tsx          # التخطيط الرئيسي
│   ├── page.tsx            # الصفحة الرئيسية
│   └── globals.css         # الأنماط العامة
├── components/
│   ├── Header.tsx          # رأس الصفحة
│   ├── Hero.tsx            # السلايدر الرئيسي
│   ├── Features.tsx        # المميزات
│   ├── Categories.tsx      # الفئات
│   ├── FeaturedProducts.tsx # المنتجات المميزة
│   ├── Newsletter.tsx      # النشرة الإخبارية
│   └── Footer.tsx          # تذييل الصفحة
├── public/                 # الملفات الثابتة
├── vercel.json            # إعدادات Vercel
└── package.json           # الحزم والإعدادات
```

## 🎨 الألوان المستخدمة

- **الأحمر الأساسي:** `#DC2626`
- **الأسود الأساسي:** `#0A0A0A`
- **الخلفية:** `#FFFFFF`
- **النصوص الثانوية:** `#6B7280`

## 🔧 التخصيص

### تغيير الألوان
عدّل ملف `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    red: '#DC2626',    // لونك المفضل
    black: '#0A0A0A',  // لونك المفضل
  },
}
```

## 📝 الملاحظات

- ⚠️ الصور المستخدمة من Unsplash للعرض التوضيحي فقط
- 🔄 يمكن استبدال الصور بصور حقيقية للمنتجات
- 🛠️ يمكن إضافة المزيد من الصفحات والمميزات حسب الحاجة

## 🐛 حل المشاكل

### مشكلة البناء على Vercel
✅ **تم الحل:** ملف `vercel.json` يحدد الإعدادات الصحيحة

### الصور لا تظهر
✅ **تم الحل:** `next.config.mjs` يحتوي على إعدادات الصور الصحيحة

### الموقع غير متجاوب
✅ **تم الحل:** جميع المكونات محسّنة للاستجابة الكاملة

## 📞 الدعم

للمزيد من المساعدة:
- [توثيق Next.js](https://nextjs.org/docs)
- [توثيق Vercel](https://vercel.com/docs)
- [توثيق Tailwind CSS](https://tailwindcss.com/docs)

## 📄 الترخيص

هذا المشروع للاستخدام التعليمي والتجاري.

---

صُنع بـ ❤️ باستخدام Next.js و Tailwind CSS
