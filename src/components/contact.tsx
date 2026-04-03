"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/tilt-card";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
        >
          <TiltCard>
            <div className="glass rounded-2xl p-10 text-center transition-all duration-300 hover:border-emerald-600/30 dark:hover:border-emerald-400/30 hover:shadow-[0_0_30px_-5px_oklch(0.79_0.209_151.71/0.15)]">
              <h2 className="mb-4 text-3xl font-bold tracking-tight">
                Let&apos;s work together
              </h2>
              <p className="mx-auto mb-8 max-w-md text-muted-foreground">
                I&apos;m available for freelance contracts and consulting
                engagements — security, DevOps, IT systems, or Atlassian. If you
                have a project in mind, reach out.
              </p>
              <Button asChild size="lg" className="gap-2">
                <a href="mailto:jacopo.martinuzzi@gmail.com">
                  Get in touch
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
