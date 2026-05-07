"use client";
import { motion } from "framer-motion";
import { products } from "@/lib/products";

export function Highlights() {
const featured = products.filter(p => p.featured).slice(0, 6);
  return (
    <section id="highlights" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="rounded-full glass px-4 py-2 text-sm font-bold text-primary">
            ⭐ پیشنهاد ویژه
          </span>
          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            <span className="text-gradient">محصولات منتخب فصل</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((p, i) => (
            <motion.a
              key={p.id}
              href="#shop"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[2rem] shadow-soft hover:shadow-petal"
              style={{ background: p.tint }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                <span className="rounded-full bg-white/30 px-3 py-1 text-xs font-bold backdrop-blur">
                  {p.categoryName}
                </span>
                <h3 className="mt-3 text-2xl font-black">{p.name}</h3>
                <p className="mt-1 text-sm opacity-90">{p.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
