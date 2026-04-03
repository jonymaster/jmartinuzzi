"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
}

export function BentoCard({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
}: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 200, damping: 20 });
  const y = useSpring(rawY, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(y, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-6deg", "6deg"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  const spanClasses = cn(
    colSpan === 2 && "md:col-span-2",
    colSpan === 3 && "lg:col-span-3",
    rowSpan === 2 && "row-span-2",
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("group", spanClasses)}
    >
      <Card
        className={cn(
          "glass h-full rounded-2xl p-6 transition-all duration-300",
          "hover:border-emerald-400/30 hover:bg-black/5 dark:hover:bg-white/10 hover:shadow-[0_0_30px_-5px_oklch(0.79_0.209_151.71/0.15)]",
          className,
        )}
      >
        {children}
      </Card>
    </motion.div>
  );
}
