export type articleProps = {
  author?: string;
  content?: string;
  description?: string;
  publishedAt?: string;
  id?: string;
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

export type guardianApiProps = {
  id: number;
  sectionId: number;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  fields: {
    thumbnail: string;
  };
} 
