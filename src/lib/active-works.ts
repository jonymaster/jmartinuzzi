import fs from "fs";
import path from "path";

export interface ActiveWork {
  slug: string;
  file: string;
  title: string;
}

const WORKS_DIR = path.join(process.cwd(), "src/content/active-works");

const activeWorks: ActiveWork[] = [
  {
    slug: "thlvKsxdb819g50P",
    file: "core-funnels-in-jira.html",
    title: "Core Funnels in Jira",
  },
];

export function getActiveWorkBySlug(slug: string): ActiveWork | null {
  return activeWorks.find((work) => work.slug === slug) ?? null;
}

export function getActiveWorkHtml(slug: string): string | null {
  const work = getActiveWorkBySlug(slug);
  if (!work) return null;

  const filePath = path.join(WORKS_DIR, work.file);
  if (!fs.existsSync(filePath)) return null;

  return fs.readFileSync(filePath, "utf-8");
}
