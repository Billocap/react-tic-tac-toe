import { useContext } from "react"

import { GameContext } from "../../contexts/GameContext"
import BoardCell from "./BoardCell"

import "./GameBoard.css"

const winStates: any = {
  273: {
    x1: 3,
    y1: 3,
    x2: 27,
    y2: 27
  },
  84: {
    x1: 3,
    y1: 27,
    x2: 27,
    y2: 3
  },
  448: {
    x1: 2,
    y1: 5,
    x2: 28,
    y2: 5
  },
  56: {
    x1: 2,
    y1: 15,
    x2: 28,
    y2: 15
  },
  7: {
    x1: 2,
    y1: 25,
    x2: 28,
    y2: 25
  },
  292: {
    x1: 5,
    y1: 2,
    x2: 5,
    y2: 28
  },
  146: {
    x1: 15,
    y1: 2,
    x2: 15,
    y2: 28
  },
  73: {
    x1: 25,
    y1: 2,
    x2: 25,
    y2: 28
  }
}

export default function GameBoard() {
  const { board, winState, gameIsRunning } = useContext(GameContext)

  const boardCells = board.map((cell, index) => {
    return <BoardCell key={index} index={index} value={cell}/>
  })

  function Overlay() {
    if (gameIsRunning) return null

    return (
      <svg viewBox="0 0 30 30" id="result">
        <line className="result-line" {...winStates[winState]}/>
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
