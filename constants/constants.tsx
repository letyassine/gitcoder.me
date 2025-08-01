import { ProjectData } from "@/types/types";
import { MdOutlineEmail } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { RxDiscordLogo } from "react-icons/rx";

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
