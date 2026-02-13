# وزیر (Vazir) - سیستم جامع حسابداری و مالی

صفحه فرود زیبا و مدرن برای وزیر، یک پلتفرم مالی و حسابداری جامع با هوش مصنوعی.

## ویژگی‌ها

- 🎨 **طراحی مدرن و زیبا**: رابط کاربری منحصر به فرد با الهام از معماری ایرانی
- 🌐 **پشتیبانی کامل از فارسی**: RTL و فونت Vazirmatn
- 📱 **ریسپانسیو**: بهینه‌شده برای تمام دستگاه‌ها
- ⚡ **انیمیشن‌های روان**: استفاده از Framer Motion
- 🔍 **بهینه‌سازی SEO**: متاتگ‌های کامل و Structured Data
- 🚀 **Static Export**: بدون نیاز به سرور

## شروع سریع

### نصب وابستگی‌ها

```bash
npm install
# یا
yarn install
# یا
pnpm install
```

### اجرای محیط توسعه

```bash
npm run dev
# یا
yarn dev
# یا
pnpm dev
```

برنامه را در مرورگر خود در آدرس [http://localhost:3000](http://localhost:3000) باز کنید.

### ساخت برای Production

```bash
npm run build
# یا
yarn build
# یا
pnpm build
```

فایل‌های استاتیک در پوشه `out` ایجاد می‌شوند و می‌توانید آن‌ها را روی هر سرویس استاتیک (Vercel، Netlify، GitHub Pages و ...) دیپلوی کنید.

## ساختار پروژه

```
.
├── app/
│   ├── layout.tsx          # Layout اصلی با SEO metadata
│   ├── page.tsx            # صفحه اصلی landing page
│   └── globals.css         # استایل‌های global
├── public/                 # فایل‌های استاتیک
├── next.config.js          # تنظیمات Next.js
├── tailwind.config.js      # تنظیمات Tailwind CSS
├── tsconfig.json           # تنظیمات TypeScript
└── package.json            # وابستگی‌ها
```

## تنظیمات SEO

برای بهبود SEO، موارد زیر را تنظیم کنید:

1. **آدرس دامنه**: در `app/layout.tsx` آدرس دامنه خود را جایگزین کنید
2. **Google Verification**: کد تایید Google را در metadata اضافه کنید
3. **تصاویر OG**: تصویر Open Graph را در `public/og-image.png` قرار دهید
4. **Sitemap**: فایل sitemap.xml را به‌روز کنید

## تکنولوژی‌ها

- [Next.js 14](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Framer Motion](https://www.framer.com/motion/) - Animation Library
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Vazirmatn Font](https://github.com/rastikerdar/vazirmatn) - فونت فارسی

## سفارشی‌سازی

### رنگ‌ها

رنگ‌های اصلی در فایل `app/page.tsx` با استفاده از Tailwind classes تعریف شده‌اند. می‌توانید آن‌ها را تغییر دهید:

- `from-amber-500 to-orange-600` - رنگ‌های اصلی برند
- `from-indigo-500 to-purple-600` - رنگ‌های AI
- `from-slate-900 to-slate-950` - رنگ‌های پس‌زمینه

### محتوا

تمام محتوای فارسی در فایل `app/page.tsx` قرار دارد و می‌توانید آن را به راحتی ویرایش کنید:

- `accountingModules` - ماژول‌های حسابداری
- `aiFeatures` - ویژگی‌های هوش مصنوعی
- `pricingPlans` - پلن‌های قیمت‌گذاری

## دیپلوی

### Vercel (توصیه شده)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# فایل‌های out را آپلود کنید
```

### سرور استاتیک

پس از `npm run build`، پوشه `out` را روی هر سرور استاتیک قرار دهید.

## مجوز

این پروژه تحت مجوز MIT منتشر شده است.

## پشتیبانی

برای سوالات و پشتیبانی با ما تماس بگیرید.
