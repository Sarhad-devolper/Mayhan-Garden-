"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import type { Product } from "@/lib/products";
import { formatAfghani } from "@/lib/products";
import { useCart } from "@/lib/cart-store";

interface Props {
  product: Product;
  onPreview: (p: Product) => void;
}

export function ProductCard({ product, onPreview }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const add = useCart((s) => s.add);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -py * 12, y: px * 14 });
  };
  const reset = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="perspective-card group"
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="relative overflow-hidden rounded-3xl shadow-soft transition-shadow hover:shadow-petal"
        style={{
          background: product.tint,
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 200ms ease-out",
        }}
      >
        {/* <div className="relative aspect-square overflow-hidden"> */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={1024}
            height={1024}
            className="h-full w-full object-cover"
            style={{ transform: "translateZ(40px)" }}
            whileHover={{ scale: 1.08, rotate: -2 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute top-4 left-4">
            <button
              onClick={() => onPreview(product)}
              className="rounded-full glass px-4 py-2 text-xs font-bold shadow-soft hover:bg-white"
            >
              نمایش سریع
            </button>
          </div>
          <span className="absolute top-4 right-4 rounded-full bg-white/85 px-3 py-1 text-xs font-bold text-primary shadow-soft">
            {product.categoryName}
          </span>
        </div>

        <div
          // className="relative bg-white/85 backdrop-blur p-5"
          className="relative bg-white/85 backdrop-blur p-3"
          style={{ transform: "translateZ(20px)" }}
        >
          {/* <h3 className="text-xl font-extrabold text-foreground">{product.name}</h3> */}
          <h3 className="text-base font-extrabold text-foreground">
            {product.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-foreground/70">
            {product.description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            {/* <span className="text-lg font-black text-primary"> */}
            <span className="text-base font-black text-primary">
              {formatAfghani(product.price)}
            </span>
            <button
              onClick={() => add(product)}
              className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:scale-105"
            >
              افزودن به سبد
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
