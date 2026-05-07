// "use client";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const flowers = ["🌹", "🌷", "🌻", "🌸", "🪻", "💐"];

// interface Petal {
//   id: number;
//   left: number;
//   delay: number;
//   duration: number;
//   size: number;
//   emoji: string;
//   rot: number;
// }

// export function FloatingFlowers({ count = 14 }: { count?: number }) {
//   const [petals, setPetals] = useState<Petal[]>([]);

//   useEffect(() => {
//     setPetals(
//       Array.from({ length: count }, (_, i) => ({
//         id: i,
//         left: Math.random() * 100,
//         delay: Math.random() * 6,
//         duration: 12 + Math.random() * 14,
//         size: 22 + Math.random() * 36,
//         emoji: flowers[Math.floor(Math.random() * flowers.length)],
//         rot: Math.random() * 360,
//       }))
//     );
//   }, [count]);

//   return (
//     <div className="pointer-events-none absolute inset-0 overflow-hidden">
//       {petals.map((p) => (
//         <motion.span
//           key={p.id}
//           initial={{ y: "-10%", x: 0, rotate: p.rot, opacity: 0 }}
//           animate={{
//             y: "110vh",
//             x: [0, 30, -30, 0],
//             rotate: p.rot + 360,
//             opacity: [0, 1, 1, 0],
//           }}
//           transition={{
//             duration: p.duration,
//             delay: p.delay,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           className="absolute select-none drop-shadow-md"
//           style={{ left: `${p.left}%`, fontSize: p.size }}
//         >
//           {p.emoji}
//         </motion.span>
//       ))}
//     </div>
//   );
// }
