# راهنمای بهینه‌سازی SEO برای وزیر

این راهنما کمک می‌کند تا سایت وزیر را برای موتورهای جستجو بهینه کنید.

## ✅ اقدامات انجام شده

### 1. متاتگ‌های پایه

- ✅ Title با کلمات کلیدی اصلی
- ✅ Description جذاب و توضیحی
- ✅ Keywords مرتبط (فارسی و انگلیسی)
- ✅ Canonical URL
- ✅ Language و Direction (fa-IR, RTL)

### 2. Open Graph (شبکه‌های اجتماعی)

- ✅ og:title
- ✅ og:description
- ✅ og:image (باید تصویر 1200x630 اضافه کنید)
- ✅ og:url
- ✅ og:type
- ✅ og:locale

### 3. Twitter Card

- ✅ twitter:card
- ✅ twitter:title
- ✅ twitter:description
- ✅ twitter:image

### 4. Structured Data (Schema.org)

- ✅ SoftwareApplication schema
- ✅ AggregateRating
- ✅ Offers
- ✅ FeatureList

### 5. Technical SEO

- ✅ robots.txt
- ✅ sitemap.xml
- ✅ Manifest.json (PWA)
- ✅ Semantic HTML
- ✅ Mobile-responsive
- ✅ Fast loading (Static Export)

## 📋 کارهای باقیمانده

### 1. تصاویر (مهم!)

#### تصویر Open Graph

فایل: `/public/og-image.png`

- سایز: 1200x630 پیکسل
- فرمت: PNG یا JPG
- محتوا: لوگو وزیر + شعار + المان‌های بصری
- حجم: کمتر از 200KB

#### آیکون‌های PWA

- `/public/icon-192.png` (192x192)
- `/public/icon-512.png` (512x512)
- `/public/favicon.ico`
- `/public/apple-touch-icon.png` (180x180)

### 2. Google Search Console

1. به https://search.google.com/search-console بروید
2. سایت را اضافه کنید
3. کد verification را در `app/layout.tsx` جایگزین کنید:
   ```typescript
   verification: {
     google: 'کد-verification-شما',
   }
   ```
4. Sitemap را ثبت کنید: `https://vazir.app/sitemap.xml`

### 3. Google Analytics (اختیاری)

1. حساب GA4 بسازید
2. کد tracking را در `app/layout.tsx` اضافه کنید
3. اسکریپت Google Analytics را قبل از `</head>` اضافه کنید

### 4. تنظیمات دامنه

در فایل‌های زیر آدرس دامنه خود را جایگزین کنید:

- `app/layout.tsx` → تمام آدرس‌های `https://vazir.app`
- `public/sitemap.xml` → آدرس دامنه
- `public/robots.txt` → آدرس sitemap

### 5. محتوای اضافی (توصیه شده)

#### بلاگ

افزودن بخش بلاگ با مقالات مرتبط:

- راهنمای استفاده از نرم‌افزار
- نکات حسابداری
- آموزش ماژول‌ها
- مقایسه با سایر نرم‌افزارها

#### FAQ

افزودن بخش سوالات متداول با Schema markup

#### استاندارد Schema.org برای FAQ:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [...]
}
```

## 🚀 بهبودهای پیشرفته

### 1. Performance

- ✅ Static Export (بدون سرور)
- ✅ Lazy Loading برای تصاویر
- ✅ کد minified
- 🔄 استفاده از CDN (توصیه شده)
- 🔄 Image Optimization

### 2. Core Web Vitals

- ✅ LCP (Largest Contentful Paint)
- ✅ FID (First Input Delay)
- ✅ CLS (Cumulative Layout Shift)

### 3. Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels در صورت نیاز
- ✅ Keyboard navigation
- ✅ Color contrast

### 4. Backlinks

- ثبت سایت در دایرکتوری‌های فارسی
- مقاله‌نویسی در سایت‌های مرتبط
- همکاری با وبلاگ‌های تخصصی
- حضور در فروم‌ها و انجمن‌ها

### 5. Local SEO (اختیاری)

اگر دفتر فیزیکی دارید:

- Google My Business
- Local Schema markup
- NAP (Name, Address, Phone) consistency

## 📊 ابزارهای بررسی SEO

### ابزارهای رایگان

1. **Google Search Console**: بررسی عملکرد در گوگل
2. **Google PageSpeed Insights**: سرعت و Core Web Vitals
3. **GTmetrix**: تحلیل performance
4. **Lighthouse** (در Chrome DevTools): ممیزی جامع
5. **Screaming Frog** (نسخه رایگان): خزیدن سایت

### تست موبایل

- Google Mobile-Friendly Test
- BrowserStack (تست در دستگاه‌های مختلف)

## 🎯 کلمات کلیدی هدف

### فارسی

- نرم افزار حسابداری
- سیستم مالی
- نرم افزار مالی ایرانی
- حسابداری آنلاین
- دفتر کل
- حسابداری ابری
- نرم افزار حسابداری با هوش مصنوعی

### Long-tail Keywords

- بهترین نرم افزار حسابداری ایران
- نرم افزار حسابداری کاربران نامحدود
- نرم افزار مالی با قیمت مناسب
- حسابداری هوشمند
- سیستم جامع حسابداری و مالی

## 📈 رصد و گزارش

### متریک‌های کلیدی

1. **Organic Traffic**: ترافیک از موتورهای جستجو
2. **Keyword Rankings**: رتبه کلمات کلیدی
3. **Bounce Rate**: نرخ پرش
4. **Average Session Duration**: مدت زمان بازدید
5. **Conversion Rate**: نرخ تبدیل (ثبت‌نام)

### گزارش‌گیری ماهانه

- بررسی رتبه کلمات کلیدی
- تحلیل ترافیک
- بررسی صفحات پربازدید
- شناسایی فرصت‌های بهبود

## 🔄 به‌روزرسانی مداوم

### هفتگی

- بررسی Google Search Console
- چک کردن لینک‌های شکسته
- پاسخ به کامنت‌ها و نظرات

### ماهانه

- آپدیت محتوا
- افزودن مقالات جدید
- بررسی رقبا
- بهینه‌سازی صفحات بر اساس داده‌ها

### فصلی

- ممیزی SEO کامل
- بررسی استراتژی کلمات کلیدی
- تحلیل رقبا
- برنامه‌ریزی محتوای جدید

---

## ✨ نکات نهایی

1. **محتوا پادشاه است**: تمرکز اصلی روی محتوای با کیفیت
2. **صبر داشته باشید**: SEO کار بلندمدت است (3-6 ماه)
3. **کاربر محور باشید**: همیشه تجربه کاربر را اولویت بدهید
4. **مرتب آپدیت کنید**: محتوای تازه = رتبه بهتر
5. **تحلیل کنید**: از داده‌ها برای بهبود استفاده کنید

موفق باشید! 🚀
