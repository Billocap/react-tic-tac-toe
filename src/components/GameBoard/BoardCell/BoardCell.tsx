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

  return (
    <button onClick={handleClick}>
      {value}
    </button>
  )
}
