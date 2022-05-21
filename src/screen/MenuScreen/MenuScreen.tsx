import { Fragment, useState } from "react"
import { Monitor, GlobeSimple, User, SignIn } from "phosphor-react"

import { gameStateAdapter } from "../../contexts/GameContext"
import { randomAI } from "../../lib/bots"

import "./MenuScreen.css"

export default function MenuScreen({navigate}: any) {
  const [localOpen, setLocal] = useState(true)
  const [onlineOpen, setOnline] = useState(true)

  function LocalGame() {
    return (
      localOpen ?
        <button
          className="l"
          onClick={() => {
            setLocal(false)
            setOnline(true)
          }}
        >
          <Monitor size={30}/>
          Local
        </button> :
        (<Fragment>
          <button className="tl" onClick={() => {
            gameStateAdapter.subscribe("X", "human", (cellId: number) => {
              gameStateAdapter.setCell(cellId)
            })
        
            gameStateAdapter.subscribe("O", "human", (cellId: number) => {
              gameStateAdapter.setCell(cellId)
            })
            
            navigate()
          }}>
            <User size={30}/>
            vs Human
          </button>
          <button
            className="bl"
            onClick={() => {
              gameStateAdapter.subscribe("X", "human", (cellId: number) => {
                gameStateAdapter.setCell(cellId)
              })
          
              gameStateAdapter.subscribe("O", "ai", () => {
                const cellId = randomAI(gameStateAdapter.boardState)
                
                gameStateAdapter.setCell(cellId)
              })

              navigate()
            }}
            title="Coming Soon"
          >
            <Monitor size={30}/>
            vs Computer
          </button>
        </Fragment>)
    )
  }

  function OnlineGame() {
    return (
      onlineOpen ?
        <button
          className="r"
          onClick={() => {
            setOnline(false)
            setLocal(true)
          }}
          title="Coming Soon"
          disabled
        >
          <GlobeSimple size={30}/>
          Online
        </button> :
        (<Fragment>
          <button className="tr" onClick={() => setOnline(true)}>
            <SignIn size={30}/>
            Enter game
          </button>
          <button className="br" onClick={() => setOnline(true)}>
            <GlobeSimple size={30}/>
            Host game
          </button>
        </Fragment>)
    )
  }

  return (
    <Fragment>
      <div id="menu" className="screen">
        <h1 id="header">Tic Tac Toe</h1>
        <LocalGame/>
        <OnlineGame/>
      </div>
    </Fragment>
  )
}
