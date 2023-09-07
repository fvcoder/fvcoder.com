import classNames from "classnames"

function capitalize(str = "") {
    return str.split(' ').map((char) => {
        return char[0].toUpperCase() + char.slice(1, char.length)
    }).join(' ');
}

const styleBase = "text-xs font-medium px-2.5 py-0.5 rounded"

const style = { 
    gray: classNames(styleBase, "bg-gray-100 text-gray-800"),
    orange: classNames(styleBase, "bg-orange-100 text-orange-800"),
    blue: classNames(styleBase, "bg-blue-100 text-blue-800"),
    sky: classNames(styleBase, "bg-sky-100 text-sky-800"),
    yellow: classNames(styleBase, "bg-yellow-100 text-yellow-800"),
    green: classNames(styleBase, "bg-green-100 text-green-800"),
}

const skill: Record<string, string> = {
    astro: style.orange,
    react: style.blue,
    tailwind: style.sky,
    prismic: style.yellow,
    nodejs: style.green,
}

export function BadgeBySkill({ text }: { text: string }) {
    const sk = text.toLocaleLowerCase().replace(/-/, '')

    return (
        <span
            className={classNames(skill[sk] ?? style.gray, "capitalize")}
        >
            {capitalize(text.replace(/-/g, ' '))}
        </span>
    )
}