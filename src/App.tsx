import { Fragment, useState } from "react"

import GameScreen from "./screen/GameScreen"
import MenuScreen from "./screen/MenuScreen"
import GameController from "./contexts/GameContext"

export default function App() {
  const [screen, setScreen] = useState("menu")

  const screens: any = {
    game:<GameController>
      <GameScreen navigate={() => setScreen("menu")}/>
    </GameController>,
    menu: <MenuScreen navigate={() => setScreen("game")}/>
  }

  return (
    <Fragment>
      {screens[screen]}
    </Fragment>
  )
}
