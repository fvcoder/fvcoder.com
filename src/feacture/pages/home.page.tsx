import classNames from "classnames";
import { buttonDefault } from "../../style/button";
import { Navbar } from "../navbar";
import Avatar from "./../../assets/fer.png"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import Card1 from "./../../assets/card/card_1.png"
import Card2 from "./../../assets/card/card_2.png"
import Card3 from "./../../assets/card/card_3.png"
import Card4 from "./../../assets/card/card_4.png"
import Card5 from "./../../assets/card/card_5.png"
import Card6 from "./../../assets/card/card_6.png"
import Card7 from "./../../assets/card/card_7.png"

const cardGrid = [
    { href: "/", img: Card1 },
    { href: "/", img: Card2 },
    { href: "/", img: Card3 },
    { href: "/", img: Card4 },
    { href: "/", img: Card5 },
    { href: "/", img: Card6 },
    { href: "/", img: Card7 },
]

export function HomePage() {
    return (
        <div>
            <Navbar />
            <header className="w-full max-w-3xl px-4 mx-auto pt-10 md:pt-20">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center tracking-tighter	leading-none">
                    Resolviendo desafíos con creatividad y JavaScript
                </h1>
                <div className="mt-4">
                    <div className="flex flex-wrap gap-2 items-center justify-center py-4">
                        <button className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">TypeScript</button>
                        <button className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">Tailwind</button>
                        <button className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">Npm</button>
                        <button className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">Node Js</button>
                        <button className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">JavaScript</button>
                        <button className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">VS Code</button>
                        <button className="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">Figma</button>
                        <button className="bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">Yarn</button>
                    </div>
                    <div className="flex items-center gap-2 justify-center py-4">
                        <a href="https://github.com/fvcoder" className={buttonDefault}>
                            <GitHubLogoIcon />
                            <span className="ml-2">Github</span>
                        </a>
                        <a href="/contact" className={buttonDefault}>Contactame</a>
                    </div>
                    <div className="grid grid-cols-3 gap-4 pb-10">
                        {cardGrid.map((x, i) => (
                            <a
                                href={x.href}
                                key={i}
                                className={
                                    classNames("rounded-xl shadow bg-neutral-100", {
                                        "col-span-1 aspect-square": !(i === 3 || i === 6),
                                        "col-span-2 h-full": i === 3 || i === 6
                                    })
                                }
                            >
                                <img src={x.img} alt="" />
                            </a>
                        ))}
                    </div>
                    <div className="hidden">
                        <img src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=90/front-static/pages/home/sidekick-desktop-app.png" alt="" className="w-full h-auto" />
                    </div>
                    <div className="border hidden">
                        <img src={Avatar} alt="" className="w-32 h-32 rounded-full" />
                    </div>
                </div>
            </header>
        </div>
    )
}
/**
`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 ${
                                    i === 3 || i === 6 ? "col-span-2 aspect-video" : "aspect-square"
                                }`
 */