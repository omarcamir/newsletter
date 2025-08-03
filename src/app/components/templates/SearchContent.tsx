"use client";
import { useEffect, useRef, useState } from "react";
import Article from "../molecules/Article";
import Pagination from "../molecules/Pagination";
import Loader from "../atoms/Loader";
import { useSearchParams } from "next/navigation";
import { useSearchArticlesQuery } from "@/app/rtkQuery/services/guardianApi";
import { guardianApiProps } from "@/app/types/Article";
import DataNotFound from "../atoms/DataNotFound";
import gsap from "gsap";

const SearchContent = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [page, setPage] = useState(1);

  const {
    data: searchData,
    isLoading: searchLoading,
    error,
  } = useSearchArticlesQuery({ q: query, page });

  const articleRefs = useRef<Array<HTMLDivElement | null>>([]);

  // GSAP animation
  useEffect(() => {
    if (!searchLoading && searchData?.response?.results?.length > 0) {
      // Animate after DOM is updated
      requestAnimationFrame(() => {
        gsap.fromTo(
          articleRefs.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
          }
        );
      });
    }
  }, [searchLoading, searchData]);

  return (
    <div className="py-10">
      <div className="container mx-auto">
        {searchLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(() => {
              // Reset refs before mapping
              articleRefs.current = [];
              return searchData?.response.results.map(
                (article: guardianApiProps, index: number) => (
                  <div
                    className="col-span-1"
                    key={article.id}
                    ref={(el) => {
                      articleRefs.current[index] = el;
                    }}
                  >
                    <Article
                      urlToImage={article.fields.thumbnail}
                      name={article.sectionName}
                      title={article.webTitle}
                      url={`/article/${encodeURIComponent(article.id)}`}
                      publishedAt={article.webPublicationDate}
                    />
                  </div>
                )
              );
            })()}
          </div>
        )}
        {((searchData?.response.results.length === 0 && !searchLoading) ||
          error) && <DataNotFound />}
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={searchData?.response.pages}
        />
      </div>
    </div>
  );
};

export default SearchContent;
