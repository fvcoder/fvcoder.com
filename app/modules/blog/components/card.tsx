import { Link } from "@remix-run/react";

import type { blogInfo } from "../types";

export function CardBlog({ x }: { x: blogInfo }) {
	return (
		<article className="shadow p-4 text-gray-50 border border-gray-200 rounded-lg">
			<Link to={x.to}>
				<img className="rounded-lg aspect-video object-cover" src={x.img} alt={x.imgAlt} />
			</Link>
			<h2 className="text-gray-900 font-bold text-2xl my-2">
				<Link to={x.to}>{x.title}</Link>
			</h2>
			<p className="text-gray-500 font-light">{x.description}</p>
		</article>
	);
}
