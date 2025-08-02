"use client";
import FirstArticle from "@/app/components/molecules/FirstArticle";
import { useTopHeadlinesQuery } from "@/app/rtkQuery/services/newsApi";
import { articleAPiProps } from "@/app/types/Article";
import { useParams } from "next/navigation";

const NewsDetails = () => {
  const { data: TopUSData, isLoading: TopUSLoading } =
    useTopHeadlinesQuery("us");

  const {name} = useParams();
  const decodedTitle = decodeURIComponent(name as string);
  const filteredArticle = TopUSData?.articles?.filter(
    (article: articleAPiProps) => article.title === decodedTitle
  );
  return (
    <div className="py-10">
      <div className="container mx-auto">
        {TopUSLoading ? (
          <p>Loading...</p>
        ) : (
          <FirstArticle
            urlToImage={filteredArticle?.[0]?.urlToImage}
            name={filteredArticle?.[0]?.source.name}
            title={filteredArticle?.[0]?.title}
            id={filteredArticle?.[0]?.title}
            publishedAt={filteredArticle?.[0]?.publishedAt}
            author={filteredArticle?.[0]?.author}
          />
        )}
        <div className="py-5">
          <p>{filteredArticle?.[0]?.content}</p>
          <p>{filteredArticle?.[0]?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
