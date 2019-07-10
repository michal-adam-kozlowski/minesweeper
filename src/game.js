import React, {Component} from "react";
import Board from "./board.js";
import {genBoard} from "./logic/game";
import "./game.scss";

class Game extends Component{
    state = {
        board: null,
    };
    componentDidMount() {
        this.setState({board: genBoard()});
    };


// (loose)showBomb
//     timer
//     win
    // this.board.state (componentdidupdate)


    reRender = () => {
        return (previousState) => {
            return { ...previousState};
        };
    };
    onCellOpened = (cell) => {
        if (this.state.board == null)
            return null;
        if (!cell)
            return null;

        const boardStateBeforeOpen = this.state.board.state;

        this.state.board.openCell(cell.x,cell.y);
        console.log("Click");
        this.setState(this.reRender(), () => {
            if (boardStateBeforeOpen === 0 && this.state.board.state === 1) {
                // create timer
            }
        })
    };
    onCycleCellFlag = (cell) => {
        if (this.state.board == null)
            return null;
        if (!cell)
            return null;
        this.state.board.cycleCellFlag(cell.x,cell.y);
        console.log("Flag");
        this.setState(this.reRender())
    };


    render() {
        if (!this.state.board)
            return null;
        return (
            <div className="gameView">
                <div className="headBox">
                <h1 className="score">Mines<span>{this.state.board._numMines}</span></h1>
                <img className="avatar" src={require("./img/smile.svg")}/>
                <h1 className="timer">Time<span> 00:00</span></h1>
                </div>
                <Board board={this.state.board} onCellOpened={this.onCellOpened} onCycleCellFlag={this.onCycleCellFlag}/>
            </div>
        )
    }
}

export default Game;