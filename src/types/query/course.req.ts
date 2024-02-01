export interface Category {
  id: string;
  slug: string;
  title: string;
}

export interface Tag {
  id: string;
  slug: string;
  title: string;
}

export interface Instructor {
  id: string;
  publicName: string;
  image50: string;
  image100: string;
  jobTitle: string;
  username: string;
}

export interface Item {
  id: string;
  slug: string;
  title: string;
  image1x: string;
  image2x: string;
  image3x: string;
  imageOriginal: string;
  state: string;
  category: Category;
  tags: Tag[];
  instructors: Instructor[];
}

export interface GetCourseList {
  page: number;
  pageSize: number;
  total: number;
  items: Item[];
}
