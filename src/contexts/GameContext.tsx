import { createContext, Dispatch, SetStateAction, useState } from "react"

import checkForWin from "../lib/checkForWin"

interface Props {
  children: any
}

interface GameContext {
  board: string[],
  setBoard: Dispatch<SetStateAction<string[]>>,
  setCell(id: number): void,
  replay(): void,
  [index: string]: any
}

export const GameContext = createContext({} as GameContext)

export default function GameController({ children }: Props) {
  const [board, setBoard] = useState(new Array<string>(9).fill(" "))
  const [player, setPlayer] = useState("X")
  const [winner, setWinner] = useState("")
  const [winState, setWinState] = useState(0)

  const context: GameContext = {
    board, setBoard, player, winner, winState,
    replay() {
      setBoard(new Array<string>(9).fill(" "))

      setPlayer("X")

      setWinner("")

      setWinState(0)
    },
    setCell(id: number) {
      setBoard(prev => {
        if (prev[id] != " " || winner) return prev

        prev.splice(id, 1, player)
        
        const boardState = prev.map(n => Number(n == player)).join("")

        const winState = checkForWin(parseInt(boardState, 2))
        
        if (winState) {
          setWinner(player)
          setWinState(winState)
        } else if (prev.includes(" ")) {
          setPlayer(player == "X" ? "O" : "X")
        } else {
          setWinner("none")
        }

        return prev.slice()
      })
    }
  }

  return (
    <GameContext.Provider value={context}>
      {children}
    </GameContext.Provider>
  )
}
