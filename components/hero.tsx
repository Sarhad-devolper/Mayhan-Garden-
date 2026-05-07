"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FloatingFlowers } from "./floating-flowers";

const slides = [
  {
    id: "rose",
    title: "رز سرخ، نماد عشق",
    subtitle: "طبیعت در هر گلبرگ",
    desc: "دسته گل‌های دست‌چین شده با عطری ماندگار، تجربه‌ای فاخر از زیبایی.",
    image: "/assets/rose3.jpg",
    bg: "linear-gradient(135deg, oklch(0.97 0.04 20), oklch(0.85 0.16 10))",
    accent: "var(--rose)",
  },
  {
    id: "tulip",
    title: "لاله‌های بهاری",
    subtitle: "رنگ‌های لطیف بهار",
    desc: "گل‌های هلندی تازه، آماده‌ی هدیه دادن لحظه‌ای به‌ یاد ماندنی.",
    image: "/assets/tulip1.jpg",
    bg: "linear-gradient(135deg, oklch(0.97 0.04 320), oklch(0.85 0.13 340))",
    accent: "var(--tulip)",
  },
  {
    id: "sun",
    title: "آفتاب‌گردان طلایی",
    subtitle: "گرمای خورشید در خانه",
    desc: "شادی و انرژی را با رنگ زرد دل‌نشین به فضای خود بیاورید.",
    image: "/assets/sunflower1.jpg",
    bg: "linear-gradient(135deg, oklch(0.97 0.06 95), oklch(0.86 0.17 80))",
    accent: "var(--sun)",
  },
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 3500);
    return () => clearInterval(t);
  }, []);
  const s = slides[i];

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={s.id + "-bg"}
          className="absolute inset-0"
          style={{ background: s.bg }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </AnimatePresence>

      <FloatingFlowers count={18} />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center gap-12 px-6 pt-28 pb-16 lg:flex-row-reverse lg:gap-8 lg:py-32">
        <div className="perspective-card relative w-full max-w-xs lg:max-w-sm">          <AnimatePresence mode="wait">
            <motion.div
              key={s.id + "-img"}
              initial={{ opacity: 0, rotateY: -25, scale: 0.85 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: 25, scale: 0.85 }}
              transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative aspect-square"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="absolute -inset-8 rounded-full opacity-50 blur-3xl animate-spin-slow"
                style={{ background: s.accent }}
              />
              <motion.img
                src={s.image}
                alt={s.title}
                className="relative h-full w-full rounded-[2.5rem] object-cover shadow-petal"
                animate={{ y: [0, -16, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-full glass shadow-soft md:flex items-center justify-center text-5xl animate-float">
                🌿
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative w-full max-w-xl text-center lg:text-right">
          <AnimatePresence mode="wait">
            <motion.div
              key={s.id + "-text"}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block rounded-full glass px-5 py-2 text-sm font-medium text-foreground/80 shadow-soft">
                ✨ میهن گاردن — گل‌ فروشی آنلاین
              </span>
              {/* <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl"> */}
              <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                <span className="text-gradient">{s.title}</span>
              </h1>
              {/* <p className="mt-4 text-2xl font-bold text-foreground/80 md:text-3xl"> */}
              <p className="mt-3 text-xl font-bold text-foreground/80 md:text-2xl">
                {s.subtitle}
              </p>
              {/* <p className="mt-5 text-lg text-foreground/70 md:text-xl"> */}
              <p className="mt-3 text-base text-foreground/70 md:text-lg">
                {s.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#shop"
              className="group relative inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-petal transition-transform hover:scale-105"
            >
              مشاهده فروشگاه
              <span className="transition-transform group-hover:-translate-x-1">
                ←
              </span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full glass px-8 py-4 text-lg font-bold text-foreground shadow-soft hover:bg-white/80"
            >
              درباره میهن
            </a>
          </div>

          <div className="mt-10 flex justify-center gap-3 lg:justify-start">
            {slides.map((sl, idx) => (
              <button
                key={sl.id}
                onClick={() => setI(idx)}
                aria-label={sl.title}
                className="h-2 rounded-full bg-foreground/30 transition-all"
                style={{
                  width: idx === i ? 36 : 12,
                  background: idx === i ? "var(--primary)" : undefined,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
