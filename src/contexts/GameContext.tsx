import { createContext, useReducer } from "react"

import boardStateToBinary from "../lib/boardStateToBinary"
import checkForWin from "../lib/checkForWin"
import gameStateReducer, { initialGameState } from "../model/GameModel"

interface GameControllerProps {
  children: any
}

interface GameContext extends GameState {
  setCell(id: number): void,
  replay(): void
}

export const GameContext = createContext({} as GameContext)

export default function GameController({ children }: GameControllerProps) {
  const [gameState, dispatchGameState] = useReducer(gameStateReducer, initialGameState)

  const context: GameContext = {
    ...gameState,
    replay() {
      dispatchGameState({
        type: "RESET"
      })
    },
    setCell(id: number) {
      const boardState = gameState.board.slice()
      
      if (boardState[id] != " " || !gameState.gameIsRunning) return

      boardState.splice(id, 1, gameState.player)

      const binaryBoardState = boardStateToBinary(boardState, gameState.player)

      const winState = checkForWin(binaryBoardState)

      if (winState) {
        dispatchGameState({
          type: "PLAYER_WON",
          value: {
            winState,
            player: gameState.player
          }
        })
      } else if (boardState.includes(" ")) {
        dispatchGameState({
          type: "TOGGLE_PLAYER"
        })
      } else {
        dispatchGameState({
          type: "STOP"
        })
      }

      dispatchGameState({
        type: "SET_BOARD",
        value: {
          board: boardState
        }
      })
    }
  }

  return (
    <GameContext.Provider value={context}>
      {children}
    </GameContext.Provider>
  )
}
