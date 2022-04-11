/* eslint-disable array-callback-return */
import { FC } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Link } from "remix";

interface PaginationProps {
  size: number;
  page: number;
}

export const Pagination: FC<PaginationProps> = ({ size, page }) => {
  return (
    <div className="flex justify-center items-center w-full my-4">
      {page !== 1 && (
        <Link
          to={`/blog?page=${page - 1}`}
          className="p-2 flex items-center justify-center leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 select-none rounded-l-md"
        >
          <ChevronLeftIcon className="w-5 h-5" />
          <span>Anterior</span>
        </Link>
      )}
      {Array.from({ length: size }).map((_, i) => {
        if (page === i + 1) {
          return (
            <div
              key={`pagination-${i}`}
              className="py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-gray-300 select-none rounded-l-md"
            >
              {page}
            </div>
          );
        }
      })}
      <Link
        to={`/blog?page=${page + 1}`}
        className="p-2 flex items-center justify-center leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 select-none rounded-r-md"
      >
        <span>Siguiente</span>
        <ChevronRightIcon className="w-5 h-5" />
      </Link>
    </div>
  );
};
