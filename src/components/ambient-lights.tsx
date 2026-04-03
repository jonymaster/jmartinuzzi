"use client";

import { motion } from "framer-motion";

const lights = [
  // Large emerald — top left, very slow
  {
    size: "h-[550px] w-[550px]",
    color: "bg-emerald-500/10",
    position: "top-[-10%] left-[-8%]",
    animate: { x: [0, 70, 30, 0], y: [0, 50, -30, 0] },
    duration: 24,
    delay: 0,
  },
  // Medium blue — top right, slow
  {
    size: "h-[380px] w-[380px]",
    color: "bg-blue-500/8",
    position: "top-[5%] right-[-5%]",
    animate: { x: [0, -50, -20, 0], y: [0, 60, 20, 0] },
    duration: 19,
    delay: 3,
  },
  // Small emerald — center left
  {
    size: "h-[260px] w-[260px]",
    color: "bg-emerald-400/8",
    position: "top-[38%] left-[8%]",
    animate: { x: [0, 40, 10, 0], y: [0, -40, 20, 0] },
    duration: 15,
    delay: 6,
  },
  // Large orange — bottom right, very slow
  {
    size: "h-[480px] w-[480px]",
    color: "bg-orange-500/8",
    position: "bottom-[-8%] right-[-6%]",
    animate: { x: [0, -60, -10, 0], y: [0, -40, -60, 0] },
    duration: 26,
    delay: 2,
  },
  // Medium emerald — bottom left
  {
    size: "h-[320px] w-[320px]",
    color: "bg-emerald-500/9",
    position: "bottom-[5%] left-[10%]",
    animate: { x: [0, 50, 20, 0], y: [0, -50, -10, 0] },
    duration: 18,
    delay: 8,
  },
  // Small orange — center right
  {
    size: "h-[220px] w-[220px]",
    color: "bg-orange-400/9",
    position: "top-[55%] right-[12%]",
    animate: { x: [0, -30, 10, 0], y: [0, 30, -20, 0] },
    duration: 13,
    delay: 5,
  },
  // Small blue — center top
  {
    size: "h-[200px] w-[200px]",
    color: "bg-blue-400/7",
    position: "top-[20%] left-[45%]",
    animate: { x: [0, 20, -10, 0], y: [0, 40, 10, 0] },
    duration: 17,
    delay: 9,
  },
];

export function AmbientLights() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {lights.map((light, i) => (
        <motion.div
          key={i}
          animate={light.animate}
          transition={{
            duration: light.duration,
            delay: light.delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className={`absolute ${light.position} ${light.size} rounded-full ${light.color} blur-3xl`}
        />
      ))}
    </div>
  );
}
