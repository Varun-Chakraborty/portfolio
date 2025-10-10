import { skillNarrative } from "@/lib/data";
import { cn } from "@/lib/utils";


export function SkillSetCard({ className }: Readonly<{ className?: string }>) {
  return (
    <section id="skills" className={cn("w-full py-12", className)}>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Developer&apos;s Toolkit</h2>
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
