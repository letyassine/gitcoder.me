export interface Tag {
  label: string;
  color: string;
}

export interface ProjectData {
  title: string;
  image: any;
  link: string;
  tags: Tag[];
}

export interface JobExprienceData {
  title: string;
  date: string;
  companyName?: string;
  companyLink?: string;
  location?: string;
}

export interface IBook {
  title: string;
  coverUrl: any;
  spineBackgroundColor: string;
  spineForegroundColor: string;
}
