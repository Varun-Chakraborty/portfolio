import { Cpu, Database, Layers, PenTool, Server, Wrench } from "lucide-react";

export const socialLinks = [
  {
    name: "github",
    url: "https://github.com/Varun-Chakraborty",
    logo: "/github-mark.png",
    username: "Varun-Chakraborty",
  },
  {
    name: "x",
    url: "https://x.com/skriptinveek",
    logo: "/x-logo-black.png",
    username: "skriptinveek",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/varunchakraborty/",
    logo: "/LI-In-Bug.png",
    username: "Varun Chakraborty",
  },
];

export const projects = [
  {
    title: "BlogPost",
    description: "A simple blog app made with React.js.",
    link: "https://blog-post-seven-self.vercel.app/",
    image: "/blogpost.png",
    repo: "https://github.com/Varun-Chakraborty/blog-post", // Add this
    tags: ["React", "Next.js", "Tailwind CSS"], // Add this
  },
  // Add your next project here!
  // {
  //   title: "Project Two",
  //   description: "Description for the second project.",
  //   link: "https://example.com",
  //   image: "/project-two.png",
  // },
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
  // New Category for Low-Level Programming
  {
    category: "Low-Level & Systems Programming",
    narrative: "I'm fascinated by how software interacts with hardware. I'm currently designing and building a miniature CPU and its assembler using Rust to deepen my understanding of computer architecture.",
    skills: ["Rust"],
    icon: Cpu,
  },
];
