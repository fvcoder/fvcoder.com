import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import { Pagination } from "flowbite-react";

import HeroImg from "~/assets/hero-project.jpg";

import type { projectPage } from "../types";

export function ProjectExplore() {
	const { post, page, totalPage } = useLoaderData<projectPage>();
	const navigation = useNavigate();

	function onPageChange(a: number) {
		navigation(`/project?page=${a}`);
	}

	return (
		<>
			<header className="container px-4 mx-auto flex flex-col-reverse md:flex-row items-center pt-0 md:pt-12 pb-12">
				<div className="w-full md:w-2/4 text-center md:text-left">
					<h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">🙌 My Projects</h1>
					<p className="text-lg lg:text-xl text-gray-500 mb-2">I believe there is much to create</p>
				</div>
				<div className="w-full md:w-2/4">
					<div className="py-12">
						<img
							src={HeroImg}
							alt="Foto de Daria Nepriakhina 🇺🇦 en Unsplash"
							className="object-cover aspect-square rounded-xl shadow mx-auto w-2/3 md:w-3/5"
						/>
					</div>
				</div>
			</header>

			<div className="grid-gallery">
				{post.map((x, i) => (
					<Link className="grid-gallery__item" to={x.to} title={x.title} key={`project-${i}`}>
						<img src={x.img} alt={x.imgAlt} />
					</Link>
				))}
			</div>

			<div className="flex justify-center pt-12">
				<Pagination currentPage={page} totalPages={totalPage} onPageChange={onPageChange} />
			</div>
		</>
	);
}
