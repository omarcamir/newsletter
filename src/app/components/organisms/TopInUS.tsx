"use client";
import { useTopHeadlinesQuery } from "@/app/rtkQuery/services/newsApi";
import { articleAPiProps } from "@/app/types/Article";
import Article from "../molecules/Article";
import FirstArticle from "../molecules/FirstArticle";

const TopInUS = () => {
  const { data: TopUSData, isLoading: TopUSLoading } =
    useTopHeadlinesQuery("us");
  console.log("data", TopUSData);
  return (
    <section className="container mx-auto py-10">
      <h2 className="text-xl md:text-2xl xl:text-3xl font-bold mb-3">Top headlines in the US</h2>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div
          className="col-span-1 lg:col-span-3"
          key={
            TopUSData?.articles[0]?.source.id + TopUSData?.articles[0]?.title
          }
        >
          <FirstArticle
            urlToImage={TopUSData?.articles[0]?.urlToImage}
            name={TopUSData?.articles[0]?.source.name}
            title={TopUSData?.articles[0]?.title}
            id={TopUSData?.articles[0]?.source.id}
            publishedAt={TopUSData?.articles[0]?.publishedAt}
            author={TopUSData?.articles[0]?.author}
          />
        </div>
        <div className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          {TopUSLoading ? (
          <p>Loading...</p>
        ) : (
          TopUSData?.articles.map((article: articleAPiProps, index: number) =>
            index === 0 ? null : index > 5 ? null : (
              <div
                className="col-span-1"
                key={article?.source.id + article?.title}
              >
                <Article
                  key={article?.source.id + article?.title}
                  urlToImage={article.urlToImage}
                  name={article?.source.name}
                  title={article?.title}
                  id={article?.source.id}
                  publishedAt={article.publishedAt}
                />
              </div>
            )
          )
        )}
        </div>
      </div>
    </section>
  );
};

export default TopInUS;
