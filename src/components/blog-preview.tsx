import Link from "next/link";
import { ArrowRight, Calendar, PenLine } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BentoCard } from "@/components/bento-card";
import { getAllPosts } from "@/lib/posts";

export function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <PenLine className="h-6 w-6 text-emerald-400" />
            <h2 className="text-3xl font-bold tracking-tight">Blog</h2>
          </div>
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link href="/blog">
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BentoCard key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="flex h-full flex-col justify-between gap-4">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <h3 className="mb-2 font-semibold">{post.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {post.summary}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Link>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
