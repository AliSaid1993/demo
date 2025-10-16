# دليل النشر على Vercel 🚀

## المشكلة التي تم حلها
تم حل مشكلة `Couldn't find any pages or app directory` من خلال إضافة ملف `vercel.json` بالإعدادات الصحيحة.

## خطوات النشر على Vercel (مجاناً)

### الطريقة 1: من خلال موقع Vercel (موصى بها)

1. **إنشاء حساب على Vercel**
   - اذهب إلى: https://vercel.com/signup
   - سجل الدخول باستخدام GitHub أو GitLab أو Bitbucket أو البريد الإلكتروني

2. **رفع المشروع إلى GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. **ربط المشروع مع Vercel**
   - اذهب إلى: https://vercel.com/new
   - اختر "Import Git Repository"
   - اختر المستودع الخاص بك
   - Vercel سيكتشف تلقائياً أنه مشروع Next.js

4. **إعدادات النشر**
   - Framework Preset: Next.js (سيتم اكتشافه تلقائياً)
   - Root Directory: `./` (الافتراضي)
   - Build Command: `npm run build` (الافتراضي)
   - Output Directory: `.next` (الافتراضي)
   - Install Command: `npm install` (الافتراضي)

5. **انقر على "Deploy"**
   - انتظر حتى يكتمل النشر (عادة 1-3 دقائق)
   - ستحصل على رابط مثل: `https://your-project.vercel.app`

### الطريقة 2: من خلال Vercel CLI

1. **تثبيت Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **تسجيل الدخول**
   ```bash
   vercel login
   ```

3. **نشر المشروع**
   ```bash
   vercel
   ```
   - اتبع التعليمات التفاعلية
   - اختر "Yes" لإعداد المشروع
   - اختر "Yes" لربطه بحساب Vercel الخاص بك

4. **للنشر في الإنتاج**
   ```bash
   vercel --prod
   ```

## التحقق من البناء محلياً قبل النشر

قبل النشر، تأكد من أن المشروع يعمل بشكل صحيح:

```bash
# تثبيت المكتبات
npm install

# بناء المشروع
npm run build

# تشغيل المشروع في وضع الإنتاج
npm start
```

إذا نجح البناء محلياً، سينجح على Vercel أيضاً.

## الملفات المهمة للنشر

- ✅ `package.json` - يحتوي على المكتبات والأوامر
- ✅ `next.config.mjs` - إعدادات Next.js
- ✅ `vercel.json` - إعدادات Vercel (تم إنشاؤه)
- ✅ `app/` - مجلد التطبيق (Next.js 13+)
- ✅ `app/layout.tsx` - التخطيط الرئيسي
- ✅ `app/page.tsx` - الصفحة الرئيسية
- ✅ `components/` - المكونات
- ✅ `public/` - الملفات الثابتة

## استكشاف الأخطاء

### إذا ظهر خطأ "Couldn't find pages or app directory"
- ✅ تم الحل: أضفنا ملف `vercel.json` بالإعدادات الصحيحة
- تأكد من وجود مجلد `app/` في جذر المشروع
- تأكد من وجود `app/layout.tsx` و `app/page.tsx`

### إذا فشل البناء
- تحقق من أن `npm run build` يعمل محلياً
- تحقق من أن جميع المكتبات مثبتة في `package.json`
- تحقق من سجلات البناء في Vercel

### إذا ظهرت مشاكل في الصور
- تأكد من إعدادات `next.config.mjs` صحيحة
- استخدم مكون `next/image` للصور

## الخطة المجانية في Vercel

الخطة المجانية تشمل:
- ✅ نطاقات فرعية غير محدودة (.vercel.app)
- ✅ شهادات SSL تلقائية
- ✅ 100 GB من النطاق الترددي شهرياً
- ✅ نشر تلقائي عند كل push
- ✅ معاينات للفروع (Branch Previews)
- ✅ تحليلات أساسية

## روابط مفيدة

- 📚 وثائق Vercel: https://vercel.com/docs
- 📚 وثائق Next.js: https://nextjs.org/docs
- 💬 دعم Vercel: https://vercel.com/support

## ملاحظات

- المشروع جاهز للنشر الآن ✅
- تم إصلاح جميع المشاكل المتعلقة بالبنية ✅
- ملف `vercel.json` يضمن أن Vercel يجد مجلد `app` بشكل صحيح ✅

---

**تم إعداد المشروع بنجاح! 🎉**

يمكنك الآن نشر المشروع على Vercel باتباع الخطوات أعلاه.
