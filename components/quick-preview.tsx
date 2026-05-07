"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Product } from "@/lib/products";
import { formatAfghani } from "@/lib/products";
import { useCart } from "@/lib/cart-store";

export function QuickPreview({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const add = useCart((s) => s.add);
  const [rot, setRot] = useState(0);

  useEffect(() => {
    if (!product) return;
    const id = setInterval(() => setRot((r) => r + 0.6), 30);
    return () => clearInterval(id);
  }, [product]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-foreground/40 backdrop-blur-md" onClick={onClose} />
          <motion.div
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 30, opacity: 0 }}
            transition={{ type: "spring", damping: 22 }}
            className="relative grid w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-petal md:grid-cols-2"
          >
            <button
              onClick={onClose}
              className="absolute top-4 left-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-foreground shadow-soft hover:bg-white"
              aria-label="بستن"
            >
              ✕
            </button>
            <div
              className="perspective-card flex aspect-square items-center justify-center p-8"
              style={{ background: product.tint }}
            >
              <div
                className="relative h-full w-full"
                style={{ transform: `rotateY(${rot}deg)`, transformStyle: "preserve-3d" }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full rounded-3xl object-cover shadow-petal"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 p-8 md:p-10">
              <span className="self-start rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
                {product.categoryName}
              </span>
              <h3 className="text-3xl font-black md:text-4xl">{product.name}</h3>
              <p className="text-foreground/70">{product.description}</p>
              <div className="mt-2 text-3xl font-black text-primary">
                {formatAfghani(product.price)}
              </div>
              <button
                onClick={() => {
                  add(product);
                  onClose();
                }}
                className="mt-2 rounded-full bg-primary py-4 text-lg font-bold text-primary-foreground shadow-petal transition-transform hover:scale-105"
              >
                افزودن به سبد خرید
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
