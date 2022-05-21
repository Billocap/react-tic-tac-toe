/**
 * Converts the state of the board to a binary number, the conversion is made
 * relative to a player.
 * 
 * For example the state `["X", "O", " ", " ", " ", " ", " ", "X", "O"]` is converted
 * to `0b100000010` in relation to `"X"` and `0b010000001` in relation to `"O"`.
 * 
 * @param state The current board state.
 * @param player The player to consider.
 * @returns Binary number that represents the board state.
 */
 export default function boardStateToBinary(state: BoardCellValues[], player: PlayerValues) {
  const filteredBoardState = state.map(n => Number(n == player))

  return parseInt(filteredBoardState.join(""), 2)
}
