import React from "react"
import { forwardRef } from "react"

export default forwardRef(function ResultModal(
    { targetTime, handleReset, timeRemaining },
    ref
) {
    const formattedTime = Number(timeRemaining / 1000).toFixed(2)
    //The closer you are to stopping exactly at the specified time the higher your score
    const score = ((1 - timeRemaining / (targetTime * 1000)) * 100).toFixed(0)
    const result =
        timeRemaining > 0 ? `You Won! Your Score is: ${score} ` : "You Lost"

    return (
        <dialog ref={ref} className='result-modal'>
            <h2>{result}</h2>
            <p>
                The target time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                You stopped the timer with{" "}
                <strong>{formattedTime} seconds left.</strong>
            </p>
            <form method='dialog' onSubmit={handleReset}>
                <button>Close</button>
            </form>
        </dialog>
    )
})
