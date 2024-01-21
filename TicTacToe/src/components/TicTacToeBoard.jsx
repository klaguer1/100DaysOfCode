import { useState } from "react"; 

const initialBoard = [
    [null, null, null], 
    [null, null, null], 
    [null, null, null]
];

export default function TicTacToeBoard() {  

    const [gameBoard, setGameBoard] = useState(initialBoard); 

    const updateGameBoard = (rowIndex, colIndex) => { 
        setGameBoard((prevGameBoard) => {
            const newBoard = [...prevGameBoard.map(innerArray => [...innerArray])]; 
            newBoard[rowIndex][colIndex] = 'X'; 
            return newBoard;
        });

    }

    return <ol id="game-board">
        {gameBoard.map((row, rowIndex)=>(
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                        <li key={colIndex}>
                            <button onClick={() => updateGameBoard(rowIndex, colIndex)}>{playerSymbol}</button>
                        </li>
                    ))}
                </ol>
            </li>
        ))}


    </ol>
}