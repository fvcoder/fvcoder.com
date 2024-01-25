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

			<main>
				{Array.from({ length: 50 }).map((_, i) => (
					<p key={i}>text</p>
				))}
			</main>

			<Footer />
		</div>
	);
}
