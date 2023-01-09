import { Link, useLoaderData } from "@remix-run/react";
import { Button } from "flowbite-react";
import { HiArrowRight, HiArrowSmRight } from "react-icons/hi";

import HeroImg from "~/assets/hero.jpg";

import type { IndexPageLoader } from "../loader";

interface TitleSectionProps {
	title: string;
	subtitle?: string;
}

function TitleSection({ title, subtitle }: TitleSectionProps) {
	return (
		<header className="text-center w-3/4 mx-auto">
			<h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl text-gray-900">{title}</h2>
			{subtitle && <p className="font-light text-gray-500 mb-8 lg:mb-16 sm:text-lg">{subtitle}</p>}
		</header>
	);
}

export function IndexPage() {
	const { blog, project } = useLoaderData<IndexPageLoader>();

	return (
		<div className="container mx-auto px-4">
			<header className="flex flex-col-reverse md:flex-row items-center pt-0 md:pt-12 pb-12">
				<div className="w-full md:w-2/4 text-center md:text-left">
					<h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
						👋 Hello, I am Fernando Ticona
					</h1>
					<p className="text-lg lg:text-xl text-gray-500 mb-2">
						I'm a frontend programmer, focused on user interface and user experience. I'm also an
						enthusiastic learner, as I never stop learning.
					</p>
				</div>
				<div className="w-full md:w-2/4">
					<div className="py-12">
						<img
							src={HeroImg}
							alt="Foto de Mailchimp en Unsplash"
							className="object-cover aspect-square rounded-xl shadow mx-auto w-2/3 md:w-3/5"
						/>
					</div>
				</div>
			</header>
			<section>
				<TitleSection title="🙌 My Projects" subtitle="I believe there is much to create" />
				<div className="grid gap-4 mb-6 lg:mb-16 grid-cols-2 lg:grid-cols-4">
					{project.post.map((x, i) => (
						<Link
							to={x.to}
							className="flex flex-col md:flex-row md:items-center rounded-lg shadow-sm border w-full"
							key={`project-home-${i}`}
						>
							<div className="aspect-square md:h-28">
								<img
									className="w-full rounded-t-lg md:rounded-l-xl md:rounded-r-none object-cover h-full"
									src={x.img}
									alt={x.imgAlt}
								/>
							</div>
							<div className="px-4 min-w-0 md:flex-1">
								<h3 className="text-center py-4 md:py-0  md:text-left text-lg text-gray-900">
									<p className="truncate">{x.title}</p>
								</h3>
								<p className="hidden xl:block mt-3 font-light text-gray-500">{x.date}</p>
							</div>
						</Link>
					))}
				</div>
				<div className="mb-6 lg:mb-16 flex justify-center">
					<Link to="/project" tabIndex={-1}>
						<Button size="sm" color="gray">
							See All <HiArrowSmRight className="ml-1" />
						</Button>
					</Link>
				</div>
			</section>
			<section>
				<TitleSection
					title="📒 Blog"
					subtitle="Simply evaluated my knowledge by teaching what I learn (Spanish only)"
				/>
				<div className="mb-6 lg:mb-16 grid gap-8 lg:grid-cols-2">
					{blog.post.map((x, i) => (
						<article
							className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
							key={`blog-home-${i}`}
						>
							<h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								<Link to={x.to} tabIndex={-1}>
									{x.title}
								</Link>
							</h2>
							<div className="mb-4 text-gray-500">
								<span className="text-sm">{x.date}</span>
							</div>
							<p className="mb-5 font-light text-gray-500 dark:text-gray-400">{x.description}</p>
							<div className="flex justify-end items-center">
								<Link
									to={x.to}
									className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
								>
									Read more
									<HiArrowRight className="ml-2 w-4 h-4" />
								</Link>
							</div>
						</article>
					))}
				</div>
				<div className="mb-6 lg:mb-16 flex justify-center">
					<Link to="/blog" tabIndex={-1}>
						<Button size="sm" color="gray">
							See All <HiArrowSmRight className="ml-1" />
						</Button>
					</Link>
				</div>
			</section>
			<section>
				<TitleSection title="🤠 Testimonials" subtitle="Thanks to all" />
				<div className="mb-6 lg:mb-16 grid gap-4 grid-cols-2 md:grid-cols-3">
					{Array.from({ length: 3 }).map((x, i) => (
						<figure className="p-6 bg-gray-50 rounded" key={`testimonial-home-${i}`}>
							<blockquote className="text-gray-500 text-sm">
								<p className="my-4">
									"This is a very complex and beautiful set of elements. Under the hood it comes
									with the best things from 2 different worlds: Figma and Tailwind.”
								</p>
							</blockquote>
							<figcaption className="flex items-center gap-3">
								<img
									className="rounded-full w-10 h-10"
									src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
									alt="profile picture"
								/>
								<div className="gbmdcaJwBL9cdQN8mrlh _A6LflweZRUwrcL6M2Tk a0Ed69aMSu0vgf4oysz0">
									<div>Bonnie Green</div>
									<div className="text-gray-500 text-sm">CTO at Open AI</div>
								</div>
							</figcaption>
						</figure>
					))}
				</div>
				<div className="mb-6 lg:mb-16 flex justify-center">
					<Link to="/blog" tabIndex={-1}>
						<Button size="sm" color="gray">
							See All <HiArrowSmRight className="ml-1" />
						</Button>
					</Link>
				</div>
			</section>
		</div>
	);
}
