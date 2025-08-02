"use client";

import Loader from "@/app/components/atoms/Loader";
import FirstArticle from "@/app/components/molecules/FirstArticle";
import { useTopHeadlinesQuery } from "@/app/rtkQuery/services/newsApi";
import { articleAPiProps } from "@/app/types/Article";
import { useParams } from "next/navigation";

const NewsDetails = () => {
  const { name } = useParams();
  const titleFromUrl = name as string;


  const { data: TopUSData, isLoading: TopUSLoading } = useTopHeadlinesQuery({ country: "us" });

  const filteredArticle = TopUSData?.articles?.find(
  (article: articleAPiProps) =>
    encodeURIComponent(article.title.trim().toLowerCase()) === titleFromUrl.toLowerCase()
);


  return (
    <div className="py-10">
      <div className="container mx-auto">
        {TopUSLoading ? (
          <Loader />
        ) : (
          <FirstArticle
            urlToImage={filteredArticle?.urlToImage}
            name={filteredArticle?.source.name}
            title={filteredArticle?.title}
            id={filteredArticle?.title}
            publishedAt={filteredArticle?.publishedAt}
            author={filteredArticle?.author}
          />
        )}
        <div className="py-5">
          <p>{filteredArticle?.content}</p>
          <p>{filteredArticle?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
