import { useContext } from "react"

import { GameContext } from "../../../contexts/GameContext"

import "./BoardCell.css"

interface Props {
  value: string,
  index: number
}

export default function BoardCell({ value, index }: Props) {
  const { setCell } = useContext(GameContext)

  const handleClick = () => {
    setCell(index)
  }

  const getPlayer = () => {
    switch (value) {
      case "X":
        return (
          <svg viewBox="0 0 30 30">
            <line className="line" x1="3" y1="3" x2="27" y2="27"/>
            <line className="line" x1="27" y1="3" x2="3" y2="27"/>
          </svg>
        )
      
      case "O":
        return (
          <svg viewBox="0 0 30 30">
            <circle className="circle" cx="15" cy="15" r="11"/>
          </svg>
        )
      
      default:
        return null
    }
  }

  return (
    <button onClick={handleClick}>
      {getPlayer()}
    </button>
  )
}
