import { ProjectData } from "@/types/types";
import OpenCutImage from "/public/projects/opencut.jpg";
import GitCodersImage from "/public/projects/gitcoders-v2.png";
import MoreprojectsImage from "/public/projects/moreprojects.jpg";
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
    link: "https://v2.gitcoder.me",
    tags: [
      { label: "NextJS", color: "#F1F5F9" },
      { label: "TailwindCSS", color: "#E0F2FE" },
      { label: "UI/UX", color: "#EDE9FE" },
      { label: "Open Source", color: "#D1FAE5" },
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
  {
    title: "See All Projects",
    image: MoreprojectsImage,
    link: "https://github.com/letyassine?tab=repositories",
    target: "_blank",
    cta: "View More",
  },
];

export default PROJECTS;
