import React, { useState } from 'react'
import useTicTacToe from './useTicTacToe'

const TicToe = () => {
    // const initialBoard = () => Array(9).fill(null);
    // const [board, setBoard] = useState(initialBoard)

    const {board, handleClick, calculateWinner, getStatusMessage, resetGame} = useTicTacToe()
    console.log(board)
  return (
    <div className='game'>
        <div className='status'>
            Player X turn
            {getStatusMessage}
            <button onClick={resetGame}>Reset Game</button>
        </div>
        <div className='board  rounded-1 '>
            {board?.map((eachCell, index)=>{
                return(
                    <button className='cell' key={index} onClick={handleClick(index)} disabled={eachCell !==  null}>{/* {board[index]} */}</button>
                )
            })}
        </div>
    </div>
  )
}

export default TicToe