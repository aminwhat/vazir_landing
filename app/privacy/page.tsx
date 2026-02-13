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
            وزیر از داده‌های شما با رویکرد امنیت چندلایه، حداقل‌سازی دسترسی و
            پایش مستمر حفاظت می‌کند. با این حال امنیت نهایی یک مسئولیت مشترک
            است و کاربر نیز باید اصول امنیت دسترسی را رعایت کند.
          </p>

          <article className="space-y-8 rounded-2xl border border-white/10 bg-neutral-900/60 p-6 md:p-8">
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                ۱. اطلاعاتی که جمع‌آوری می‌کنیم
              </h2>
              <p className="leading-8 text-neutral-300">
                اطلاعات هویتی، اطلاعات سازمانی، داده‌های فنی، لاگ‌های امنیتی،
                سوابق عملیاتی و متادیتاهای لازم برای ارائه خدمت، احراز هویت،
                پیشگیری از تقلب و توسعه کیفیت سرویس جمع‌آوری و پردازش می‌شود.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                ۲. هدف و دامنه استفاده از اطلاعات
              </h2>
              <p className="leading-8 text-neutral-300">
                داده‌ها فقط برای ارائه خدمات، پشتیبانی، امنیت، تحلیل عملکرد،
                رعایت الزامات قانونی و بهبود محصول استفاده می‌شود. هرگونه پردازش
                خارج از این چارچوب صرفا با مبنای قانونی معتبر یا رضایت صریح کاربر
                انجام خواهد شد.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                ۳. کنترل‌های امنیتی وزیر
              </h2>
              <p className="leading-8 text-neutral-300">
                ارتباطات رمزنگاری‌شده، کنترل دسترسی مبتنی بر نقش، ثبت و ممیزی
                رخدادها، محدودسازی سطح دسترسی، پشتیبان‌گیری دوره‌ای و کنترل‌های
                فنی و سازمانی برای حفاظت از داده‌ها اعمال می‌شود.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                ۴. مسئولیت امنیتی کاربر
              </h2>
              <p className="leading-8 text-neutral-300">
                کاربر موظف است رمز عبور قوی، دستگاه امن، احراز هویت دومرحله‌ای
                (در صورت فعال بودن) و اصل حداقل دسترسی را رعایت کند و از اشتراک
                اطلاعات ورود یا اعطای دسترسی غیرضروری به اشخاص ثالث خودداری کند.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                ۵. دسترسی اشخاص ثالث و عدم تضمین سوءاستفاده
              </h2>
              <p className="leading-8 text-neutral-300">
                اگر کاربر به هر شخص حقیقی/حقوقی (از جمله پیمانکار، مشاور، همکار،
                اپلیکیشن یا سرویس ثالث) دسترسی مستقیم یا غیرمستقیم به داده‌ها
                بدهد، مسئولیت تبعات آن با کاربر است. وزیر تضمین یا گارانتی نسبت
                به جلوگیری از سوءاستفاده، سرقت یا افشای داده توسط اشخاصی که
                دسترسی آنها توسط خود کاربر اعطا شده است ارائه نمی‌کند.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                ۶. یکپارچه‌سازی‌ها، لینک‌ها و سرویس‌های خارج از وزیر
              </h2>
              <p className="leading-8 text-neutral-300">
                در صورت اتصال به سرویس‌ها یا لینک‌های خارج از زیرساخت وزیر، سیاست
                حریم خصوصی آن سرویس‌ها حاکم خواهد بود. وزیر مسئول عملکرد امنیتی،
                سیاست داده یا نقض امنیت در زیرساخت اشخاص ثالث نیست.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                ۷. نگهداری، حذف و حقوق کاربر
              </h2>
              <p className="leading-8 text-neutral-300">
                داده‌ها به اندازه لازم برای اهداف عملیاتی، امنیتی و قانونی نگهداری
                می‌شود. شما حق درخواست دسترسی، اصلاح، محدودسازی پردازش یا حذف
                داده را مطابق قوانین قابل اعمال دارید.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                ۸. تغییرات سیاست
              </h2>
              <p className="leading-8 text-neutral-300">
                این سیاست ممکن است در هر زمان به‌روزرسانی شود. ادامه استفاده از
                خدمات پس از تاریخ انتشار نسخه جدید، به منزله پذیرش مفاد اصلاح‌شده
                خواهد بود.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                ۹. تماس با ما
              </h2>
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
