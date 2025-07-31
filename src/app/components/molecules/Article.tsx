import { Link } from "lucide-react";
import Image from "next/image";
import Badge from "../atoms/Badge";
const Article = () => {
  return (
    <div className="grid grid-cols-3 gap-2 h-full">
      <div className="col-span-1 h-20 w-20">
        <Image
          src="/images/first-article.png"
          alt="First Article"
          width={500}
          height={500}
          className="!w-full !h-full object-cover hover:scale-110 duration-500 transition-transform "
        />
      </div>
      <div className="col-span-2 flex flex-col gap-2 justify-between">
          <Badge title="Primary" category="primary" />
        <Link
          href="/article/first-article"
          className="text-xl font-bold hover:text-gray-400 hover:underline duration-200 transition-all"
        >
          First Article
        </Link>
        <div className=" text-gray-400 capitalize">
          <span>May 1, 2023</span>
        </div>
      </div>
    </div>
  );
};

export default Article;
