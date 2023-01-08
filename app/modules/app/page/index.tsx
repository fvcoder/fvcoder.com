import HeroImg from "~/assets/hero.jpg";

export function IndexPage() {
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
		</div>
	);
}
