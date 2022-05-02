import { Component, Fragment } from "react";

class App extends Component {
    constructor() {
        super();

        this.state = {
            board: [
                null, null, null,
                null, null, null,
                null, null, null
            ],
            player: "X",
            history: [
                new Array(9).fill(null)
            ],
            step: 0,
            status: "Next Player: X"
        }
    }

    setCell = index => {
        const {board, player, history, step} = this.state;

        let newBoard = board.copy();

        const winner = checkWinner(newBoard);

        if (!winner) newBoard.set(index, player);
        
        if (winner !== null) {
            this.setState({
                board: newBoard,
                status: `${winner} is the winner !`
            });
        } else {
            this.setState({
                board: newBoard,
                player: player === "X" ? "O" : "X",
                status: `Next Player: ${player === "X" ? "O" : "X"}`,
                history: history.copy(step + 1).concat([newBoard]),
                step: step + 1
            });
        }
    };

    setBoard = (value, index) => {
        this.setState({
            board: value,
            step: index
        });
    };

    render() {
        const {board, history, status} = this.state;

        return (
            <Fragment>
                <div id="status">{status}</div>
                <Board board={board} onClick={this.setCell}/>
                <History history={history} onClick={this.setBoard}/>
            </Fragment>
        );
    }
}

export default null
