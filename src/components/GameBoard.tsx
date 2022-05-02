import BoardCell from "./BoardCell"

interface Props {
  board: string[],
  onClick: any
}

export default function Board({board, onClick}: Props) {
  const rowSquares = board.map((square, index) => {
    return <BoardCell index={index} value={square} onClick={onClick}/>
  })

  return (
    <table id="board">
      <tr>{rowSquares.slice(0,3)}</tr>
      <tr>{rowSquares.slice(3,6)}</tr>
      <tr>{rowSquares.slice(6,9)}</tr>
    </table>
  )
}
