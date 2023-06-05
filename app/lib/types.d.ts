export type Post = {
  title: string;
  slug: string;
  tags: string[];
  description: string;
  body: string;
  cover: string;
  createdDate: Date;
  lastModified?: number;
  views?: number;
};
