═══════════════════════════════════════════════════════════
   حل مشكلة Vercel - خطوات بسيطة جداً
═══════════════════════════════════════════════════════════

المشكلة:
--------
Error: Couldn't find any `pages` or `app` directory

السبب:
------
المشروع لم يتم رفعه إلى GitHub بشكل صحيح

الحل (5 خطوات):
----------------

1️⃣ افتح PowerShell في مجلد المشروع ونفذ:

   git config user.name "اسمك"
   git config user.email "بريدك@example.com"
   git commit -m "Initial commit"


2️⃣ اذهب إلى: https://github.com/new
   - اسم المستودع: luxury-furniture
   - اجعله Public
   - اضغط Create repository


3️⃣ انسخ الأوامر من GitHub ونفذها (استبدل YOUR_USERNAME):

   git remote add origin https://github.com/YOUR_USERNAME/luxury-furniture.git
   git branch -M main
   git push -u origin main


4️⃣ تحقق من GitHub:
   - افتح المستودع
   - تأكد من وجود مجلد app/


5️⃣ اذهب إلى: https://vercel.com
   - سجل دخول بحساب GitHub
   - اضغط Import Project
   - اختر luxury-furniture
   - اضغط Deploy


✅ النتيجة:
-----------
بعد 2-3 دقائق سيكون موقعك جاهزاً على:
https://luxury-furniture.vercel.app


📝 ملاحظات:
-----------
- البناء يعمل محلياً بنجاح ✅
- مجلد app/ موجود ✅
- جميع الملفات جاهزة ✅
- فقط اتبع الخطوات أعلاه!


🆘 إذا واجهت مشكلة:
-------------------
افتح ملف: VERCEL_SOLUTION.md
للحصول على تفاصيل أكثر


═══════════════════════════════════════════════════════════
   ابدأ الآن! 🚀
═══════════════════════════════════════════════════════════
