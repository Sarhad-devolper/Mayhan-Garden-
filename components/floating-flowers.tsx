"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

// 👇 Add/remove any of your real flower images here
const flowerImages = [
  "/assets/fload1.png",
  "/assets/fload2.png",
  "/assets/fload3.png",
  "/assets/fload4.png",
  "/assets/fload5.png",
  "/assets/fload6.png",
];

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  src: string;
  rot: number;
}

export function FloatingFlowers({ count = 14 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    setPetals(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 12 + Math.random() * 14,
        size: 50 + Math.random() * 40, // 👈 px size (50–90px)
        src: flowerImages[Math.floor(Math.random() * flowerImages.length)],
        rot: Math.random() * 360,
      }))
    );
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: "-10%", x: 0, rotate: p.rot, opacity: 0 }}
          animate={{
            y: "110vh",
            x: [0, 30, -30, 0],
            rotate: p.rot + 360,
            opacity: [0, 0.7, 0.7, 0],  // 👈 max opacity 0.7 so not too heavy
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute"
          style={{ left: `${p.left}%` }}
        >
          <Image
            src={p.src}
            alt="flower"
            width={p.size}
            height={p.size}
            className="rounded-full object-cover shadow-md"
            style={{
              width: p.size,
              height: p.size,
              opacity: 0.75,           // 👈 adjust this (0.5 subtle, 1.0 full)
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}