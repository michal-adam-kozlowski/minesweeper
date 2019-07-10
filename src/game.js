import React, {Component} from "react";
import Board from "./board.js";
import {genBoard} from "./logic/game";
import "./game.scss";

class Game extends Component{
    state = {
        board: null,
        timer: 0
    };


    // loading = () => {
    //     console.log("poszło");
    //     setInterval(() => (
    //         this.setState(() => ({timer: this.state.timer + 1}))
    //     ), 1000)
    // };

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

        const boardStateBeforeOpen = this.state.board._state;

        this.state.board.openCell(cell.x,cell.y);
        console.log("Click");
        console.log(boardStateBeforeOpen);
        console.log(this.state.board.state);
        this.setState(this.reRender(), () => {
            if (boardStateBeforeOpen === 0 && this.state.board._state === 1) {
                setInterval(() => (
                    this.setState(() => ({timer: this.state.timer + 1}))
                ), 1000)
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
                <h1 className="timer">Time<span>{this.state.timer}</span></h1>
                </div>
                <Board board={this.state.board} onCellOpened={this.onCellOpened} onCycleCellFlag={this.onCycleCellFlag}/>
            </div>
        )
    }
}

export default Game;