export default function GameOver({ winner, handleRestart }) {
  return (
    <div id="game-over">
      <h1>Game Over!</h1>
      {winner ? (
        <p>Congratulations Champion!: {winner} </p>
      ) : (
        <p>The Battle Has Ended in a Draw! Are You Satisfied?! </p>
      )}

      <button onClick={handleRestart}>Rematch</button>
    </div>
  );
}
