import { Fragment, useContext } from "react"

import GameBoard from "./components/GameBoard"
import { GameContext } from "./contexts/GameContext"

export default function App() {
  const { player, winner } = useContext(GameContext)

  const status = winner ?
    winner != "none" ?
      `Winner is player ${winner}` :
      `Draw` :
    `Player ${player}'s turn`

  return (
    <Fragment>
      <span>{status}</span>
      <GameBoard/>
    </Fragment>
  )
}
