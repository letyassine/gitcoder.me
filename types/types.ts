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
