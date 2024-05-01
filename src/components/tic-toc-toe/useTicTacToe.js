import React, { useState } from 'react'

const useTicTacToe = () => {
    const initialBoard = () => Array(9).fill(null);
    const [board, setBoard] = useState(initialBoard);
    const [isNext, setNext] = useState(true);

    const calculateWinner = (currentBoard) =>{}

    const handleClick = (index) => {
        const winner = calculateWinner(board);
        if(winner || board[index]) return;

        const newBoard = [...board];
        newBoard[index] = isNext ?  "X" : "O";
        setBoard(newBoard);
        setNext(!isNext)
    }

    const getStatusMessage = () => {}

    const resetGame = () => {}

  return {board, handleClick, calculateWinner, getStatusMessage, resetGame}
}

export default useTicTacToe