"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "@/lib/cart-store";
import Image from "next/image"; 

const links = [
  { id: "home", label: "خانه" },
  { id: "shop", label: "فروشگاه" },
  { id: "highlights", label: "محصولات ویژه" },
  { id: "about", label: "درباره ما" },
  { id: "contact", label: "تماس با ما" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { open: openCart, count } = useCart();
  const cartCount = count();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 font-black">
            {/* <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-2xl text-primary-foreground shadow-petal"> */}
              <span className="grid rounded-10px h-10 w-10 place-items-center shadow-petal">
              {/* 🌷 */}
              <img src="../assets/logo1.png" alt="logo"
              />
            </span>
            <span className="text-xl">
              میهن <span className="text-gradient">گاردن</span>
            </span>
          </a>
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`relative rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                    active === l.id
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {l.label}
                  {active === l.id && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-secondary"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <button
              onClick={openCart}
              className="relative grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-petal transition-transform hover:scale-110"
              aria-label="سبد خرید"
            >
              🛒
              {cartCount > 0 && (
                <span className="absolute -top-1 -left-1 grid h-6 min-w-6 place-items-center rounded-full bg-accent px-1.5 text-xs font-black text-foreground shadow-soft">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setOpen((o) => !o)}
              className="grid h-11 w-11 place-items-center rounded-full glass shadow-soft md:hidden"
              aria-label="منو"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-5 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
                />
                <span
                  className={`block h-0.5 w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-0.5 w-5 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
                />
              </div>
            </button>
          </div>
        </nav>

        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          className="overflow-hidden md:hidden"
        >
          <ul className="mt-2 space-y-1 rounded-2xl glass p-3 shadow-soft">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 font-bold ${
                    active === l.id
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/80 hover:bg-white/60"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.header>
  );
}
