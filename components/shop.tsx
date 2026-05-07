"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products, categories, type FlowerCategory, type Product } from "@/lib/products";
import { ProductCard } from "./product-card";
import { QuickPreview } from "./quick-preview";

export function Shop() {
  const [filter, setFilter] = useState<FlowerCategory | "all">("all");
  const [preview, setPreview] = useState<Product | null>(null);

  const filtered = filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    // <section id="shop" className="relative py-24 md:py-32">
    <section id="shop" className="relative py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="rounded-full glass px-4 py-2 text-sm font-bold text-primary">
            🌸 فروشگاه گل ها
          </span>
          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            <span className="text-gradient">گل‌های منتخب ما</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            از میان ده‌ها گونه‌ی تازه و دست‌چین، سلیقه‌ی خود را انتخاب کنید.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                filter === c.id
                  ? "bg-primary text-primary-foreground shadow-petal"
                  : "glass text-foreground/80 hover:bg-white/80"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* <motion.div layout className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"> */}
        <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={p} onPreview={setPreview} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <QuickPreview product={preview} onClose={() => setPreview(null)} />
    </section>
  );
}
