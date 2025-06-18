import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";

export function AboutCard() {
  return (
    <Card className="lg:w-1/3 md:w-1/2 w-auto px-2 shadow backdrop:blur-lg bg-card/10">
      <CardTitle className="text-3xl mx-auto">Who am I?</CardTitle>
      <CardContent>
        <CardDescription className="sm:text-md space-y-2">
          <p>
            I am a <Link href="#skills" className="underline"><i>developer</i></Link> with a passion for creating innovative
            and user-friendly web applications. With a strong foundation in
            HTML, CSS, and JavaScript, I have honed my skills in front-end
            development, enabling me to bring ideas to life on the web.
          </p>
          <p>
            In the realm of back-end development, I have a solid understanding of
            server-side technologies such as Node.js and Express.js. With a
            keen eye for performance optimization and scalability, I have
            honed my skills in building robust and efficient server-side
            solutions.
          </p>
        </CardDescription>
      </CardContent>
      <CardFooter>
        <CardAction className="flex gap-2 w-full justify-between">
          <Button variant="ghost">Learn more</Button>
          <Button variant="secondary"><Link href="#skills">Skills</Link></Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
}
