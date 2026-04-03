import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { BlogPreview } from "@/components/blog-preview";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Separator className="mx-auto max-w-6xl opacity-10" />
        <Services />
        <Separator className="mx-auto max-w-6xl opacity-10" />
        <Experience />
        <Separator className="mx-auto max-w-6xl opacity-10" />
        <Projects />
        <Separator className="mx-auto max-w-6xl opacity-10" />
        <BlogPreview />
        <Separator className="mx-auto max-w-6xl opacity-10" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
