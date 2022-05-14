import { useContext } from "react"

import { GameContext } from "../../contexts/GameContext"
import BoardCell from "./BoardCell"

import "./GameBoard.css"

const lineCoordinates: any = {
  DIAGONAL_1: {
    x1: 3,
    y1: 3,
    x2: 27,
    y2: 27
  },
  DIAGONAL_2: {
    x1: 3,
    y1: 27,
    x2: 27,
    y2: 3
  },
  HORIZONTAL_TOP: {
    x1: 2,
    y1: 5,
    x2: 28,
    y2: 5
  },
  HORIZONTAL_MIDDLE: {
    x1: 2,
    y1: 15,
    x2: 28,
    y2: 15
  },
  HORIZONTAL_BOTTOM: {
    x1: 2,
    y1: 25,
    x2: 28,
    y2: 25
  },
  VERTICAL_LEFT: {
    x1: 5,
    y1: 2,
    x2: 5,
    y2: 28
  },
  VERTICAL_MIDDLE: {
    x1: 15,
    y1: 2,
    x2: 15,
    y2: 28
  },
  VERTICAL_RIGHT: {
    x1: 25,
    y1: 2,
    x2: 25,
    y2: 28
  }
}

export default function GameBoard() {
  const { board, winState, isGameRunning } = useContext(GameContext)

  const boardCells = board.map((cell, index) => {
    return <BoardCell key={index} index={index} value={cell}/>
  })

  function Overlay() {
    if (isGameRunning || !winState) return null

    return (
      <svg viewBox="0 0 30 30" id="result">
        <line className="result-line" {...lineCoordinates[winState]}/>
      </svg>
    )
  }

  return (
    <div id="board">
      <Overlay/>
      {boardCells}
    </div>
  )
}
