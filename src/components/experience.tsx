"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  description: string;
  badge?: string;
}

const experiences: ExperienceEntry[] = [
  {
    title: "IT & Systems Engineer",
    company: "Meedan — Remote",
    period: "2025 – Present",
    badge: "Contract",
    description:
      "Contractor for a global nonprofit building AI-powered platforms for election integrity and information access. Covering security engineering, DevOps, and IT systems across a fully remote, distributed team.",
  },
  {
    title: "Atlassian Consultant",
    company: "Welltech — Remote",
    period: "2025 – Present",
    badge: "Retained Client",
    description:
      "Retained as an external consultant for advanced Atlassian configuration — Jira workflows, Confluence governance, automation rules, and ongoing platform optimization for the engineering org.",
  },
  {
    title: "Platform Security Engineer",
    company: "Glovo — Barcelona",
    period: "2021 – 2025",
    description:
      "Led migration from legacy VPN to Cloudflare Zero Trust, securing 3,500+ endpoints. Refactored AWS IAM with Terraform enforcing least privilege across EKS workloads. Built security automation with Python and AWS Lambda, and achieved 100% device visibility through centralized MDM.",
  },
  {
    title: "Cloud & Infrastructure Engineer",
    company: "NTT — Barcelona",
    period: "2018 – 2021",
    description:
      "Managed high-availability infrastructure (99.99% uptime) across VMware and Citrix platforms. Designed FortiGate and Palo Alto firewall policies for strict network segmentation across hybrid on-premise and cloud environments.",
  },
  {
    title: "IT Consultant",
    company: "Memory IT — Italy",
    period: "2015 – 2018",
    description:
      "Designed high-availability network architectures and failover systems for SMB clients. Led ransomware incident recovery, restoring systems from backups and hardening infrastructure end-to-end.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-12 text-3xl font-bold tracking-tight">Experience</h2>

        <div className="relative border-l border-border pl-8">
          {experiences.map((entry, i) => (
            <motion.div
              key={entry.company}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative mb-12 last:mb-0"
            >
              <span className="absolute -left-[2.55rem] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background">
                <Briefcase className="h-3 w-3 text-emerald-400" />
              </span>

              <div className="glass rounded-xl p-5">
                <div className="mb-1 flex items-center gap-2">
                  <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                    {entry.period}
                  </p>
                  {entry.badge && (
                    <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-xs font-medium text-emerald-400">
                      {entry.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold">{entry.title}</h3>
                <p className="text-sm text-muted-foreground">{entry.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {entry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
