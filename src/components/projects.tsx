"use client";

import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BentoCard } from "@/components/bento-card";

interface Project {
  title: string;
  description: string;
  tags: string[];
  href: string;
  colSpan?: 1 | 2 | 3;
}

const projects: Project[] = [
  {
    title: "jira-status-fixer",
    description:
      "Chrome extension that fixes Jira's UI by surfacing the Status and Resolution fields where they actually belong — a quality-of-life tool born from daily frustration.",
    tags: ["TypeScript", "Chrome Extension", "Jira"],
    href: "https://github.com/jonymaster/jira-status-fixer",
    colSpan: 2,
  },
  {
    title: "homelab-backups",
    description:
      "Web app to manage and monitor rdiff-backup jobs running on a home server.",
    tags: ["TypeScript", "Homelab"],
    href: "https://github.com/jonymaster/homelab-backups",
  },
  {
    title: "catalogIT",
    description:
      "Web app to track hardware and software assets across an IT team — a lightweight internal inventory system.",
    tags: ["TypeScript", "IT Ops"],
    href: "https://github.com/jonymaster/catalogIT",
  },
  {
    title: "cita-bot",
    description:
      "Selenium and Telegram bot that automates repetitive web tasks and notifies you when they're done.",
    tags: ["Python", "Selenium", "Telegram"],
    href: "https://github.com/jonymaster/cita-bot",
    colSpan: 2,
  },
  {
    title: "install-promtail-windows",
    description:
      "PowerShell script to silently install and configure Promtail on Windows hosts, shipping Windows Events into a Loki pipeline.",
    tags: ["PowerShell", "Loki", "Observability"],
    href: "https://github.com/jonymaster/install-promtail-windows",
  },
  {
    title: "bubble-chart",
    description:
      "Simple browser-based bubble chart generator with PNG export.",
    tags: ["TypeScript", "Visualization"],
    href: "https://github.com/jonymaster/bubble-chart",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-3xl font-bold tracking-tight">Projects</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <BentoCard key={project.title} colSpan={project.colSpan}>
              <div className="flex h-full flex-col justify-between gap-4">
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title}`}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
