import { useLoaderData } from "@remix-run/react";

import AvatarImg from "~/assets/avatar.png";
import { RenderArticle } from "~/modules/app/components";
import { appShare } from "~/modules/app/data/share";

import { CardBlog } from "../components/card";
import type { blogPostL } from "../loader/post.loader";

export function BlogPostPage() {
	const loader = useLoaderData<blogPostL>();

	return (
		<article className="container mx-auto px-4">
			<div className="w-full md:first-letter:w-3/4 mx-auto">
				<header className="relative shadow w-full lg:w-3/4 mx-auto hero-post">
					<img
						src={loader.img}
						alt={loader.imgAlt}
						className="rounded-md aspect-video object-cover"
					/>
					<div className="absolute flex flex-col justify-end inset-0 rounded-md bg-black/25 p-4 text-white  transition-all">
						<h1 className="mb-2 text-2xl md:text-3xl lg:text-4xl">{loader.title}</h1>
						<div className="flex gap-2 items-center">
							<div className="bg-blue-500 rounded-full border">
								<img
									src={AvatarImg}
									className="w-10 h-10 rounded-full"
									alt="Fernando Ticona @fvcoder"
								/>
							</div>
							<div>
								<p className="text-base font-semibold leading-3">Fernando Ticona</p>
								<p className="font-light text-sm">@fvcoder</p>
							</div>
						</div>
					</div>
				</header>
				<main className="prose mx-auto py-6">
					<RenderArticle render={[...loader.data.description, ...loader.data.body]} />
				</main>
				<div className="text-center mb-4">
					<p className="mb-4">Comparte este articulo con:</p>
					<div className="flex flex-wrap justify-center gap-8 mb-4 print:hidden">
						{appShare.map((x, i) => (
							<a href={x.url + loader.url} target="_blank" key={`share-with-${i}`} rel="noreferrer">
								<x.icon className="w-10 h-auto" style={{ color: x.color }} />
							</a>
						))}
					</div>
				</div>
			</div>
			<div className="grid gap-4 container mx-auto md:grid-cols-3">
				{loader.related.map((x, i) => (
					<CardBlog x={x} key={`blog-${i}`} />
				))}
			</div>
		</article>
	);
}
