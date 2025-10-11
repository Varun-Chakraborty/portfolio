import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data"; // Ensure your data.ts has project info

// Define a type for your project for better type-safety
type Project = {
  title: string;
  description: string;
  link?: string;
  repo: string; // Add a 'repo' link to your data
  image: string;
  tags: string[]; // Add 'tags' to your data
};

export function ProjectCard({ className }: Readonly<{ className?: string }>) {
  // Add 'repo' and 'tags' to your projects in lib/data.ts
  // Example:
  // {
  //   title: "BlogPost",
  //   description: "A simple blog app made with React.js.",
  //   link: "...",
  //   repo: "https://github.com/...", // Add this
  //   image: "/blogpost-project.png",
  //   tags: ["React", "Next.js", "Tailwind CSS"] // Add this
  // },

  return (
    <section id="projects" className={cn("w-full py-12", className)}>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Work & Creations</h2>
        <p className="mt-4 text-muted-foreground md:text-xl">
          Here are some of the projects I&apos;m proud to have built.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {projects.map((project: Project) => (
          <div
            key={project.title}
            className="group relative overflow-hidden rounded-xl border bg-card/50 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="relative block h-56 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary">{project.title}</h3>
              <p className="mt-2 text-muted-foreground">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Hover Overlay with Action Buttons */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {project.link && <Button asChild>
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>}
              <Button variant="secondary" asChild>
                <Link href={project.repo} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> View Code
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
