import { useState } from "react";

import Player from "./components/Player"; 
import TicTacToeBoard from "./components/TicTacToeBoard";
import Log from "./components/Log"; 
import { WINNING_COMBINATIONS } from "./utils/winning-combinations";
import GameOver from "./components/GameOver";

const initialBoard = [
  [null, null, null], 
  [null, null, null], 
  [null, null, null]
];


function updateActivePlayer(gameTurns){
    let currentPlayer = 'X'; 

    if (gameTurns.length> 0 && gameTurns[0].player === 'X'){
      currentPlayer = 'O';
    } 

    return currentPlayer; 
}

function App() {

  const [gameTurns, setGameTurns] = useState([]); 
  const [players, setPlayerNames] = useState({X:"Player 1", O:"Player 2"});


  const currentPlayer = updateActivePlayer(gameTurns); 

  let gameBoard =[...initialBoard.map(array=> [...array])];    

  let winner = ""; 
  let draw = false;  


  if(gameTurns.length>0){
      gameTurns.forEach((element, index, array)=> {

          gameBoard[element.position.row][element.position.col] = element.player;
          
      });

  }
  

    for (const combination of WINNING_COMBINATIONS) { 

      // Extract individual squares in the combination from the game board
      const firstSquare =  gameBoard[combination[0].row][combination[0].column];
      const secondSquare = gameBoard[combination[1].row][combination[1].column];
      const thirdSquare =  gameBoard[combination[2].row][combination[2].column];
      if(firstSquare && firstSquare===secondSquare && firstSquare===thirdSquare){ 
          winner = players[firstSquare]
      }
     
  }

  if(gameTurns.length===9 && !winner){
    draw=true 
  }

  
  const handlePlayerNameChange = (symbol, newName) => {
    setPlayerNames(prevNames => ({
      ...prevNames, 
      [symbol]: newName
         
    }))
  };

  function handleSelectSquare(rowIndex, colIndex){ 
    setGameTurns(prevTurns => {
      let currentPlayer = updateActivePlayer(prevTurns);

      const updatedTurns = [{position: {row: rowIndex, col: colIndex}, player: currentPlayer}, 
        ...prevTurns
      ];  
      return updatedTurns; 
    });
  } 

  function handleRestart(){
    setGameTurns([])
    winner=""
    draw=false
  }

  return ( 
    <main>
      <div id="game-container"> 
        PLAYERS  
        <ol id="players" className="highlight-player">
          <Player selectNewName={handlePlayerNameChange} playerName={players["X"]} playerSymbol="X" isActive={currentPlayer==='X'}/>
          <Player selectNewName={handlePlayerNameChange} playerName={players["O"]} playerSymbol="O" isActive={currentPlayer==='O'} />

        </ol>
        {(winner || draw) && 
        <GameOver winner={winner} handleRestart={handleRestart} />
          }
        <TicTacToeBoard gameBoard={gameBoard} onSelectSquare={handleSelectSquare} activePlayerSymbol={currentPlayer}/>
      </div>  
      <Log turns={gameTurns}/>
    </main>
   
  )
}

export default App
