import { useState, useRef} from "react"; 

export default function Player() { 
 
  const [enteredPlayerName, setPlayerName] = useState("") 

  const playerName = useRef(); 

  const handleButtonClicked = () => { 
    setPlayerName(playerName.current.value); 

  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName || "unknown entity"}</h2>
      <p>
        <input type="text"  ref={playerName} />
        <button onClick={handleButtonClicked}>Set Name</button>
      </p>
    </section>
  );
}
