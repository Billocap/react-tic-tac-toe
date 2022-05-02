import { Fragment, useContext } from "react"

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

  const replayStyle = {
    display: winner ? "block" : "none"
  }

  return (
    <Fragment>
      <span>{status}</span>
      <GameBoard/>
      <button id="replay" style={replayStyle} onClick={() => replay()}>
        Replay
      </button>
    </Fragment>
  )
}
