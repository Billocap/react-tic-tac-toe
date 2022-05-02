import { useContext } from "react"

import { GameContext } from "../../contexts/GameContext"
import BoardCell from "./BoardCell"

import "./GameBoard.css"

export default function GameBoard() {
  const { board } = useContext(GameContext)

  const rowSquares = board.map((cell, index) => {
    return <BoardCell key={index} index={index} value={cell}/>
  })

  return (
    <div id="board">
      {rowSquares}
    </div>
  )
}
