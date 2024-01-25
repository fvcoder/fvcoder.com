"use cli";
import { Button } from "@nextui-org/react";

import { GithubIconBrand } from "@/assets/icons/brand/github";
import { LinkedinIconBrand } from "@/assets/icons/brand/linkedin";
import { MailIcon } from "@/assets/icons/mail";
import { BadgePill } from "@/components/badge.pill";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Home() {
	return (
		<div className="relative min-h-[100vh] dark">
			<div
				className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-neutral-100 dark:bg-neutral-950
      			bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      			dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
			></div>
			<Navbar />

			<main className="w-full max-w-3xl px-4 mx-auto">
				<section className="py-44 pb-32">
					<img
						className="rounded-full size-12 mb-4"
						src="https://github.com/fvcoder.png"
						alt="fvcoder photo"
					/>
					<h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
						Hey, soy fvcoder{" "}
						<a
							href="https://linkedin.com/in/fvcoder"
							target="_blank"
							rel="noopener"
							className="flex justify-center items-center hover:scale-105 transition"
						>
							<BadgePill>Disponible para trabajar</BadgePill>
						</a>
					</h1>
					<h2 className="text-xl lg:text-2xl text-balance max-w-[700px] text-black dark:text-white">
						<span>{"Desarrollador independiente. "}</span>
						<span className="text-yellow-800 dark:text-yellow-200">
							{"Desarrollador FullStack y Educador. "}
						</span>
						<span className="text-red-800 dark:text-red-200">{"De La Paz, Bolivia. "}</span>
						<span className="text-sky-800 dark:text-sky-200">
							Especializado en la Experiencia de usuario.
						</span>
					</h2>

					<nav className="flex gap-4 mt-8 flex-wrap">
						<Button as="a" href="https://linkedin.com/in/fvcoder">
							<LinkedinIconBrand className="size-4 md:size-6" />
							LinkedIn
						</Button>
						<Button as="a" href="https://github.com/fvcoder">
							<GithubIconBrand className="size-4 md:size-6" />
							GitHub
						</Button>
						<Button as="a" href="mailto:contact@fvcoder.com">
							<MailIcon className="size-4 md:size-6" />
							contact@fvcoder.com
						</Button>
					</nav>
				</section>
				{Array.from({ length: 50 }).map((_, i) => (
					<p key={i}>text</p>
				))}
			</main>

			<Footer />
		</div>
	);
}
