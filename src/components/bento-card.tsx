"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { TiltCard } from "@/components/tilt-card";
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
  const spanClasses = cn(
    colSpan === 2 && "md:col-span-2",
    colSpan === 3 && "lg:col-span-3",
    rowSpan === 2 && "row-span-2",
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={spanClasses}
    >
      <TiltCard>
        <Card
          className={cn(
            "glass h-full rounded-2xl p-6 transition-all duration-300",
            "hover:border-emerald-600/30 dark:hover:border-emerald-400/30 hover:bg-black/5 dark:hover:bg-white/10 hover:shadow-[0_0_30px_-5px_oklch(0.79_0.209_151.71/0.15)]",
            className,
          )}
        >
          {children}
        </Card>
      </TiltCard>
    </motion.div>
  );
}
