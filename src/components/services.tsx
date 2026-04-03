"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cloud, Layers, Workflow, Zap } from "lucide-react";
import { TiltCard } from "@/components/tilt-card";

const services = [
  {
    icon: ShieldCheck,
    title: "Security Engineering",
    description:
      "Zero Trust architecture, IAM design (Okta, Entra ID, AWS IAM), cloud security posture, compliance readiness (PCI-DSS, NIST), and security automation.",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud Infrastructure",
    description:
      "AWS, Azure, and GCP infrastructure managed with Terraform. CI/CD pipelines, Kubernetes, observability stacks, and infrastructure as code at scale.",
  },
  {
    icon: Layers,
    title: "Atlassian Administration",
    description:
      "Advanced Jira and Confluence configuration, complex workflow design, automation rules, permission governance, and platform migrations for engineering teams.",
  },
  {
    icon: Workflow,
    title: "IT Systems & Automation",
    description:
      "End-to-end IT systems management: MDM rollouts, identity lifecycle, SaaS onboarding, vendor consolidation, and Python-based workflow automation.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-4 flex items-center gap-3">
          <Zap className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
          <h2 className="text-3xl font-bold tracking-tight">What I do</h2>
        </div>
        <p className="mb-12 max-w-xl text-muted-foreground">
          I work with startups and growing organizations as a remote contractor.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              >
              <TiltCard>
              <div className="glass rounded-xl p-6 transition-all duration-300 hover:border-emerald-600/30 dark:hover:border-emerald-400/30 hover:bg-black/5 dark:hover:bg-white/10 hover:shadow-[0_0_30px_-5px_oklch(0.79_0.209_151.71/0.15)]">
                <service.icon className="mb-4 h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
