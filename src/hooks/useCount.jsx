import { useEffect, useState } from "react"

export const useCount = (isStart) => {

    const [time, setTime] = useState(0);

    useEffect(() => {
        if (isStart) {
            const interval = setInterval(() => {
                setTime(prev => prev + 1);
            }, 1000);
            return () => {
                clearInterval(interval);
            }
        }
    }, [isStart, time]);

    const timeCalc = () => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        const formatHours = String(hours).toString().padStart(2, "0");
        const formatMinutes = String(minutes).toString().padStart(2, "0");
        const formatSeconds = String(seconds).toString().padStart(2, "0");
        return `${formatHours}:${formatMinutes}:${formatSeconds}`;
    }

    const resetTime = () => {
        setTime(0);
    }

    return { time: timeCalc(), resetTime }
}