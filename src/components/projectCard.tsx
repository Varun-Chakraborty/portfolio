import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

function Project({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="space-y-2 p-4 rounded-lg">
      <div className="font-bold text-xl">{title}</div>
      <div className="text-sm">{description}</div>
      <div className="sm:hidden">
        <Button>
          <Link href={link} target="_blank">
            Check it out
          </Link>
        </Button>
      </div>
      <div className="hidden sm:block w-[667px] h-[375px] overflow-hidden border border-gray-300 rounded-lg shadow-md relative group">
        <iframe
          src={link}
          className="w-[1780px] h-[1000px] scale-[0.375] origin-top-left border-0 pointer-events-none"
          loading="lazy"
        />
        <div className="absolute top-0 left-0 w-full h-full z-999">
          <Button
            className="absolute bottom-5 transition-all left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100"
          >
            <Link href={link} target="_blank">
              Feels good? Check it out
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ className }: Readonly<{ className?: string }>) {
  return (
    <Card id="projects" className={cn("md:px-2 shadow backdrop:blur-lg bg-card/10 m-0 w-full", className)}>
      <CardTitle className="text-3xl mx-auto relative w-fit p-2">
        Projects
        <span className="absolute h-1 bottom-0 left-0 w-full bg-accent animate-grow-shrink" />
      </CardTitle>
      <CardContent>
        <CardDescription className="sm:text-md space-y-2 flex items-center">
          <Button variant="ghost">
            <ChevronLeft />
          </Button>
          <Project
            title="BlogPost"
            description="A simple blog app made with React.js"
            link="https://blog-post-seven-self.vercel.app/"
          />
          <Button variant="ghost">
            <ChevronRight />
          </Button>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
