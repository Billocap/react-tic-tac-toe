import checkForWin from "./checkForWin"

export default class GameStateAdapter {
  private state: GameState

  constructor(state: GameState) {
    this.state = {
      ...state,
      board: state.board.slice()
    }
  }

  get boardState() {
    return this.state.board
  }

  get isGameRunning() {
    return this.state.isGameRunning
  }

  get player() {
    return this.state.player
  }
  
  /**
   * Binary number that represents the board state relative to the current player.
   * 
   * For example the state `["X", "O", " ", " ", " ", " ", " ", "X", "O"]` is converted
   * to `0b100000010` in relation to `"X"` and `0b010000001` in relation to `"O"`.
   */
  get boardStateToBinary() {
    const filteredBoardState = this.boardState.map(n => {
      return Number(n == this.player)
    })

    return parseInt(filteredBoardState.join(""), 2)
  }

  get isBoardFull() {
    return !this.boardState.includes(" ")
  }

  get turnResult() {
    const winState = checkForWin(this.boardStateToBinary)

    return {
      winState,
      player: this.player
    }
  }

  isCellEmpty(cellId: number) {
    return this.boardState[cellId] == " "
  }

  isMoveValid(cellId: number) {
    return this.isGameRunning && this.isCellEmpty(cellId)
  }

  setCell(cellId: number) {
    this.boardState.splice(cellId, 1, this.player)
  }
}
