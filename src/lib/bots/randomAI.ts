function randInt(max: number) {
  return Math.floor(Math.random() * max)
}

export default function randomAI(boardState: BoardCellValues[]) {
  let cellId = randInt(boardState.length)

  while (boardState[cellId] != " ") {
    cellId = randInt(boardState.length)
  }
  
  return cellId
}
