import { useState, useEffect } from "react"; 

export default function Player({playerName, playerSymbol}){ 

  const [isEditing, setIsEditing] = useState(false);  
  const [editedName, setEditedName] = useState(playerName) 

  const handleButtonClicked = () => {
    setIsEditing(editing => !editing);
      
  }; 

  const handleNameChange = (event) => {
    setEditedName(event.target.value);
      
  };

    return(
    <li>
    <span className="player">
      {isEditing ? (
      <input type="text" required  value={editedName} onChange={handleNameChange}/> ) : 
      (<span className="player-name">{editedName}</span>)}
      <span className="player-symbol">{playerSymbol} </span> 
    </span> 
    <button onClick={handleButtonClicked}>{isEditing? 'Save' : 'Edit'}</button>
    </li>
    )

}