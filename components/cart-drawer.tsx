"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/lib/cart-store";
import { formatAfghani } from "@/lib/products";

export function CartDrawer() {
  const { items, isOpen, close, remove, setQty, total, clear } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[90] bg-foreground/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed inset-y-0 left-0 z-[91] flex w-full max-w-md flex-col bg-white shadow-petal"
          >
            <div className="flex items-center justify-between border-b p-5">
              <h3 className="text-2xl font-black">
                🛒 سبد خرید
                <span className="mr-2 text-sm font-bold text-foreground/60">
                  ({items.length} مورد)
                </span>
              </h3>
              <button
                onClick={close}
                className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-foreground hover:bg-accent"
                aria-label="بستن"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                  <span className="text-7xl">🌷</span>
                  <p className="text-lg text-foreground/70">سبد خرید شما خالی است</p>
                  <button
                    onClick={close}
                    className="rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground"
                  >
                    شروع خرید
                  </button>
                </div>
              ) : (
                <ul className="space-y-4">
                  {items.map((it) => (
                    <motion.li
                      key={it.id}
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex gap-4 rounded-2xl bg-secondary/40 p-3"
                    >
                      <img src={it.image} alt={it.name} className="h-20 w-20 rounded-xl object-cover" />
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between">
                          <h4 className="font-bold">{it.name}</h4>
                          <button
                            onClick={() => remove(it.id)}
                            className="text-destructive hover:underline text-sm"
                          >
                            حذف
                          </button>
                        </div>
                        <span className="text-sm text-primary font-bold">{formatAfghani(it.price)}</span>
                        <div className="mt-auto flex items-center gap-2">
                          <button
                            onClick={() => setQty(it.id, it.qty - 1)}
                            className="grid h-8 w-8 place-items-center rounded-full bg-white font-bold shadow-soft"
                          >
                            −
                          </button>
                          <span className="min-w-8 text-center font-bold">{it.qty}</span>
                          <button
                            onClick={() => setQty(it.id, it.qty + 1)}
                            className="grid h-8 w-8 place-items-center rounded-full bg-white font-bold shadow-soft"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t bg-white p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-foreground/70">جمع کل:</span>
                  <span className="text-2xl font-black text-primary">{formatAfghani(total())}</span>
                </div>
                <button className="w-full rounded-full bg-primary py-4 text-lg font-bold text-primary-foreground shadow-petal transition-transform hover:scale-[1.02]">
                  تکمیل خرید
                </button>
                <button
                  onClick={clear}
                  className="mt-2 w-full text-sm text-foreground/60 hover:text-destructive"
                >
                  خالی کردن سبد
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
