import { ProjectData } from "@/types/types";

const PROJECTS: ProjectData[] = [
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

export default PROJECTS;
