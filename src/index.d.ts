type PlayerValues = "X" | "O"
type BoardCellValues = PlayerValues | " "

interface GameState {
  gameIsRunning: boolean,
  player: PlayerValues,
  winner: PlayerValues | "",
  winState: number,
  board: BoardCellValues[]
}

interface GameStateSetBoardAction {
  type: "SET_BOARD",
  value: {
    board: BoardCellValues[]
  }
}

interface GameStatePlayerWonAction {
  type: "PLAYER_WON",
  value: {
    player: PlayerValues,
    winState: number
  }
}

interface GameStateActionWithoutValue {
  type: "RESET" | "STOP" | "TOGGLE_PLAYER"
}

type GameStateActions = GameStateSetBoardAction | GameStatePlayerWonAction | GameStateActionWithoutValue
