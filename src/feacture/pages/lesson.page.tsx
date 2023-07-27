import { useEffect, useState } from "react"
import YT, { YouTubePlayer } from "react-youtube"
import classNames from "classnames"
import { Countdown, CountdownProps } from "../countdown"
import { buttonDefault } from "../../style/button"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

function SceneCountdown({ onTimeEnd }: Pick<CountdownProps, 'onTimeEnd'>) {
    return (
        <div className="text-white">
            <h3 className="text-base">Tu siguiente clase empieza en:</h3>
            <span className="text-2xl md:text-4xl">
                <Countdown
                    time={new Date().getTime() + (20 * 1000)}
                    onTimeEnd={onTimeEnd}
                />
            </span>
        </div>
    )
}

function SceneVideo() {
    return (
        <YT
            videoId="N1pIYI5JQLE"
            className="w-full h-full lg:rounded-xl"
            iframeClassName="lg:rounded-xl"
            opts={{
                height: '100%',
                width: '100%',
                playerVars: {
                    autoplay: 1,
                    controls: 1
                },
            }}
        />
    )
}

function SceneRequireAuth() {
    return (
        <div className="text-white justify-self-center self-center place-self-center self">
            <h3 className="mb-2 text-lg md:text-2xl">Inicia el sesion para ver el contenido</h3>
            <a href="#" className={buttonDefault}>
                <GitHubLogoIcon />
                <span className="ml-2">Continua tu Aprendisaje</span>
            </a>
        </div>
    )
}


export function LessonPage() {
    const [scene, setScene] = useState(2)

    return (
        <div className="w-full max-w-3xl mx-auto pb-4 lg:pt-4">
            <header>
                <div className={classNames("w-full aspect-video bg-black lg:rounded-xl flex items-center", {
                    "p-4": scene !== 1,
                    "justify-center": scene === 2,
                })}>
                    {scene === 0 && <SceneCountdown onTimeEnd={() => setScene(0)} />}
                    {scene === 1 && <SceneVideo />}
                    {scene === 2 && <SceneRequireAuth />}
                </div>
                <div className="mt-4 border-b px-4 mx-auto prose">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-inter ">title Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus labore ipsum eaque temporibus enim ducimus officia porro alias, ea harum aut officiis nulla accusantium distinctio nemo sed consequuntur voluptatum repellendus!</h1>
                    <p className="text-neutral-500">Clase: 1/12</p>
                </div>
            </header>
            <main className="py-4 px-4 prose mx-auto">contenido escrito</main>
        </div>
    )
}