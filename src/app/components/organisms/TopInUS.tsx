"use client";
import { useTopHeadlinesQuery } from "@/app/rtkQuery/services/newsApi";
import { articleAPiProps } from "@/app/types/Article";
import Article from "../molecules/Article";
import FirstArticle from "../molecules/FirstArticle";
import Loader from "../atoms/Loader";
import DataNotFound from "../atoms/DataNotFound";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const TopInUS = () => {
  const {
    data: TopUSData,
    isLoading: TopUSLoading,
    error,
  } = useTopHeadlinesQuery({
    country: "us",
  });
  // console.log("data", TopUSData);
  const headingRef = useRef(null);
  const firstArticleRef = useRef(null);
  const articleRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (!TopUSLoading && TopUSData?.articles?.length > 0) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
      gsap.fromTo(
        firstArticleRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.3, ease: "power3.out" }
      );
      gsap.fromTo(
        articleRefs.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.2,
          delay: 0.5,
          ease: "power3.out",
        }
      );
    }
  },[TopUSLoading, TopUSData]);
  return (
    <section className="container mx-auto py-10">
      <h2
        ref={headingRef}
        className="text-xl md:text-2xl xl:text-3xl font-bold mb-3"
      >
        Top headlines in the US
      </h2>
      <div
        ref={firstArticleRef}
        className="grid grid-cols-1 lg:grid-cols-5 gap-6"
      >
        <div
          className="col-span-1 lg:col-span-3"
          key={
            TopUSData?.articles[0]?.source.id + TopUSData?.articles[0]?.title
          }
        >
          {TopUSLoading ? (
            <Loader />
          ) : (
            <FirstArticle
              urlToImage={TopUSData?.articles[0]?.urlToImage}
              name={TopUSData?.articles[0]?.source.name}
              title={TopUSData?.articles[0]?.title}
              id={TopUSData?.articles[0]?.title}
              url={`/news/${TopUSData?.articles[0]?.title}`}
              publishedAt={TopUSData?.articles[0]?.publishedAt}
              author={TopUSData?.articles[0]?.author}
            />
          )}
        </div>
        <div className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          {TopUSLoading ? (
            <Loader />
          ) : (
            TopUSData?.articles
              .slice(1, 6)
              .map((article: articleAPiProps, index: number) => (
                <div
                  className="col-span-1"
                  key={article?.source.id + article?.title}
                  ref={(el) => {
                    articleRefs.current[index] = el;
                  }}
                >
                  <Article
                    urlToImage={article.urlToImage}
                    name={article?.source.name}
                    title={article?.title}
                    url={`/news/${encodeURIComponent(article.title.trim())}`}
                    publishedAt={article.publishedAt}
                  />
                </div>
              ))
          )}
        </div>
      </div>
      {(TopUSData?.articles?.length === 0 || error) && <DataNotFound />}
    </section>
  );
};

export default TopInUS;
