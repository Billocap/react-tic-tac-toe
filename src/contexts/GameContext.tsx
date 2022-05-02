import { createContext, Dispatch, SetStateAction, useState } from "react"

import checkForWin from "../lib/checkForWin"

interface Props {
  children: any
}

interface GameContext {
  board: string[],
  setBoard: Dispatch<SetStateAction<string[]>>,
  setCell(id: number): void,
  [index: string]: any
}

export const GameContext = createContext({} as GameContext)

export default function GameController({ children }: Props) {
  const [board, setBoard] = useState<string[]>(new Array(9).fill(" "))
  const [player, setPlayer] = useState("X")
  const [winner, setWinner] = useState("")

  const context: GameContext = {
    board, setBoard, player, winner,
    setCell(id: number) {
      setBoard(prev => {
        if (prev[id] != " " || winner) return prev

        prev.splice(id, 1, player)
        
        const boardState = prev.map(n => n == player ? 1 : 0).join("")

        console.log(boardState)
        
        if (checkForWin(parseInt(boardState, 2))) {
          setWinner(player)
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
