import { Link } from "@remix-run/react";

export interface PaginationProps {
	page: number;
	pageSize: number;
	route?: string;
}

export function Pagination({ page, pageSize, route }: PaginationProps): JSX.Element {
	return (
		<div className="flex mb-10 justify-center">
			{page !== 1 && (
				<Link
					to={`${route ?? "/blog"}?page=${page - 1}`}
					className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
				>
					Anterior
				</Link>
			)}

			<button
				className="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 pointer-events-none select-none"
				tabIndex={-1}
			>
				{page}
			</button>

			{page !== pageSize && (
				<Link
					to={`${route ?? "/blog"}?page=${page + 1}`}
					className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
				>
					Siguiente
				</Link>
			)}
		</div>
	);
}
