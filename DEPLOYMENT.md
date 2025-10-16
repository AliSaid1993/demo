# دليل النشر على Vercel | Vercel Deployment Guide

## خطوات النشر على Vercel

### 1. إنشاء حساب على Vercel
- اذهب إلى [vercel.com](https://vercel.com)
- قم بإنشاء حساب مجاني باستخدام GitHub أو GitLab أو Bitbucket أو البريد الإلكتروني

### 2. تحضير المشروع

#### الطريقة الأولى: باستخدام Git (موصى بها)

1. **إنشاء مستودع Git محلي:**
```bash
git init
git add .
git commit -m "Initial commit"
```

2. **رفع المشروع إلى GitHub:**
   - أنشئ مستودع جديد على GitHub
   - اربط المستودع المحلي بـ GitHub:
```bash
git remote add origin https://github.com/username/your-repo-name.git
git branch -M main
git push -u origin main
```

3. **النشر من Vercel:**
   - اذهب إلى [vercel.com/new](https://vercel.com/new)
   - اختر "Import Git Repository"
   - اختر المستودع الخاص بك
   - اضغط على "Deploy"
   - Vercel سيكتشف تلقائياً أن المشروع Next.js ويقوم بالبناء والنشر

#### الطريقة الثانية: باستخدام Vercel CLI

1. **تثبيت Vercel CLI:**
```bash
npm install -g vercel
```

2. **تسجيل الدخول:**
```bash
vercel login
```

3. **النشر:**
```bash
vercel
```

4. **للنشر إلى الإنتاج:**
```bash
vercel --prod
```

### 3. التحقق من النشر

بعد النشر، ستحصل على رابط مثل:
- `https://your-project-name.vercel.app`

## الميزات المضمنة

✅ **الموقع متجاوب تماماً** مع جميع أحجام الشاشات:
- الهواتف الصغيرة (320px وأكثر)
- الهواتف المتوسطة (375px وأكثر)
- الهواتف الكبيرة (425px وأكثر)
- الأجهزة اللوحية (768px وأكثر)
- أجهزة الكمبيوتر المحمولة (1024px وأكثر)
- الشاشات الكبيرة (1440px وأكثر)

✅ **تحسينات الأداء:**
- بناء محسّن للإنتاج
- تحميل سريع للصفحات
- صور محسّنة
- CSS محسّن

✅ **دعم اللغة العربية:**
- اتجاه RTL
- خط Cairo من Google Fonts
- محتوى عربي كامل

## حل المشاكل الشائعة

### المشكلة: "Couldn't find any `pages` or `app` directory"

**الحل:** تم حل هذه المشكلة بإضافة ملف `vercel.json` الذي يحدد:
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`

### المشكلة: فشل البناء

**الحل:**
1. تأكد من تثبيت جميع الحزم:
```bash
npm install
```

2. اختبر البناء محلياً:
```bash
npm run build
```

3. تأكد من عدم وجود أخطاء في الكود

### المشكلة: الصور لا تظهر

**الحل:** تأكد من أن ملف `next.config.mjs` يحتوي على:
```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
  ],
}
```

## تحديثات مستقبلية

لتحديث الموقع:

1. **إذا كنت تستخدم Git:**
```bash
git add .
git commit -m "Update message"
git push
```
Vercel سيقوم بالنشر تلقائياً

2. **إذا كنت تستخدم CLI:**
```bash
vercel --prod
```

## معلومات إضافية

- **الخطة المجانية** تتضمن:
  - نطاق فرعي مجاني (.vercel.app)
  - SSL مجاني
  - CDN عالمي
  - نشر تلقائي من Git

- **لربط نطاق خاص:**
  - اذهب إلى إعدادات المشروع في Vercel
  - اختر "Domains"
  - أضف نطاقك الخاص

## الدعم

للمزيد من المعلومات:
- [توثيق Vercel](https://vercel.com/docs)
- [توثيق Next.js](https://nextjs.org/docs)
