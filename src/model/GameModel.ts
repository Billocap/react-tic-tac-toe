export const initialGameState: GameState = {
  gameIsRunning: true,
  player: "X",
  winner: "",
  winState: 0,
  board: [
    " ", " ", " ",
    " ", " ", " ",
    " ", " ", " "
  ]
}

export default function gameStateReducer(state: GameState, action: GameStateActions): GameState {
  const newState = {...state}

  switch (action.type) {
    case "SET_BOARD":
      newState.board = action.value.board
      break
    
    case "TOGGLE_PLAYER":
      newState.player = state.player == "X" ? "O" : "X"
      break
    
    case "PLAYER_WON":
      newState.winner = action.value.player
      newState.winState = action.value.winState
      newState.gameIsRunning = false
      break

    case "STOP":
      newState.gameIsRunning = false
      break
    
    case "RESET":
      return {...initialGameState}
  }

  return newState
}
