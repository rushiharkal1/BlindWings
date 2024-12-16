import React, { useState, useEffect } from "react";
import '../styles/ComingSoon.css';

function ComingSoon() {
    // State to store the time remaining
    const [timeRemaining, setTimeRemaining] = useState({});

    useEffect(() => {
        // Set the countdown target date
        const targetDate = new Date("2024-12-31T23:59:59").getTime();

        // Update the countdown every second
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                setTimeRemaining({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                });
            } else {
                setTimeRemaining({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });
            }
        }, 1000);

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    return (
        <div className="container text-center my-5 p-4 border rounded shadow-lg">
            <h1 className="fw-bold">BlindWings</h1>
            
            <hr className="my-4" />

            <p className="text-secondary">Inspiring Minds, One Quote at a Time</p>

            <h2 className="fw-semibold text-dark mt-4">We're Launching Soon!</h2>
            <p className="text-muted mt-2">At BlindWings, we believe in the power of words to uplift and inspire. Stay tuned for a world of motivational quotes!</p>

            <h2 className="fw-semibold text-dark mt-6">Stay Updated</h2>
            <p className="text-muted mt-2">Enter your email below to be the first to know!</p>

            {/* Google Form link */}
            <div className="mt-4">
                <a href="https://forms.gle/JJfFFMY2GGPcbcWt7" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-success py-2 px-6">
                        Notify Me
                    </button>
                </a>
            </div>

            {/* Countdown Timer */}
            <div className="pt-4">
                <h4 className="fw-semibold text-dark">Time Remaining:</h4>
                <div className="fw-bold mt-2" id="timer">
                    | <span>{timeRemaining.days}d </span> | <span>{timeRemaining.hours}h</span> | <span>{timeRemaining.minutes}m </span> | <span>{timeRemaining.seconds}s</span> |
                </div>
            </div>

            <hr className="my-4" />
        </div>
    );
}

export default ComingSoon;
