import { useEffect, useState } from 'react';

/**
 * Generates a countdown timer based on the target date.
 *
 * @param {string | number | Date} targetDate - The target date for the countdown.
 * @return The countdown timer value.
 */
export function useCountdown(targetDate: string | number | Date) {
    const countDownDate = new Date(targetDate).getTime();

    const [countDown, setCountDown] = useState(
        countDownDate - new Date().getTime()
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [countDownDate]);

    return getReturnValues(countDown);
};

function getReturnValues(countDown: number) {
  // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return {
        days,
        hours,
        minutes,
        seconds
    };
};
