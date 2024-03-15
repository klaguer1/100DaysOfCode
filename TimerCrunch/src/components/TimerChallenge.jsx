import { useState, useRef } from "react"

export default function TimerChallenge({ title, targetTime }) {
    const [timerExpired, setTimerExpired] = useState(false)
    const [timerStart, setTimerStart] = useState(false)

    function handleStart() {
        setTimeout(() => {
            setTimerExpired(true)
        }, targetTime * 1000)

        setTimerStart(true)
    }

    function handleStop() {
        setTimerStart(false)
    }
    return (
        <section className='challenge'>
            <h2> {title} </h2>
            {timerExpired && <p>You lost!</p>}
            <p className='challenge-time'>
                {targetTime} seconds{targetTime > 1 ? "s" : ""}
            </p>
            <button onClick={timerStart ? handleStart : handleStop}>
                {timerStart ? "Start" : "Stop"} Challenge
            </button>
            <p className=''>Timer {timerStart ? "running..." : "inactive"}</p>
        </section>
    )
}
