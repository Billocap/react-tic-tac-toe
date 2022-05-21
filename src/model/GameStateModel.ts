export const initialGameState: GameState = {
  isGameRunning: true,
  player: "X",
  winner: "",
  winState: null,
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
      
      newState.isGameRunning = false
      break

    case "STOP":
      newState.isGameRunning = false
      break
    
    case "RESET":
      return {...initialGameState}
  }

  return newState
}
