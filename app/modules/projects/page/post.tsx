import { useLoaderData } from "@remix-run/react";

import AvatarImg from "~/assets/avatar.png";
import { RenderArticle } from "~/modules/app/components";

import type { projectPostL } from "../loader/post.loader";

export function ProjectPostPage() {
	const loader = useLoaderData<projectPostL>();

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
					<RenderArticle render={[...loader.data.body]} />
				</main>
			</div>
		</article>
	);
}
