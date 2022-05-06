import { useContext } from "react"

import { GameContext } from "../../../contexts/GameContext"

import "./BoardCell.css"

interface BoardCellProps {
  value: string,
  index: number
}

export default function BoardCell({ value, index }: BoardCellProps) {
  const { setCell } = useContext(GameContext)

  const handleClick = () => {
    setCell(index)
  }

  const getPlayer = () => {
    switch (value) {
      case "X":
        return (
          <svg viewBox="0 0 30 30">
            <defs>
              <linearGradient id="line-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#EE310B"/>
                <stop offset="100%" stopColor="#E80C1F"/>
              </linearGradient>
            </defs>
            
            <line className="line" x1="3" y1="3" x2="27" y2="27"/>
            <line className="line" x1="27" y1="3" x2="3" y2="27"/>
          </svg>
        )
      
      case "O":
        return (
          <svg viewBox="0 0 30 30">
            <defs>
              <linearGradient id="circle-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0F86E2"/>
                <stop offset="100%" stopColor="#350CE8"/>
              </linearGradient>
            </defs>

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
