"use client"
import { useState } from 'react'
import Article from '../molecules/Article';
import Pagination from '../molecules/Pagination';
import Loader from '../atoms/Loader';
import { useSearchParams } from 'next/navigation';
import { useSearchArticlesQuery } from '@/app/rtkQuery/services/guardianApi';
import { guardianApiProps } from '@/app/types/Article';

const SearchContent = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [page, setPage] = useState(1);

  const { data: searchData, isLoading: searchLoading } = useSearchArticlesQuery(
    { q: query, page }
  );

  return (
    <div className="py-10">
      <div className="container mx-auto">
        {searchLoading ? (
          <Loader/>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {searchData?.response.results.map((article: guardianApiProps) => (
              <Article
                key={article.id}
                urlToImage={article.fields.thumbnail}
                name={article.sectionName}
                title={article.webTitle}
                url={`/article/${encodeURIComponent(article.id)}`}
                publishedAt={article.webPublicationDate}
              />
            ))}
          </div>
        )}
        <Pagination page={page} setPage={setPage} totalPages={searchData?.response.pages} />
      </div>
    </div>
  );
};

export default SearchContent