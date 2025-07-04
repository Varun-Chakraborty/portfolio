import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export function Footer() {
    return (
        <footer className="p-2 space-y-4 text-sm text-muted-foreground">
          <div className="p-2">
            <div className="font-bold text-xl">Social Links</div>
            <div className="p-2 flex flex-col gap-1">
                {[
                    {
                        name: "github",
                        url: "https://github.com/Varun-Chakraborty",
                        logo: "/github-mark.png",
                        username: "Varun-Chakraborty"
                    },
                    {
                        name: "x",
                        url: "https://x.com/skriptinveek",
                        logo: "/x-logo-black.png",
                        username: "skriptinveek"
                    },
                    {
                        name: "linkedin",
                        url: "https://www.linkedin.com/in/varunchakraborty/",
                        logo: "/LI-In-Bug.png",
                        username: "Varun Chakraborty"
                    }
                ].map((item) => (
                    <Button key={item.name} variant="link" className="justify-start w-fit" asChild>
                        <Link href={item.url} key={item.name} className="flex gap-2 items-center" target="_blank">
                            <Image
                                src={item.logo}
                                width={15}
                                height={15}
                                alt={item.name}
                                className={cn({"dark:invert": item.name !== "linkedin"})}
                            />
                            <span>{item.username}</span>
                        </Link>
                    </Button> 
                ))}
            </div>
          </div>
          <div className="w-full text-center">
            &copy;{new Date().getFullYear()} Varun Chakraborty<br />All rights reserved
          </div>
        </footer>
    )
}