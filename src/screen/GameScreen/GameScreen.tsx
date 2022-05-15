import { CSSProperties, Fragment, useContext } from "react"
import { X, ArrowsClockwise } from "phosphor-react"

import GameBoard from "../../components/GameBoard"
import { GameContext } from "../../contexts/GameContext"

import "./GameScreen.css"

export default function GameScreen({navigate}: any) {
  const { player, winner, isGameRunning, replay } = useContext(GameContext)

  const status = !isGameRunning ?
    winner ?
      `Winner is player ${winner}` :
      `Draw` :
    `Player ${player}'s turn`

  const replayButtonStyle: CSSProperties = {
    visibility: !isGameRunning ? "visible" : "hidden"
  }

  function replayGame() {
    replay()
  }

  return (
    <Fragment>
      <div id="game" className="screen">
        <button id="close" onClick={() => navigate("menu")}>
          <X weight="bold" size={15}/>
        </button>
        <span>{status}</span>
        <GameBoard/>
        <button id="replay" style={replayButtonStyle} onClick={replayGame}>
          <ArrowsClockwise size={40}/>
        </button>
      </div>
    </Fragment>
  )
}
