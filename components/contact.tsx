"use client";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[2.5rem] shadow-petal"
          style={{ background: "var(--gradient-rose)" }}
        >
          <div className="grid gap-8 p-10 md:grid-cols-2 md:p-14">
            <div>
              <span className="rounded-full bg-white/70 px-4 py-2 text-sm font-bold text-primary backdrop-blur">
                💌 تماس با ما
              </span>
              <h2 className="mt-4 text-4xl font-black md:text-5xl">
                <span className="text-gradient">با ما در ارتباط باشید</span>
              </h2>
              <p className="mt-4 text-foreground/80">
                برای سفارش‌های ویژه، مشاوره‌ی هدیه یا همکاری، تیم میهن گاردن همیشه در کنار شماست.
              </p>
              <ul className="mt-6 space-y-3 font-bold text-foreground/80">
                <li>📞 (+۹۳) ۷۷ ۰۰۰ ۰۰۰۰</li>
                <li>📍 کابل, شهرنو, کوچه گل فروشی, دوکان میهن گاردن</li>
                <li>✉️ hello@mayhangarden.af</li>
              </ul>
            </div>

            <form
              className="flex flex-col gap-3 rounded-2xl bg-white/85 p-6 shadow-soft backdrop-blur"
              onSubmit={(e) => e.preventDefault()}
            >
              <input placeholder="نام شما" className="rounded-xl border bg-white/70 px-4 py-3 text-right outline-none focus:ring-2 focus:ring-primary" />
              <input placeholder="شماره تماس" className="rounded-xl border bg-white/70 px-4 py-3 text-right outline-none focus:ring-2 focus:ring-primary" />
              <textarea rows={4} placeholder="پیام شما..." className="rounded-xl border bg-white/70 px-4 py-3 text-right outline-none focus:ring-2 focus:ring-primary" />
              <button className="rounded-full bg-primary py-3 font-bold text-primary-foreground shadow-petal transition-transform hover:scale-[1.02]">
                ارسال پیام
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
