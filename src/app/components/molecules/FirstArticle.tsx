import Image from "next/image";
import Badge from "../atoms/Badge";
import { articleProps } from "@/app/types/Article";
import Link from "next/link";
import useFormattedDate from "@/app/hooks/useFormattedDate";

const FirstArticle = ({
  urlToImage,
  name,
  title,
  url,
  publishedAt,
  author,
}: articleProps) => {
  const { date, time } = useFormattedDate(publishedAt!);
  return (
    <div className="flex flex-col gap-2 h-full pb-5">
      {/* Image container */}
      <div className="relative w-full h-[95%] overflow-hidden rounded-md">
        <Image
          src={urlToImage}
          alt={title}
          width={500}
          height={500}
          unoptimized
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-5 left-0 z-10">
          <Badge title={name} category={name} />
        </div>
      </div>

      {/* Article info */}
      <div>
        {
          url ?
          <Link
          href={url!}
          className="text-xl font-bold hover:text-gray-400 hover:underline duration-200 transition-all"
        >
          {title}
        </Link>
        :
        <h2 className="text-xl font-bold">{title}</h2>
      }
        <div className="flex justify-between text-gray-400 capitalize text-sm mt-1">
          {author && <span>By: {author}</span>}
          <span>{date} at {time}</span>
        </div>
      </div>
    </div>
  );
};

export default FirstArticle;
