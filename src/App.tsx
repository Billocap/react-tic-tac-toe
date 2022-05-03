import { CSSProperties, Fragment, useContext } from "react"

import GameBoard from "./components/GameBoard"
import { GameContext } from "./contexts/GameContext"

import "./App.css"

export default function App() {
  const { player, winner, replay } = useContext(GameContext)

  const status = winner ?
    winner != "none" ?
      `Winner is player ${winner}` :
      `Draw` :
    `Player ${player}'s turn`

  const replayStyle: CSSProperties = {
    visibility: winner ? "visible" : "hidden"
  }

  return (
    <Fragment>
      <span>{status}</span>
      <GameBoard/>
      <button id="replay" style={replayStyle} onClick={() => replay()}>
        Play Again
      </button>
    </Fragment>
  )
}
