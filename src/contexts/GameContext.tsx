import { createContext, useReducer } from "react"

import GameStateAdapter from "../lib/GameStateAdapter"
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

  const gameStateAdapter = new GameStateAdapter(gameState)

  const context: GameContext = {
    ...gameState,
    replay() {
      dispatchGameState({
        type: "RESET"
      })
    },
    setCell(cellId: number) {
      if (gameStateAdapter.isMoveValid(cellId)) {
        gameStateAdapter.setCell(cellId)
  
        const turnResult = gameStateAdapter.turnResult
  
        if (turnResult.winState) {
          dispatchGameState({
            type: "PLAYER_WON",
            value: turnResult
          })
        } else if (!gameStateAdapter.isBoardFull) {
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
            board: gameStateAdapter.boardState
          }
        })
      }
    }
  }

  return (
    <GameContext.Provider value={context}>
      {children}
    </GameContext.Provider>
  )
}
