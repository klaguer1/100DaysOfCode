
export default function TicTacToeBoard({gameBoard, onSelectSquare}) { 



    // const [gameBoard, setGameBoard] = useState(initialBoard); 

    // const updateGameBoard = (rowIndex, colIndex) => { 
    //     setGameBoard((prevGameBoard) => {
    //         const newBoard = [...prevGameBoard.map(innerArray => [...innerArray])]; 
    //         newBoard[rowIndex][colIndex] = activePlayerSymbol; 
    //         return newBoard;
    //     });
        
    //     onSelectSquare();
    // }

    return <ol id="game-board">
        {gameBoard.map((row, rowIndex)=>(
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                        <li key={colIndex}>
                            <button 
                            onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                                
                                {playerSymbol}</button>
                        </li>
                    ))}
                </ol>
            </li>
        ))}


    </ol>
}