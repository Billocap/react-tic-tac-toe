type PlayerValues = "X" | "O"
type BoardCellValues = PlayerValues | " "

type BoardDiagonals = "DIAGONAL_1" | "DIAGONAL_2"
type BoardHorizontals = "HORIZONTAL_TOP" | "HORIZONTAL_MIDDLE" | "HORIZONTAL_BOTTOM"
type BoardVerticals = "VERTICAL_LEFT" | "VERTICAL_MIDDLE" | "VERTICAL_RIGHT"

interface GameState {
  isGameRunning: boolean,
  player: PlayerValues,
  winner: PlayerValues | "",
  winState: BoardDiagonals | BoardHorizontals | BoardVerticals | null,
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
    winState: BoardDiagonals | BoardHorizontals | BoardVerticals | null
  }
}

interface GameStateActionWithoutValue {
  type: "RESET" | "STOP" | "TOGGLE_PLAYER"
}

type GameStateActions = GameStateSetBoardAction | GameStatePlayerWonAction | GameStateActionWithoutValue
