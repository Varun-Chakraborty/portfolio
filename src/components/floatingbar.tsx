"use client";

import { useTheme } from "@/lib/context/theme"; // Assuming your theme hook is here
import { Button } from "./ui/button";
import { Laptop, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-2 p-2 rounded-full border bg-card/50 backdrop-blur-md shadow-lg">
        <Button variant="ghost" className="rounded-full">
          Home
        </Button>
        <Button variant="ghost" className="rounded-full">
          Projects
        </Button>
        <div className="h-6 w-px bg-border mx-2" />
        <Button variant="outline" onClick={toggleTheme} className="rounded-full p-2 h-auto w-auto">
          {theme === "dark" ? (
            <Moon className="h-5 w-5" />
          ) : theme === "system" ? (
            <Laptop className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>
      </div>
    </motion.div>
  );
}
