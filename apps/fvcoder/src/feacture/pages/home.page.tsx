import classNames from "classnames";
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { Button } from "@tremor/react"
import Card1 from "./../../assets/img/card_1.webp"
import Card2 from "./../../assets/img/card_2.webp"
import Card3 from "./../../assets/img/card_3.webp"
import Card4 from "./../../assets/img/card_4.webp"
import Card5 from "./../../assets/img/card_5.webp"
import Card6 from "./../../assets/img/card_6.webp"
import Card7 from "./../../assets/img/card_7.webp"

const cardGrid = [
    { href: "/", img: Card1 },
    { href: "/", img: Card2 },
    { href: "/", img: Card3 },
    { href: "https://blog.fvcoder.com/tag/framework/", img: Card4 },
    { href: "https://blog.fvcoder.com/tag/javascript/", img: Card5 },
    { href: "https://blog.fvcoder.com/tag/node-js/", img: Card6 },
    { href: "https://blog.fvcoder.com/tag/backend", img: Card7 },
]

export function HomePage() {
    return (
        <div>
            <header className="w-full max-w-3xl px-4 mx-auto pt-10 md:pt-20">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center tracking-tighter	leading-none">
                    Resolviendo desafíos con creatividad y JavaScript
                </h1>
                <div className="mt-4">
                    <div className="flex flex-wrap gap-2 items-center justify-center py-4">
                        <span className="select-none bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">TypeScript</span>
                        <span className="select-none bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">Tailwind</span>
                        <span className="select-none bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">Npm</span>
                        <span className="select-none bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">Node Js</span>
                        <span className="select-none bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">JavaScript</span>
                        <span className="select-none bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">VS Code</span>
                        <span className="select-none bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">Figma</span>
                        <span className="select-none bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">Yarn</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center py-4">
                        <Button variant="primary" icon={GitHubLogoIcon} onClick={() => window.location.href = "https://github.com/fvcoder" }>Github</Button>
                        <Button variant="secondary" onClick={() => window.location.href = "mailto:contact@fvcoder.com" }>Contactame</Button>
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
                </div>
            </header>
        </div>
    )
}
