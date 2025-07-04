import { useEffect, useState } from "react";
import Image from "next/image";

export function TaglineComponent() {
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
