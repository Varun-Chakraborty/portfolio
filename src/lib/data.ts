import { Cpu, Database, Layers, PenTool, Server, Wrench, Code, Rocket, BrainCircuit } from "lucide-react";

export const socialLinks = [
  {
    name: "github",
    url: "https://github.com/Varun-Chakraborty",
    username: "Varun-Chakraborty",
  },
  {
    name: "x",
    url: "https://x.com/skriptinveek",
    username: "skriptinveek",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/varun-chakraborty-90a1622b4/",
    username: "Varun Chakraborty",
  },
  {
    name: "email",
    url: "mailto:varunchakraborty9526@gmail.com",
    username: "varunchakraborty9526@gmail.com",
  },
];

export const projects = [
  {
    title: "BlogPost",
    description: "A simple blog app made with React.js.",
    link: "https://blog-post-seven-self.vercel.app/",
    image: "/blogpost.png",
    repo: "https://github.com/Varun-Chakraborty/blog-post",
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "CPU Emulator & Assembler",
    description: "A CPU emulator and its corresponding assembler, built from scratch in Rust. This project simulates the fetch-decode-execute cycle of a processor, translating a custom assembly language into bytecode for execution within the virtual machine.",
    image: "/compiler.png",
    repo: "https://github.com/Varun-Chakraborty/Compiler",
    tags: ["Rust", "Emulation", "Systems Programming", "Computer Architecture"],
  },
];

export const skillNarrative = [
  {
    category: "Building User Interfaces",
    narrative: "I create intuitive and responsive user experiences using a modern frontend stack. My focus is on writing clean, reusable components and ensuring pixel-perfect design implementation.",
    skills: ["React.js", "Next.js", "TypeScript", "HTML", "CSS", "TailwindCSS"],
    icon: PenTool,
  },
  {
    category: "Powering Servers & APIs",
    narrative: "For the backend, I build efficient and scalable RESTful APIs. I focus on creating a solid foundation that is secure, fast, and ready to grow with the application's needs.",
    skills: ["Node.js", "Express.js"],
    icon: Server,
  },
  {
    category: "Tools & DevOps",
    narrative: "I rely on a robust set of tools for version control, collaboration, and deployment. These practices ensure a smooth and reliable development lifecycle from start to finish.",
    skills: ["Git", "GitHub", "Docker"],
    icon: Wrench,
  },
  {
    category: "Data Management & Storage",
    narrative: "I have experience designing database schemas and writing efficient queries for both SQL and NoSQL databases, ensuring data integrity and performance.",
    skills: ["MongoDB", "PostgreSQL", "Prisma", "Redis"],
    icon: Database,
  },
  {
    category: "State Management",
    narrative: "For complex client-side applications, I'm experienced in managing global state with Redux, ensuring a predictable and maintainable data flow throughout the app.",
    skills: ["Redux"],
    icon: Layers,
  },
  {
    category: "Low-Level & Systems Programming",
    narrative: "I'm fascinated by how software interacts with hardware. I'm currently designing and building a miniature CPU and its assembler using Rust to deepen my understanding of computer architecture.",
    skills: ["Rust"],
    icon: Cpu,
  },
];

export const timeline = [
  {
    icon: Code,
    title: "Foundation in Code",
    description: "My journey began with a strong foundation in HTML, CSS, and JavaScript, where I honed my skills in bringing static designs to life on the web.",
  },
  {
    icon: Rocket,
    title: "Expanding to Backend",
    description: "Driven by a desire to build complete solutions, I delved into backend technologies like Node.js and Express, learning to create robust and scalable server-side applications.",
  },
  {
    icon: BrainCircuit,
    title: "Full-Stack Development",
    description: "Today, I combine my front-end and back-end expertise to build seamless, full-stack experiences, always with a keen eye on performance and user-centric design.",
  },
  {
    icon: Cpu,
    title: "Systems Programming",
    description: "I'm currently designing and building a miniature CPU and its assembler using Rust to deepen my understanding of computer architecture.",
  }
];
