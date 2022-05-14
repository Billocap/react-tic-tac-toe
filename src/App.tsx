import { CSSProperties, Fragment, useContext } from "react"

import GameBoard from "./components/GameBoard"
import { GameContext } from "./contexts/GameContext"

import "./App.css"

export default function App() {
  const { player, winner, replay, isGameRunning } = useContext(GameContext)

  const status = !isGameRunning ?
    winner ?
      `Winner is player ${winner}` :
      `Draw` :
    `Player ${player}'s turn`

  const replayButtonStyle: CSSProperties = {
    visibility: !isGameRunning ? "visible" : "hidden"
  }

  return (
    <Fragment>
      <span>{status}</span>
      <GameBoard/>
      <button id="replay" style={replayButtonStyle} onClick={() => replay()}>
        Play Again
      </button>
    </Fragment>
  )
}
