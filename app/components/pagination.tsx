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
          className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white flex items-center"
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
              className={
                "py-2 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 select-none " +
                (page === 1 ? " rounded-l-lg" : "")
              }
            >
              {page}
            </div>
          );
        }
      })}
      <Link
        to={`/blog?page=${page + 1}`}
        className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white flex items-center"
      >
        <span>Siguiente</span>
        <ChevronRightIcon className="w-5 h-5" />
      </Link>
    </div>
  );
};
