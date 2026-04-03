import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { label: "GitHub", href: "https://github.com/jonymaster", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jacopo-martinuzzi/",
    icon: Linkedin,
  },
  { label: "Email", href: "mailto:me@jmartinuzzi.dev", icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Jacopo Martinuzzi
        </p>
        <div className="flex gap-4">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
