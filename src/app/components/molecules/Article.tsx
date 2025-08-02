
import Image from "next/image";
import Badge from "../atoms/Badge";
import { articleProps } from "@/app/types/Article";
import Link from "next/link";
import useFormattedDate from "@/app/hooks/useFormattedDate";
const Article = ({
  urlToImage,
  name,
  title,
  url,
  publishedAt,
}: articleProps) => {
      const { date, time } = useFormattedDate(publishedAt!);
    
  return (
    <div className="grid grid-cols-3 gap-2 h-full">
      <div className="col-span-1 h-28 md:w-28 xl:w-32 overflow-hidden rounded-md">
        <Image
          src={urlToImage || "/brokenimage.jpg"}
          alt={title}
          width={500}
          height={700}
          unoptimized
          className="!w-full !h-full object-cover hover:scale-110 duration-500 transition-transform z-0 shadow-sm"
        />
      </div>
      <div className="col-span-2 flex flex-col gap-2 justify-between">
        <div>
          <Badge title={name} category={name} />
        </div>
        <Link
          href={url!}
          className="text-md xl:text-xl font-bold hover:text-gray-400 hover:underline duration-200 transition-all"
        >
          {title?.length > 35 ? title.slice(0, 35) + "..." : title}
        </Link>
        <div className=" text-gray-400 capitalize">
          <span>{date} at {time}</span>
        </div>
      </div>
    </div>
  );
};

export default Article;
