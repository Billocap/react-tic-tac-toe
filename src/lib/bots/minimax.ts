import boardStateToBinary from "../boardStateToBinary"
import checkForWin from "../checkForWin"

function gameTreeNodeChildren(node: BoardCellValues[], player: PlayerValues) {
  const children: BoardCellValues[][] = []
  
  node.forEach(function(cell, id) {
    if (cell == " ") {
      const child = node.slice()
      
      child.splice(id, 1, player)

      children.push(child)
    }
  })

  return children
}

const kernel = [
  3, 2, 3,
  2, 4, 2,
  3, 2, 3
]

function staticEvaluation(position: BoardCellValues[], player: string) {
  return position.reduce((a, n, id) => {
    const weight = n != " " ? -Number(n != player) : 1

    return a + weight * kernel[id]
  }, 0)
}

export default function minimax(
  position: BoardCellValues[],
  depth: number,
  player: PlayerValues
): [number, BoardCellValues[]] {
  if (depth == 0 || checkForWin(boardStateToBinary(position, player))) {
    return [staticEvaluation(position, player), position]
  }

  const children = gameTreeNodeChildren(position, player)
  let chosen = position

  if (player == "X") {
    let maxEval = -Infinity

    for (const child of children) {
      const [evaluation, state] = minimax(child, depth - 1, "X")

      if (evaluation > maxEval) {
        maxEval = evaluation
        chosen = state
      }
    }

    return [maxEval, chosen]
  } else {
    let minEval = Infinity

    for (const child of children) {
      const [evaluation, state] = minimax(child, depth - 1, "O")

      if (evaluation < minEval) {
        minEval = evaluation
        chosen = state
      }
    }

    return [minEval, chosen]
  }
}
