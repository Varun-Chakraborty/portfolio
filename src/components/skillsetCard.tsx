import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

function Skill({ skill }: { skill: string }) {
  return (
    <div className="h-20 aspect-square rounded-lg bg-amber-50 flex justify-center items-center p-2">
      <Image
        src={`/${skill.toLowerCase()}.png`}
        width={80}
        height={80}
        alt={skill}
      />
    </div>
  );
}

function SkillSet({
  title,
  skills,
  className,
}: {
  title: string;
  skills: string[];
  className?: string;
}) {
  return (
    <div className={cn("space-y-2 p-4 rounded-lg", className)}>
      <div className="font-bold text-xl">{title}</div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Skill key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export function SkillSetCard({ className }: Readonly<{ className?: string }>) {
  return (
    <Card id="skills" className={cn("px-2 shadow backdrop:blur-lg bg-card/10 w-full", className)}>
      <CardTitle className="text-3xl mx-auto relative w-fit p-2">
        Skill Set
        <span className="absolute h-1 bottom-0 right-0 w-full bg-accent animate-grow-shrink" />
      </CardTitle>
      <CardContent className="sm:text-md space-y-2 sm:grid grid-cols-2">
        <SkillSet
          title="Web Core"
          skills={["HTML", "CSS", "JavaScript", "Typescript"]}
        />
        <SkillSet
          title="Frontend"
          skills={["React.js", "Next.js", "TailwindCSS"]}
        />
        <SkillSet title="Backend" skills={["Node.js", "Express.js"]} />
        <SkillSet
          title="DevOps"
          skills={["Git", "GitHub", "Docker"]}
        />
      </CardContent>
    </Card>
  );
}
