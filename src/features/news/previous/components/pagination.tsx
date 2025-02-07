import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface IPaginationProps {
  page: number;
  totalPages: number;
  handlePagination: (page: number) => void;
  handleNextPage: () => void;
  handlePrevPage: () => void;
}

export const Pagination = ({
  page,
  totalPages,
  handlePagination,
  handleNextPage,
  handlePrevPage,
}: IPaginationProps) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5; // Số trang tối đa hiển thị
    const startPage = Math.max(1, page - 2);
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (startPage > 1) pages.unshift("...");
    if (endPage < totalPages) pages.push("...");

    return pages;
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full text-white"
        onClick={() => handlePagination(page - 1)}
        disabled={page === 1}
      >
        <ChevronLeft className="size-5" />
      </Button>

      {getPageNumbers().map((num, index) =>
        typeof num === "number" ? (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className={`rounded-full ${
              num === page
                ? "bg-gradient-to-r from-[#E6CAA4]/[24%] to-[#E9B84E]/[24%] text-black"
                : "text-white"
            }`}
            onClick={() => handlePagination(num)}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E6CAA4] to-[#E9B84E]">
              {num}
            </span>
          </Button>
        ) : (
          <span key={index} className="text-white mx-2">
            {num}
          </span>
        )
      )}

      <Button
        variant="ghost"
        size="icon"
        className="rounded-full text-white"
        onClick={() => handlePagination(page + 1)}
        disabled={page === totalPages}
      >
        <ChevronRight className="size-5" />
      </Button>
    </div>
  );
};
