import Loader from "@/app/components/atoms/Loader";
import SearchContent from "@/app/components/templates/SearchContent";
import { Suspense } from "react";

const Search = () => {
  return (
    <Suspense fallback={<Loader />}>
      <SearchContent />
    </Suspense>
  );
};

export default Search;
