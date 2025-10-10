import { cn } from "@/lib/utils";
import Image from "next/image";
import { PenTool, Server, Wrench } from "lucide-react";

// In lib/data.ts, group skills by their purpose
const skillNarrative = [
  {
    category: "Building User Interfaces",
    narrative: "I create intuitive and responsive user experiences using a modern frontend stack. My focus is on writing clean, reusable components and ensuring pixel-perfect design implementation.",
    skills: ["React.js", "Next.js", "TypeScript", "HTML", "CSS", "TailwindCSS"],
    icon: PenTool,
  },
  {
    category: "Powering Servers & APIs",
    narrative: "For the backend, I build efficient and scalable RESTful APIs. I focus on creating a solid foundation that is secure, fast, and ready to grow with the application's needs.",
    skills: ["Node.js", "Express.js"],
    icon: Server,
  },
  {
    category: "Tools & DevOps",
    narrative: "I rely on a robust set of tools for version control, collaboration, and deployment. These practices ensure a smooth and reliable development lifecycle from start to finish.",
    skills: ["Git", "GitHub", "Docker"],
    icon: Wrench,
  },
];

export function SkillSetCard({ className }: Readonly<{ className?: string }>) {
  return (
    <section id="skills" className={cn("w-full py-12", className)}>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Developer's Toolkit</h2>
        <p className="mt-4 text-muted-foreground md:text-xl">
          More than just a list of technologies, this is how I approach building great products.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-1 lg:grid-cols-3">
        {skillNarrative.map((item) => (
          <div key={item.category} className="rounded-xl border bg-card/50 p-6 text-center shadow-lg">
            <div className="inline-block rounded-lg bg-accent/20 p-3">
              <item.icon className="h-8 w-8 text-accent" />
            </div>
            <h3 className="mt-4 text-xl font-bold">{item.category}</h3>
            <p className="mt-2 text-muted-foreground">{item.narrative}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              {item.skills.map((skill) => (
                <div key={skill} className="rounded-full bg-background px-3 py-1 ring-1 ring-border">
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
