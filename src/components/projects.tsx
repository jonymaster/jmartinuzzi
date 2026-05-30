"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, FolderGit2, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BentoCard } from "@/components/bento-card";

interface Project {
  title: string;
  description: string;
  tags: string[];
  href: string;
  demoHref?: string;
  demoHint?: string;
  blogHref?: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
  colSpan?: 1 | 2 | 3;
}

const projects: Project[] = [
  {
    title: "catalogIT",
    description:
      "The IT service and hardware catalog I always wished existed — hardware inventory, SaaS subscriptions, spend tracking, and renewal alerts in one place. Built with OIDC, SCIM, and Slack integrations for real orgs, not just demos.",
    tags: ["TypeScript", "Full Stack", "IT Ops", "Open Source"],
    href: "https://github.com/jonymaster/catalogIT",
    demoHref: "https://catalog-it.jmartinuzzi.dev/login",
    demoHint: "Demo password: admindemo",
    blogHref: "/blog/building-catalogit",
    image: "/blog/building-catalogit/Dashboard.png",
    imageAlt: "catalogIT dashboard showing spend trends, renewal risk, and inventory KPIs",
    featured: true,
    colSpan: 3,
  },
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
        <div className="mb-12 flex items-center gap-3">
          <FolderGit2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <BentoCard key={project.title} colSpan={project.colSpan}>
              {project.featured ? (
                <div className="flex h-full flex-col gap-6 lg:flex-row lg:items-center">
                  {project.image && (
                    <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-xl border border-border lg:w-1/2">
                      <Image
                        src={project.image}
                        alt={project.imageAlt ?? project.title}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                      />
                    </div>
                  )}
                  <div className="flex h-full flex-col justify-between gap-5 lg:w-1/2">
                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <Badge className="border-emerald-600/30 bg-emerald-600/10 text-emerald-600 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-400">
                          Featured
                        </Badge>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap gap-2">
                          {project.demoHref && (
                            <Button asChild size="sm" className="gap-2">
                              <a
                                href={project.demoHref}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Play className="h-3.5 w-3.5" />
                                Live demo
                              </a>
                            </Button>
                          )}
                          <Button asChild variant="outline" size="sm" className="gap-2">
                            <a
                              href={project.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-3.5 w-3.5" />
                              Source
                            </a>
                          </Button>
                          {project.blogHref && (
                            <Button asChild variant="ghost" size="sm" className="gap-2">
                              <Link href={project.blogHref}>
                                Read the story
                                <ArrowRight className="h-3.5 w-3.5" />
                              </Link>
                            </Button>
                          )}
                        </div>
                        {project.demoHint && (
                          <p className="text-xs italic text-muted-foreground">
                            {project.demoHint}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
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
              )}
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
