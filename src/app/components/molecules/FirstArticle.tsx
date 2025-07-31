import { Link } from "lucide-react";
import Image from "next/image";
import Badge from "../atoms/Badge";

const FirstArticle = () => {
  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="min-h-full">
        <Image
          src="/images/first-article.png"
          alt="First Article"
          width={500}
          height={500}
          className="relative !w-full !h-full object-cover hover:scale-110 duration-500 transition-transform "
        />
        <div className="absolute top-5 left-0 z-10">
          <Badge title="Primary" category="primary" />
        </div>
      </div>
      <Link
        href="/article/first-article"
        className="text-xl font-bold hover:text-gray-400 hover:underline duration-200 transition-all"
      >
        First Article
      </Link>
      <div className="flex gap-2 justify-between text-gray-400 capitalize">
        <span>By</span>
        <span>May 1, 2023</span>
        <span>5 min read</span>
      </div>
    </div>
  );
};

export default FirstArticle;
