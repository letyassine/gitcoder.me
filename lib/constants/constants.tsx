import { JobExprienceData, ProjectData } from "@/types/types";
import { MdOutlineEmail } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { RxDiscordLogo } from "react-icons/rx";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiNodedotjs,
  SiGraphql,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiReactquery,
  SiTailwindcss,
  SiJest,
  SiTestinglibrary,
  SiStorybook,
  SiGit,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiWebpack,
  SiFigma,
  SiCss,
  SiCypress,
  SiPostman,
} from "@icons-pack/react-simple-icons";

export const TECH_STACK = [
  { name: "figma", logo: () => <SiFigma className="size-6" /> },
  { name: "react", logo: () => <SiReact className="size-6" /> },
  { name: "nextjs", logo: () => <SiNextdotjs className="size-6" /> },
  { name: "redux", logo: () => <SiRedux className="size-6" /> },
  { name: "typescript", logo: () => <SiTypescript className="size-6" /> },
  { name: "cypress", logo: () => <SiCypress className="size-6" /> },
  { name: "tailwindcss", logo: () => <SiTailwindcss className="size-6" /> },
  { name: "bitbucket", logo: () => <SiBitbucket className="size-6" /> },
  { name: "storybook", logo: () => <SiStorybook className="size-6" /> },
  { name: "html5", logo: () => <SiHtml5 className="size-6" /> },
  { name: "nodejs", logo: () => <SiNodedotjs className="size-6" /> },
  { name: "webpack", logo: () => <SiWebpack className="size-6" /> },
  { name: "graphql", logo: () => <SiGraphql className="size-6" /> },
  { name: "gitlab", logo: () => <SiGitlab className="size-6" /> },
  { name: "jest", logo: () => <SiJest className="size-6" /> },
  { name: "css", logo: () => <SiCss className="size-6" /> },
  { name: "tanstack", logo: () => <SiReactquery className="size-6" /> },
  { name: "git", logo: () => <SiGit className="size-6" /> },
  { name: "javascript", logo: () => <SiJavascript className="size-6" /> },
  { name: "postman", logo: () => <SiPostman className="size-6" /> },
  { name: "github", logo: () => <SiGithub className="size-6" /> },
  {
    name: "react-testing-library",
    logo: () => <SiTestinglibrary className="size-6" />,
  },
];

export const PROJECTS: ProjectData[] = [
  {
    title: "Opencut",
    image: "/projects/opencut.jpg",
    link: "https://opencut.app",
    tags: [
      { label: "NextJS", color: "#F1F5F9" },
      { label: "TailwindCSS", color: "#E0F2FE" },
      { label: "Open Source", color: "#D1FAE5" },
    ],
  },
  {
    title: "Gitcoders",
    image: "/projects/gitcoders.jpg",
    link: "https://gitcoders.dev",
    tags: [
      { label: "NextJS", color: "#F1F5F9" },
      { label: "TailwindCSS", color: "#E0F2FE" },
      { label: "UI/UX", color: "#EDE9FE" },
    ],
  },
  {
    title: "HTMLSemanticRecipes",
    image: "/projects/vscode.jpg",
    link: "https://marketplace.visualstudio.com/items?itemName=gitcoder.vsc-html-semantic-recipes",
    tags: [
      { label: "VSCode", color: "#DBEAFE" },
      { label: "HTML", color: "#FED7AA" },
      { label: "Open Source", color: "#D1FAE5" },
    ],
  },
];

export const CONTACT_LINKS = [
  {
    icon: () => <MdOutlineEmail />,
    label: "Email",
    link: "yassinehaimouch@proton.me",
    color: "#F8E3FF",
  },
  {
    icon: () => <SlSocialLinkedin />,
    label: "Linkedin",
    link: "https://linkedin.com/in/letyassine",
    color: "#E3F8FF",
  },
  {
    icon: () => <FaXTwitter />,
    label: "Twitter",
    link: "https://x.com/thegitcoder",
    color: "#F0F0F0",
  },
  {
    icon: () => <FiYoutube />,
    label: "YouTube",
    link: "https://youtube.com/@thegitcoder",
    color: "#FFE3E3",
  },
  {
    icon: () => <FiInstagram />,
    label: "Instagram",
    link: "https://instagram.com/gitcoder",
    color: "#FFE3F8",
  },
  {
    icon: () => <RxDiscordLogo />,
    label: "Discord",
    link: "https://discord.com/invite/5TnK7wuzw6",
    color: "#E3E8FF",
  },
];

export const PREVIOUS_JOBS: JobExprienceData[] = [
  {
    title: "Senior Frontend Developer",
    companyName: "Codia",
    companyLink: "https://www.codiadev.it/",
    location: "Remote",
    date: "Apr 2024 – Nov 2024",
  },
  {
    title: "Full–Stack Instructor",
    companyName: "GoMyCode",
    companyLink: "https://gomycode.com/",
    location: "Casablanca",
    date: "Oct 2023 – Apr 2024",
  },
  {
    title: "Frontend Developer",
    companyName: "Blocks BV",
    companyLink: "https://www.blocxs.one/",
    location: "Remote",
    date: "Jul 2023 – Oct 2023",
  },
];

export const CURRENT_JOBS: JobExprienceData[] = [
  {
    title: "Senior Frontend Developer",
    companyName: "ValueEQ",
    companyLink: "https://www.valueeq.com/",
    location: "Remote",
    date: "Nov 2024 – Present",
  },
  {
    title: "Public speaker & Content creator",
    date: "2021 – Present",
  },
];
