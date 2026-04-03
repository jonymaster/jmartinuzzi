"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 40, damping: 18 };
  const smX = useSpring(mouseX, springConfig);
  const smY = useSpring(mouseY, springConfig);

  // Each orb moves at a different speed and direction for depth
  const orb1X = useTransform(smX, [0, 1], [-50, 50]);
  const orb1Y = useTransform(smY, [0, 1], [-35, 35]);
  const orb2X = useTransform(smX, [0, 1], [35, -35]);
  const orb2Y = useTransform(smY, [0, 1], [25, -25]);
  const orb3X = useTransform(smX, [0, 1], [-20, 20]);
  const orb3Y = useTransform(smY, [0, 1], [-15, 15]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
      onMouseMove={handleMouseMove}
    >
      {/* Orb 1 — emerald, top-left, slowest */}
      <motion.div style={{ x: orb1X, y: orb1Y }} className="pointer-events-none absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ y: [0, -24, 0], x: [0, 16, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="h-[500px] w-[500px] rounded-full bg-emerald-500/15 blur-3xl"
        />
      </motion.div>

      {/* Orb 2 — blue, bottom-right, medium */}
      <motion.div style={{ x: orb2X, y: orb2Y }} className="pointer-events-none absolute right-1/4 top-2/3 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -20, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl"
        />
      </motion.div>

      {/* Orb 3 — emerald, bottom-left, fastest */}
      <motion.div style={{ x: orb3X, y: orb3Y }} className="pointer-events-none absolute bottom-1/4 left-2/3">
        <motion.div
          animate={{ y: [0, 16, 0], x: [0, 12, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="h-[300px] w-[300px] rounded-full bg-emerald-400/8 blur-3xl"
        />
      </motion.div>

      <div className="relative flex flex-col items-center gap-6 text-center">
        {/* Pulsing available badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-600/10 px-4 py-1.5 dark:border-emerald-400/20 dark:bg-emerald-400/10"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-600 opacity-75 dark:bg-emerald-400" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
          </span>
          <p className="text-sm font-medium tracking-wide text-emerald-600 dark:text-emerald-400">
            Freelance IT & Security Engineer · Open to new projects
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          Jacopo Martinuzzi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-lg text-lg leading-relaxed text-muted-foreground"
        >
          I help startups and organizations tackle security, DevOps, and IT
          infrastructure — remotely, as a contractor. Zero Trust, cloud IAM,
          Atlassian platforms, and everything in between. Based in Japan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <Button asChild size="lg" className="gap-2">
            <a href="#contact">
              Let&apos;s work together
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg" className="gap-2">
            <a href="#experience">
              See my work
              <ChevronDown className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
