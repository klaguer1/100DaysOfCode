import { useState } from "react"; 

export default function Player({playerName, playerSymbol}){ 

  const [isEditing, setIsEditing] = useState(false); 

  function handleEditButtonClicked(){ 
    setIsEditing(true)
    console.log(isEditing);
  };

    return(
    <li>
    <span className="player">
      {isEditing ? (
      <input type="text"/> ) : 
      (<span className="player-name">{playerName}</span>)}
      <span className="player-symbol">{playerSymbol} </span> 
    </span> 
    <button onClick={handleEditButtonClicked}>Edit</button>
    </li>
    )

}