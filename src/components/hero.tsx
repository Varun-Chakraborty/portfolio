"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, Linkedin } from "lucide-react";
import { socialLinks } from "@/lib/data"; // Make sure socialLinks are in your data file
import { SVGs } from "./svgs";

export function Hero() {
  const [attribute, setAttribute] = useState<string>("Creator");

  useEffect(() => {
    const list = ["Developer", "Designer", "Thinker", "Creator", "Problem Solver"];
    let wordIndex = 0;
    const intervalId = setInterval(() => {
      wordIndex = (wordIndex + 1) % list.length;
      setAttribute(list[wordIndex]);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  // A helper to get the correct icon based on the social link name
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "github":
        return <SVGs.Github className="h-5 w-5 dark:invert" />;
      case "linkedin":
        return <Linkedin className="h-5 w-5" />;
      case "x":
        return <SVGs.X className="h-5 w-5 dark:invert" />;
      case "email":
        return <SVGs.Gmail className="h-5 w-5 dark:invert" />;
      default:
        return null;
    }
  };

  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center text-center">
      <Image
        src="/avatar.png"
        width={120}
        height={120}
        alt="avatar"
        className="mb-6 rounded-full border-4 border-card shadow-lg"
      />
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
        I Design & Build
        <br />
        <span className="relative inline-block text-accent">
          {attribute}
        </span>{" "}
        Experiences
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
        A passionate developer focused on creating modern, user-friendly web applications from concept to deployment.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button size="lg" asChild>
          <Link href="#projects">
            See My Work <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button size="lg" variant="secondary" asChild>
          <Link href="#skills">My Skillset</Link>
        </Button>
      </div>
      
      {/* New Social Links Section */}
      <div className="mt-8 flex items-center justify-center gap-x-4">
        {socialLinks.map((item) => (
          <Button key={item.name} variant="ghost" size="icon" asChild>
            <Link href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.name}>
              {getIcon(item.name)}
            </Link>
          </Button>
        ))}
      </div>
    </section>
  );
}
