import React from "react";
import Button from "../atoms/Button";

type PaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
};

const Pagination = ({ page, setPage, totalPages }: PaginationProps) => {
  return (
    <div className="flex gap-4 items-center justify-end mt-8 border-t border-gray-200 pt-3">
      <Button
        onClick={() => setPage((p) => Math.max(p - 1, 1))}
        title="Previous"
        disabled={page === 1}
      />
      <span className="px-4 py-2">{page}/{totalPages}</span>

      <Button
        onClick={() => setPage((p) => p + 1)}
        title="Next"
        disabled={page === totalPages}
      />
    </div>
  );
};

export default Pagination;
