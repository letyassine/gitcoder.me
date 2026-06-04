import { ProjectData } from "@/types/types";
import OpenCutImage from "/public/projects/opencut.jpg";
import GitCodersImage from "/public/projects/gitcoders-v2.png";
import GitCodersV1Image from "/public/projects/gitcoders-v1.jpg";
import VsCodeImage from "/public/projects/vscode.jpg";

const PROJECTS: ProjectData[] = [
  {
    title: "HTMLSemanticRecipes",
    image: VsCodeImage,
    link: "https://marketplace.visualstudio.com/items?itemName=gitcoder.vsc-html-semantic-recipes",
    tags: [
      { label: "VSCode", color: "#DBEAFE" },
      { label: "HTML", color: "#FED7AA" },
      { label: "Open Source", color: "#D1FAE5" },
    ],
  },
  {
    title: "Opencut",
    image: OpenCutImage,
    link: "https://opencut.app",
    tags: [
      { label: "NextJS", color: "#F1F5F9" },
      { label: "TailwindCSS", color: "#E0F2FE" },
      { label: "Open Source", color: "#D1FAE5" },
    ],
  },
  {
    title: "Gitcoders v2",
    image: GitCodersImage,
    link: "https://v2.gitcoder.me",
    tags: [
      { label: "NextJS", color: "#F1F5F9" },
      { label: "TailwindCSS", color: "#E0F2FE" },
      { label: "UI/UX", color: "#EDE9FE" },
      { label: "Open Source", color: "#D1FAE5" },
    ],
  },
  {
    title: "Gitcoders v1",
    image: GitCodersV1Image,
    link: "https://v1.gitcoder.me",
    tags: [
      { label: "NextJS", color: "#F1F5F9" },
      { label: "TailwindCSS", color: "#E0F2FE" },
      { label: "UI/UX", color: "#EDE9FE" },
    ],
  },
];

export default PROJECTS;
