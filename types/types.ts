export interface Tag {
  label: string;
  color: string;
}

export interface ProjectData {
  title: string;
  image: string;
  link: string;
  tags: Tag[];
}

export interface JobExprienceData {
  title: string;
  date: string;
  companyName: string;
  companyLink: string;
  location: string;
}
