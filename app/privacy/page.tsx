import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "حریم خصوصی | وزیر",
  description:
    "سیاست حفظ حریم خصوصی وزیر: نحوه جمع‌آوری، استفاده، نگهداری و حفاظت از اطلاعات کاربران.",
  alternates: {
    canonical: "https://vazir.io/privacy",
  },
  openGraph: {
    images: ["/og-image.png"],
  },
  twitter: {
    images: ["/og-image.png"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main
      className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-blue-500/30"
      dir="rtl"
    >
      <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tighter text-blue-500"
          >
            وزیر
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-neutral-200 transition hover:bg-white/5"
          >
            بازگشت به صفحه اصلی
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </nav>

      <section className="relative overflow-hidden px-4 pb-20 pt-20 md:pt-24">
        <div className="absolute left-1/2 top-0 -z-10 h-[320px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-[120px]" />
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-300">
            <ShieldCheck className="ml-2 h-4 w-4" />
            سیاست حفظ حریم خصوصی
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            حریم خصوصی کاربران وزیر
          </h1>
          <p className="mb-10 text-base leading-8 text-neutral-400 md:text-lg">
            ما در وزیر متعهد هستیم از اطلاعات شما با بالاترین استانداردهای امنیتی
            محافظت کنیم. این صفحه توضیح می‌دهد چه اطلاعاتی جمع‌آوری می‌شود، چگونه
            استفاده می‌شود و چه حقوقی نسبت به داده‌های خود دارید.
          </p>

          <article className="space-y-8 rounded-2xl border border-white/10 bg-neutral-900/60 p-6 md:p-8">
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">۱. اطلاعاتی که جمع‌آوری می‌کنیم</h2>
              <p className="leading-8 text-neutral-300">
                ممکن است اطلاعات هویتی (نام، شماره تماس، ایمیل)، اطلاعات سازمانی
                (نام شرکت، نقش کاربری) و داده‌های عملکردی سیستم (لاگ‌ها، خطاها و
                داده‌های فنی) را برای ارائه سرویس، پشتیبانی و بهبود کیفیت محصول
                جمع‌آوری کنیم.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">۲. نحوه استفاده از اطلاعات</h2>
              <p className="leading-8 text-neutral-300">
                اطلاعات شما صرفا برای ارائه خدمات حسابداری، فعال‌سازی امکانات،
                پشتیبانی فنی، ارتباطات ضروری، بهبود تجربه کاربری و افزایش امنیت
                سامانه استفاده می‌شود. وزیر اطلاعات کاربران را بدون مبنای قانونی
                در اختیار شخص ثالث قرار نمی‌دهد.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">۳. نگهداری و امنیت داده‌ها</h2>
              <p className="leading-8 text-neutral-300">
                ما از کنترل‌های امنیتی فنی و سازمانی مانند ارتباطات رمزنگاری‌شده،
                محدودسازی دسترسی، پایش امنیتی و پشتیبان‌گیری دوره‌ای برای حفاظت
                از داده‌های شما استفاده می‌کنیم. با این حال هیچ روش انتقال یا
                ذخیره‌سازی در اینترنت ۱۰۰٪ بدون ریسک نیست.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">۴. کوکی‌ها و داده‌های تحلیلی</h2>
              <p className="leading-8 text-neutral-300">
                برای بهبود عملکرد وب‌سایت، اندازه‌گیری استفاده از صفحات و حفظ نشست
                کاربری، ممکن است از کوکی‌ها یا فناوری‌های مشابه استفاده شود. شما
                می‌توانید از طریق تنظیمات مرورگر خود کوکی‌ها را مدیریت یا محدود
                کنید.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">۵. حقوق شما</h2>
              <p className="leading-8 text-neutral-300">
                شما می‌توانید درخواست دسترسی، اصلاح، به‌روزرسانی یا حذف اطلاعات
                شخصی خود را ثبت کنید. همچنین در صورت وجود ابهام درباره نحوه
                پردازش داده‌ها، حق دریافت توضیح شفاف از تیم وزیر را دارید.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">۶. تغییرات این سیاست</h2>
              <p className="leading-8 text-neutral-300">
                ممکن است این سیاست در طول زمان به‌روزرسانی شود. نسخه جدید پس از
                انتشار در همین صفحه معتبر خواهد بود و ادامه استفاده از سرویس به
                منزله پذیرش نسخه به‌روز شده است.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">۷. تماس با ما</h2>
              <p className="leading-8 text-neutral-300">
                برای سوالات مرتبط با حریم خصوصی یا درخواست‌های مربوط به داده‌ها،
                از صفحه ارتباط با ما استفاده کنید.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black transition hover:bg-neutral-200"
              >
                ارتباط با ما
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </section>
          </article>

          <p className="mt-6 text-sm text-neutral-500">آخرین به‌روزرسانی: ۱۴۰۴/۱۱/۲۴</p>
        </div>
      </section>
    </main>
  );
}
