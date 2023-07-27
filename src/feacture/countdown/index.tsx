import { useCountdown } from "./hook"

export interface CountdownProps {
    time: string | number | Date
    onTimeEnd?: () => void | Promise<void>
}

export function Countdown({ time, onTimeEnd }: CountdownProps) {
    const { days, hours, minutes, seconds } = useCountdown(time)

    if (days + hours + minutes + seconds <= 0) {
        if (onTimeEnd) {
            onTimeEnd()
        }
        return (
            <span>
                El Tiempo Termino
            </span>
        )
    }

    function format(n: number) {
        return n < 10 ? `0${n}` : n
    }
    return (
        <span>{format(days)}:{format(hours)}:{format(minutes)}:{format(seconds)}</span>
    )
}

export {
    useCountdown
}