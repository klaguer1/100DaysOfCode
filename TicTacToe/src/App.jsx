import Player from "./components/Player"; 
import TicTacToeBoard from "./components/TicTacToeBoard";

function App() {
  

  return ( 
    <main>
      <div id="game-container"> 
        PLAYERS  
        <ol id="players ">
          <Player playerName="Player 1" playerSymbol="X" />
          <Player playerName="Player 2" playerSymbol="O" />

        </ol>

        <TicTacToeBoard/>
      </div> 
      LOG 
    </main>
   
  )
}

export default App
