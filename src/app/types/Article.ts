export type articleProps = {
  author?: string;
  content?: string;
  description?: string;
  publishedAt?: string;
  id: string;
  name: string;
  title: string;
  url?: string;
  urlToImage: string;
};

export type articleAPiProps = {
  author?: string;
  content?: string;
  description?: string;
  publishedAt?: string;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url?: string;
  urlToImage: string;
};
