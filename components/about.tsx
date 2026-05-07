"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { v: "+۱۲", l: "سال تجربه" },
  { v: "+۵۰۰", l: "گونه‌ی گل" },
  { v: "+۲۰هزار", l: "مشتری راضی" },
  { v: "۲۴/۷", l: "پشتیبانی" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      {/* <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2"> */}
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="perspective-card"
        >
          {/* <div className="tilt-3d relative aspect-square overflow-hidden rounded-[2.5rem] shadow-petal"> */}
          <div className="tilt-3d relative aspect-[4/4] overflow-hidden rounded-[2rem] shadow-petal">
            <div className="absolute inset-0 bg-gradient-tulip" />
            <div className="absolute inset-0">
              {" "}
              <span>
                <Image
                  src="/assets/aboutgarden.jpg"
                  alt="Aboutpic"
                  fill
                  className="object-cover rounded-[2.5rem]"
                />
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="rounded-full glass px-4 py-2 text-sm font-bold text-primary">
            🌿 درباره میهن گاردن
          </span>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            <span className="text-gradient">عشق به طبیعت در هر گلبرگ</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/70">
            میهن گاردن با بیش از یک دهه تجربه در پرورش و عرضه‌ی گل‌های دست‌چین،
            می‌کوشد تا لحظه‌های شاد، عاشقانه و فراموش‌ نشدنی شما را با لطیف‌ترین
            هدیه‌ی طبیعت همراه سازد. هر دسته گل ما، روایتی است از زیبایی، عطر و
            رنگ.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.l}
                className="rounded-2xl glass p-4 text-center shadow-soft"
              >
                <div className="text-2xl font-black text-primary">{s.v}</div>
                <div className="mt-1 text-sm text-foreground/70">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
