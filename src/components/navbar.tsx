"use client";

import { useTheme } from "@/lib/context/theme";
import { Button } from "./ui/button";
import { Laptop, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
export default function Navbar({
  className,
}: Readonly<{ className?: string }>) {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav
      className={cn(
        "flex justify-between items-center p-3 border gap-4 sm:w-4/5 mx-auto rounded-xl dark:shadow-lg shadow",
        className
      )}
    >
      <h1 className="text-xl font-bold w-full">Hello World</h1>
      <div className="flex gap-2 items-center">
        <Button variant="accent" className="uppercase">
          <Link href="#projects">Projects</Link>
        </Button>
        <Button variant="outline" onClick={toggleTheme}>
          {theme === "dark" ? (
            <Moon />
          ) : theme === "system" ? (
            <Laptop />
          ) : (
            <Sun />
          )}
        </Button>
      </div>
    </nav>
  );
}
