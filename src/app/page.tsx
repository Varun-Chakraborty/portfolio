"use client";

import { AboutCard } from "@/components/aboutCard";
import { ProjectCard } from "@/components/projectCard";
import { SkillSetCard } from "@/components/skillsetCard";
import { TaglineComponent } from "@/components/tagline";

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
      <section className="space-y-4 p-5 md:flex justify-between gap-3">
        <ProjectCard />
        <SkillSetCard />
      </section>
    </>
  );
}
