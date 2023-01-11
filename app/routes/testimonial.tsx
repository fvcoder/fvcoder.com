import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { Pagination } from "flowbite-react";

import HeroImg from "~/assets/hero-testimonial.jpg";
import { testimonialGetPage } from "~/modules/testimonial";
import type { testimonialPage } from "~/modules/testimonial/types";
import { getNumberPage } from "~/util";

export const loader: LoaderFunction = async ({ request }) => {
	return json<testimonialPage>(
		await testimonialGetPage({ page: getNumberPage(new URL(request.url)), pageSize: 12 })
	);
};

export default function TestimonialPage() {
	const testimonial = useLoaderData<testimonialPage>();
	const navigation = useNavigate();

	function onPageChange(a: number) {
		navigation(`/testimonial?page=${a}`);
	}

	return (
		<>
			<header className="container px-4 mx-auto flex flex-col-reverse md:flex-row items-center pt-0 md:pt-12 pb-12">
				<div className="w-full md:w-2/4 text-center md:text-left">
					<h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">🤠 Testimonials</h1>
					<p className="text-lg lg:text-xl text-gray-500 mb-2">Thanks to all</p>
				</div>
				<div className="w-full md:w-2/4">
					<div className="py-12">
						<img
							src={HeroImg}
							alt="Foto de Chris Montgomery en Unsplash"
							className="object-cover aspect-square rounded-xl shadow mx-auto w-2/3 md:w-3/5"
						/>
					</div>
				</div>
			</header>
			<div className="mb-6 lg:mb-16 grid gap-4 grid-cols-2 md:grid-cols-3 container mx-auto px-4">
				{testimonial.post.map((x, i) => (
					<figure
						className="p-6 bg-gray-50 rounded flex flex-col justify-center"
						key={`testimonial-home-${i}`}
					>
						<blockquote className="text-gray-500 text-sm">
							<p className="my-4">"{x.review}”</p>
						</blockquote>
						<figcaption className="flex items-center gap-3">
							<img className="rounded-full w-10 h-10" src={x.avatar} alt={x.username} />
							<div className="gbmdcaJwBL9cdQN8mrlh _A6LflweZRUwrcL6M2Tk a0Ed69aMSu0vgf4oysz0">
								<div>{x.username}</div>
								<div className="text-gray-500 text-sm">{x.role}</div>
							</div>
						</figcaption>
					</figure>
				))}
			</div>
			<div className="flex justify-center pt-12">
				<Pagination
					currentPage={testimonial.page}
					totalPages={testimonial.totalPage}
					onPageChange={onPageChange}
				/>
			</div>
		</>
	);
}
