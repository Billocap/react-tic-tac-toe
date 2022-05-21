import boardStateToBinary from "./boardStateToBinary"
import checkForWin from "./checkForWin"

type SubscriberType = "human" | "ai"

interface Subscriber {
  type: SubscriberType,
  action: (...args: any[]) => void
}

export default class GameStateAdapter {
  private state: GameState
  private subscribers: Map<PlayerValues, Subscriber>

  constructor() {
    this.state = {} as any

    this.subscribers = new Map()
  }
  
  private get boardStateToBinary() {
    return boardStateToBinary(this.boardState, this.player)
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

  setBoard(boardState: BoardCellValues[]) {
    this.state.board = boardState
  }

  updateState(state: GameState) {
    this.state = {
      ...state,
      board: state.board.slice()
    }
  }
  
  onNotification() {}

  subscribe(player: PlayerValues, type: SubscriberType, action: (...args: any[]) => void) {
    this.subscribers.set(player, {type, action})
  }

  notify(player: PlayerValues, type: SubscriberType, ...args: any[]) {
    if (this.player != player) return

    const subscriber = this.subscribers.get(player)

    if (subscriber && subscriber.type == type) {
      subscriber.action(args)

      this.onNotification()
    }
  }
}
