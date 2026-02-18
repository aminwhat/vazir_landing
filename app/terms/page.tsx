import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import LegalPageLayout from "@/components/layout/legal-page-layout";

export const metadata: Metadata = {
  title: "شرایط استفاده | وزیر",
  description:
    "شرایط و ضوابط استفاده از خدمات وزیر شامل تعهدات کاربران، حدود مسئولیت و قوانین استفاده از سامانه.",
  alternates: {
    canonical: "https://vazir.io/terms",
  },
  openGraph: {
    images: ["/og-image.png"],
  },
  twitter: {
    images: ["/og-image.png"],
  },
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      icon={FileText}
      badge="شرایط و ضوابط استفاده"
      title="شرایط استفاده از خدمات وزیر"
      description="استفاده از خدمات وزیر به معنای پذیرش کامل این شرایط است. این سند مسئولیت‌های حقوقی و امنیتی کاربر و وزیر را به‌صورت الزام‌آور مشخص می‌کند."
    >
      <section>
        <h2 className="mb-3 text-2xl font-semibold text-white">۱. پذیرش شرایط</h2>
        <p className="leading-8 text-neutral-300">
          با ایجاد حساب کاربری یا استفاده از پلتفرم وزیر، شما تایید می‌کنید که
          شرایط و ضوابط حاضر را پذیرفته‌اید و ملزم به رعایت قوانین مربوطه خواهید
          بود.
        </p>
      </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                ۲. حساب کاربری و مسئولیت دسترسی
              </h2>
              <p className="leading-8 text-neutral-300">
                مسئولیت حفظ محرمانگی اطلاعات ورود (نام کاربری و رمز عبور) بر عهده
                کاربر است. تمام عملیات انجام‌شده با حساب کاربری، اعم از مستقیم یا
                از طریق نماینده/کارمند کاربر، به نام کاربر ثبت می‌شود.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">۳. استفاده مجاز از سرویس</h2>
              <p className="leading-8 text-neutral-300">
                کاربر متعهد می‌شود از سرویس در چارچوب قوانین و با اهداف مشروع
                استفاده کند و از هرگونه استفاده مخرب، نفوذ، استخراج غیرمجاز داده
                یا اختلال در عملکرد سامانه خودداری نماید.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                ۴. امنیت دسترسی و اصل حداقل اختیار
              </h2>
              <p className="leading-8 text-neutral-300">
                کاربر مکلف است دسترسی‌ها را صرفا برای افراد مجاز و متناسب با نقش
                کاری تعریف کند، دسترسی‌های غیرضروری را حذف نماید و در زمان ترک
                همکاری افراد، دسترسی آنها را فوری مسدود کند.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                ۵. دسترسی اشخاص ثالث و سلب ضمانت
              </h2>
              <p className="leading-8 text-neutral-300">
                در صورت اعطای دسترسی به هر شخص یا سرویس ثالث توسط کاربر، کلیه
                ریسک‌های ناشی از آن بر عهده کاربر است. وزیر هیچ ضمانت یا تعهدی
                بابت جلوگیری از سرقت، افشا، سوءاستفاده یا انتقال غیرمجاز داده در
                این حالت ارائه نمی‌کند.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                ۶. مالکیت فکری
              </h2>
              <p className="leading-8 text-neutral-300">
                کلیه حقوق مادی و معنوی نرم‌افزار، طراحی، محتوا، نشان تجاری و اجزای
                فنی متعلق به وزیر است. هرگونه کپی‌برداری، مهندسی معکوس یا استفاده
                تجاری بدون مجوز کتبی ممنوع است.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                ۷. پرداخت و اشتراک
              </h2>
              <p className="leading-8 text-neutral-300">
                استفاده از برخی امکانات ممکن است مستلزم پرداخت حق اشتراک باشد.
                شرایط قیمت‌گذاری، تمدید، و محدودیت پلن‌ها مطابق اطلاعات اعلامی در
                صفحه تعرفه‌ها اعمال می‌شود.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                ۸. محدودیت مسئولیت
              </h2>
              <p className="leading-8 text-neutral-300">
                وزیر تمام تلاش خود را برای ارائه سرویس پایدار و امن انجام می‌دهد،
                اما در حدود مجاز قانونی، مسئولیت خسارات غیرمستقیم، توقف کسب‌وکار
                یا زیان‌های ناشی از عوامل خارج از کنترل سرویس را نمی‌پذیرد. هیچ
                خدمت آنلاین مصونیت مطلق ندارد و تضمین امنیت صددرصدی ارائه
                نمی‌شود.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                ۹. تعلیق یا خاتمه دسترسی
              </h2>
              <p className="leading-8 text-neutral-300">
                در صورت نقض شرایط استفاده، رفتار سوء یا استفاده خلاف قانون، وزیر
                می‌تواند دسترسی کاربر را موقت یا دائم محدود کند.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                ۱۰. تغییرات شرایط
              </h2>
              <p className="leading-8 text-neutral-300">
                وزیر می‌تواند این شرایط را در طول زمان به‌روزرسانی کند. نسخه جدید
                پس از انتشار در همین صفحه معتبر خواهد بود و ادامه استفاده از
                سرویس به منزله پذیرش تغییرات است.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                ۱۱. تماس با ما
              </h2>
              <p className="leading-8 text-neutral-300">
                برای سوالات حقوقی، قراردادها یا گزارش تخلف، از صفحه ارتباط با ما
                استفاده کنید.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black transition hover:bg-neutral-200"
              >
                ارتباط با ما
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </section>
    </LegalPageLayout>
  );
}
