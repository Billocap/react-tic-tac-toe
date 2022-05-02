// Win conditions act as binary masks
const winConditions = [
  // Diagonals
  0b100_010_001,
  0b001_010_100,
  // Horizontals
  0b111_000_000,
  0b000_111_000,
  0b000_000_111,
  // Verticals
  0b100_100_100,
  0b010_010_010,
  0b001_001_001
]

/**
 * Checks if the board state matches any win condition.
 * @param state A binary number representing the board state.
 */
export default function checkForWin(state: number) {
  for (const condition of winConditions) {
    if ((condition & state) == condition) return true
  }

  return false
}
