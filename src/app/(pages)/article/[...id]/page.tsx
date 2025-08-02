"use client";
import { useParams } from "next/navigation";
import { useGetArticleByIdQuery } from "@/app/rtkQuery/services/guardianApi";
import FirstArticle from "@/app/components/molecules/FirstArticle";
import parse from "html-react-parser";
import Loader from "@/app/components/atoms/Loader";

const ArticleDetails = () => {
  const params = useParams();
  const idParts = params?.id as string[]; // this is now an array from catch-all [...id]
  const fullId = decodeURIComponent(idParts.join("/")); // re-join the path

  const { data, isLoading } = useGetArticleByIdQuery(fullId);

  const article = data?.response?.content;
  return (
    <div className="py-10">
      <div className="container mx-auto">
        {isLoading ? (
          <Loader/>
        ) : (
          <FirstArticle
            urlToImage={article?.fields?.thumbnail}
            name={article?.sectionName}
            title={article?.webTitle}
            id={article?.id}
            publishedAt={article?.webPublicationDate}
            author={article?.fields?.byline}
          />
        )}
        <div className="py-5">
          <p>{!isLoading && parse(`${article?.fields?.body}`)}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
