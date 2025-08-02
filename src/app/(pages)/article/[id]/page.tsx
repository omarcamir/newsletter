import FirstArticle from '@/app/components/molecules/FirstArticle'
import React from 'react'

const ArticleDetails = () => {
  return (
    <div className='py-10'>
      {/* <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
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
      </div> */}
    </div>
  )
}

export default ArticleDetails