import { forwardRef } from "react"

export default forwardRef(function Player(
    { handleNameChange, playerName },
    ref
) {
    return (
        <section id='player'>
            <h2>Welcome {playerName || "unknown entity"}</h2>
            <p>
                <input type='text' ref={ref} />
                <button onClick={handleNameChange}>Set Name</button>
            </p>
        </section>
    )
})
