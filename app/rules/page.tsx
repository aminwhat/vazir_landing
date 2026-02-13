import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "قوانین امنیت و استفاده | وزیر",
  description:
    "قوانین امنیتی و الزامات استفاده از سرویس وزیر برای حفاظت از داده‌ها، مدیریت دسترسی و کاهش ریسک سوءاستفاده.",
  alternates: {
    canonical: "https://vazir.io/rules",
  },
  openGraph: {
    images: ["/og-image.png"],
  },
  twitter: {
    images: ["/og-image.png"],
  },
};

export default function RulesPage() {
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
            <ShieldAlert className="ml-2 h-4 w-4" />
            قوانین امنیت و استفاده
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            قوانین الزام‌آور حفاظت از داده‌ها
          </h1>
          <p className="mb-10 text-base leading-8 text-neutral-400 md:text-lg">
            این قوانین برای کاهش ریسک امنیتی، جلوگیری از افشای اطلاعات و تعریف
            مسئولیت مشترک بین وزیر و کاربر تدوین شده‌اند. استفاده از سرویس به
            معنای پذیرش کامل این قواعد است.
          </p>

          <article className="space-y-8 rounded-2xl border border-white/10 bg-neutral-900/60 p-6 md:p-8">
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                ۱. حفاظت از داده‌ها در وزیر
              </h2>
              <p className="leading-8 text-neutral-300">
                وزیر از کنترل‌های امنیتی فنی و سازمانی مانند رمزنگاری، کنترل
                دسترسی مبتنی بر نقش، ممیزی رخدادها و پشتیبان‌گیری استفاده می‌کند
                تا از داده‌های کاربران حفاظت شود.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                ۲. مسئولیت مشترک امنیت
              </h2>
              <p className="leading-8 text-neutral-300">
                امنیت سرویس یک مسئولیت مشترک است. وزیر مسئول امنیت زیرساخت خود
                است و کاربر مسئول امنیت حساب، دستگاه، شبکه، رمز عبور، توکن‌ها و
                نحوه اعطای دسترسی به اعضای سازمان یا پیمانکاران خود است.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                ۳. ممنوعیت اشتراک دسترسی
              </h2>
              <p className="leading-8 text-neutral-300">
                اشتراک‌گذاری نام کاربری، رمز عبور، کد تایید یا توکن دسترسی با افراد
                غیرمجاز ممنوع است. دسترسی باید فردی، قابل ردیابی و مطابق با نقش
                کاری باشد.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                ۴. سلب ضمانت در دسترسی اعطاشده توسط کاربر
              </h2>
              <p className="leading-8 text-neutral-300">
                اگر کاربر به هر شخص یا سرویس ثالث دسترسی به اطلاعات خود بدهد، تمام
                تبعات امنیتی آن بر عهده کاربر است. وزیر تضمین یا گارانتی نمی‌دهد
                که شخص ثالث مورد اعتماد کاربر مرتکب سرقت، افشا یا سوءاستفاده از
                داده‌ها نشود.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                ۵. سرویس‌ها و لینک‌های شخص ثالث
              </h2>
              <p className="leading-8 text-neutral-300">
                اتصال به ابزارها، افزونه‌ها یا سرویس‌های خارج از زیرساخت وزیر تحت
                مسئولیت کاربر انجام می‌شود. وزیر در قبال سیاست‌های امنیتی یا نقض
                داده در سامانه‌های شخص ثالث مسئولیتی ندارد.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                ۶. رفتارهای امنیتی الزامی برای کاربر
              </h2>
              <p className="leading-8 text-neutral-300">
                کاربر باید از رمز عبور قوی، به‌روزرسانی سیستم‌عامل و مرورگر، شبکه
                امن، خروج از نشست‌های بلااستفاده، بازبینی دوره‌ای سطح دسترسی و حذف
                سریع دسترسی افراد غیرضروری استفاده کند.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                ۷. گزارش رخداد و واکنش امنیتی
              </h2>
              <p className="leading-8 text-neutral-300">
                کاربر موظف است هرگونه رخداد مشکوک مانند دسترسی غیرمجاز، فیشینگ،
                نشت اطلاعات یا سوءاستفاده از حساب را بدون تاخیر گزارش کند تا
                اقدامات محدودسازی و پاسخ سریع انجام شود.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                ۸. محدودیت مسئولیت
              </h2>
              <p className="leading-8 text-neutral-300">
                وزیر تعهد می‌کند اقدامات معقول امنیتی انجام دهد، اما هیچ سرویس
                آنلاین مصونیت مطلق ندارد. در حدود مجاز قانونی، مسئولیت خسارات
                ناشی از عوامل خارج از کنترل وزیر یا قصور امنیتی کاربر پذیرفته
                نمی‌شود.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                ۹. اجرای قوانین و اعمال محدودیت
              </h2>
              <p className="leading-8 text-neutral-300">
                در صورت نقض این قوانین، وزیر می‌تواند دسترسی را محدود، تعلیق یا
                قطع کند و در صورت لزوم اقدامات حقوقی لازم را پیگیری نماید.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                ۱۰. تماس با ما
              </h2>
              <p className="leading-8 text-neutral-300">
                برای گزارش رخداد امنیتی یا دریافت توضیح درباره این قوانین، از صفحه
                ارتباط با ما استفاده کنید.
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
