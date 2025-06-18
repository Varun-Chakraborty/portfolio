"use client";

import { AboutCard } from "@/components/aboutCard";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function TaglineComponent() {
  const [attribute, setAttribute] = useState<string>();
  const [timeOutId, setTimeOutId] = useState<NodeJS.Timeout>();

  useEffect(() => {
    const list = [
      "Developer",
      "Designer",
      "Thinker",
      "Explorer",
      "Creator",
      "Tinkerer",
      "Problem Solver",
      "Curious Mind",
    ];
    let current = -1;
    async function pushWord() {
      current = (current + 1) % list.length;
      const word = list[current];
      let currentLetter = -1;
      function pushLetter() {
        currentLetter++;
        setAttribute(word.slice(0, currentLetter + 1));
      }
      function removeLetter() {
        currentLetter--;
        setAttribute(word.slice(0, currentLetter + 1));
      }
      const promise1 = new Promise((resolve) => {
        pushLetter();
        const interval = setInterval(() => {
          pushLetter();
          if (currentLetter === word.length - 1) {
            clearInterval(interval);
            resolve("done");
          }
        }, 100);
      });
      await promise1;
      const waitPromise = new Promise((resolve) => {
        setTimeOutId(
          setTimeout(() => {
            resolve("done");
          }, 1000)
        );
      });
      await waitPromise;
      const promise2 = new Promise((resolve) => {
        const interval = setInterval(() => {
          removeLetter();
          if (currentLetter === 0) {
            clearInterval(interval);
            resolve("done");
          }
        }, 100);
      });
      await promise2;
      pushWord();
    }
    pushWord();
    return () => clearTimeout(timeOutId);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full">
      <Image src="/avatar.png" width={200} height={200} alt="avatar" />
      <div className="text-5xl md:text-6xl font-bold text-center mb-4 flex gap-3 flex-col md:flex-row">
        <span>A</span>
        <span className="text-accent">
          {attribute}
          <span className="animate-blink">|</span>
        </span>
      </div>
    </div>
  );
}

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
      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill) => (
          <Skill key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}

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

function ProjectCard() {
  return (
    <Card id="projects" className="md:px-2 shadow backdrop:blur-lg bg-card/10 m-0">
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

function SkillSetCard() {
  return (
    <Card id="skills" className="px-2 shadow backdrop:blur-lg bg-card/10">
      <CardTitle className="text-3xl mx-auto relative w-fit p-2">
        Skill Set
        <span className="absolute h-1 bottom-0 right-0 w-full bg-accent animate-grow-shrink" />
      </CardTitle>
      <CardContent>
        <CardDescription className="sm:text-md space-y-2 sm:grid grid-cols-3">
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
            className="col-span-3 sm:flex flex-col items-center"
          />
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  return (
    <>
      <div className="hidden dark:block absolute -top-24 left-1/4 h-48 w-48 rounded-full bg-primary/20 blur-3xl"></div>
      <div className="hidden dark:block absolute right-1/4 top-36 h-72 w-72 rounded-full bg-primary/10 blur-[100px]"></div>
      <div className="hidden dark:block absolute bottom-12 left-1/3 h-60 w-60 rounded-full bg-blue-500/10 blur-[80px]"></div>
      <section className="space-y-4 px-5 flex flex-col-reverse md:flex-row">
        <AboutCard />
        <TaglineComponent />
      </section>
      <section className="space-y-4 p-5 md:flex gap-3">
        <ProjectCard />
        <SkillSetCard />
      </section>
    </>
  );
}
