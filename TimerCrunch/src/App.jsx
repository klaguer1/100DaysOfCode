import { useRef, useState } from "react"
import Player from "./components/Player.jsx"
import TimerChallenge from "./components/TimerChallenge.jsx"

function App() {
    const [enteredPlayerName, setPlayerName] = useState("")

    const playerName = useRef()

    const handleNameUpdate = () => {
        setPlayerName(playerName.current.value)
    }
    return (
        <>
            <Player
                playerName={enteredPlayerName}
                ref={playerName}
                handleNameChange={handleNameUpdate}
            />
            {enteredPlayerName && (
                <div id='challenges'>
                    <TimerChallenge title='Easy' targetTime={1} />
                    <TimerChallenge title='Medium' targetTime={5} />
                    <TimerChallenge title='Hard' targetTime={10} />
                    <TimerChallenge title='Expert' targetTime={15} />
                </div>
            )}
        </>
    )
}

export default App
