import React from 'react'
import { useState, useEffect, useMemo } from 'react';

const Timer = () => {

    const targetDate = new Date('Jan 31, 2025 23:59:59')

    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [time, setTime] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const { days, hours, minutes, seconds } = time;


    return (
        <>
            <div className='flex gap-5 mt-5'>
                <div className='shadow-2xl rounded-lg p-4 text-center'>{days} <br /> Days</div>
                <div className='shadow-2xl rounded-lg p-4 text-center'>{hours.toString().padStart(2, '0')}<br /> Hours </div>
                <div className='shadow-2xl rounded-lg p-4 text-center'>{minutes.toString().padStart(2, '0')}<br /> Minutes </div>
                <div className='shadow-2xl rounded-lg p-4 text-center'>{seconds.toString().padStart(2, '0')}<br /> Seconds </div>
            </div>
        </>
    )
}

export default Timer
