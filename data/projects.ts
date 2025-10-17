import { ProjectData } from "@/types/types";
import OpenCutImage from "/public/projects/opencut.jpg";
import GitCodersImage from "/public/projects/gitcoders.jpg";
import VsCodeImage from "/public/projects/vscode.jpg";

const PROJECTS: ProjectData[] = [
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
    title: "Gitcoders",
    image: GitCodersImage,
    link: "https://v1.gitcoders.dev",
    tags: [
      { label: "NextJS", color: "#F1F5F9" },
      { label: "TailwindCSS", color: "#E0F2FE" },
      { label: "UI/UX", color: "#EDE9FE" },
    ],
  },
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
];

export default PROJECTS;
