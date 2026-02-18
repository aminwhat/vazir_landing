import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="py-16 border-t border-white/10 bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="text-3xl font-bold text-blue-500 mb-4">وزیر</div>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              سیستم جامع حسابداری و مالی با هوش مصنوعی
              <br />
              برای وب و دسکتاپ
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition"
              >
                <span className="text-xl">📧</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition"
              >
                <span className="text-xl">📱</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition"
              >
                <span className="text-xl">💬</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">محصول</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <Link href="/features" className="hover:text-white transition-colors">
                  امکانات
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  قیمت‌گذاری
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-white transition-colors">
                  مستندات
                </Link>
              </li>
              <li>
                <Link href="/guide" className="hover:text-white transition-colors">
                  راهنما
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">پشتیبانی</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  سوالات متداول
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="hover:text-white transition-colors">
                  آموزش‌ها
                </Link>
              </li>
              <li>
                <Link href="/status" className="hover:text-white transition-colors">
                  وضعیت سرویس
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm">
          <p>© ۱۴۰۴ وزیر. تمام حقوق محفوظ است.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">
              حریم خصوصی
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              شرایط استفاده
            </Link>
            <Link href="/rules" className="hover:text-white transition-colors">
              قوانین
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
