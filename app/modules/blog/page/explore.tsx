import { useLoaderData, useNavigate } from "@remix-run/react";
import { Pagination } from "flowbite-react";

import HeroImg from "~/assets/hero-blog.jpg";

import { CardBlog } from "../components/card";
import type { blogPage } from "../types";

export function BlogExplore() {
	const { post, page, totalPage } = useLoaderData<blogPage>();
	const navigation = useNavigate();

	function onPageChange(a: number) {
		navigation(`/blog?page=${a}`);
	}

	return (
		<>
			<header className="container px-4 mx-auto flex flex-col-reverse md:flex-row items-center pt-0 md:pt-12 pb-12">
				<div className="w-full md:w-2/4 text-center md:text-left">
					<h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">📒 Blog</h1>
					<p className="text-lg lg:text-xl text-gray-500 mb-2">
						Simplemente evaluar mis conocimientos enseñando lo que aprendo
					</p>
				</div>
				<div className="w-full md:w-2/4">
					<div className="py-12">
						<img
							src={HeroImg}
							alt="Foto de Marissa Grootes en Unsplash"
							className="object-cover aspect-square rounded-xl shadow mx-auto w-2/3 md:w-3/5"
						/>
					</div>
				</div>
			</header>

			<div className="grid gap-4 container mx-auto md:grid-cols-3">
				{post.map((x, i) => (
					<CardBlog x={x} key={`blog-${i}`} />
				))}
			</div>
			<div className="flex justify-center pt-12">
				<Pagination currentPage={page} totalPages={totalPage} onPageChange={onPageChange} />
			</div>
		</>
	);
}
