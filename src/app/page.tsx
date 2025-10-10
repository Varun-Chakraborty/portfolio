// src/app/page.tsx

import { Hero } from "@/components/hero";
import { Journey } from "@/components/journey";
import { ProjectCard } from "@/components/projectCard";
import { SkillSetCard } from "@/components/skillsetCard";
import { AnimatedSection } from "@/components/animatedSection";

export default function Home() {
  return (
    // The change is on this line. I removed overflow-x-hidden and used overflow-hidden
    <div className="relative isolate overflow-hidden">
      {/* Background Gradient Elements */}
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="container mx-auto max-w-5xl px-6 lg:px-8">
        <Hero />

        <div className="space-y-24 sm:space-y-32 md:space-y-40 mt-24 sm:mt-32 md:mt-40">
          <AnimatedSection>
            <Journey />
          </AnimatedSection>

          <AnimatedSection>
            <ProjectCard />
          </AnimatedSection>
          
          <AnimatedSection>
            <SkillSetCard />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
