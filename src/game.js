import React, {Component} from "react";
import Board from "./board.js";
import {genBoard} from "./logic/game";
import "./game.scss";

class Game extends Component{
    state = {
        board: null,
        timer: 0,
        timerFunctionState: null,
        minesCounter: null,
        newMenuOpen: false
    };

    newGame = () => {
        this.setState({board: genBoard()});
        this.setState(prevState => ({minesCounter: prevState.board._numMines}));
        this.setState({timer: 0});
        clearInterval(this.state.timerFunctionState);
    };

    newGameBeginner = () => {
        this.setState({board: genBoard({rows: 8, cols: 8, mines: 10})});
        this.setState(prevState => ({minesCounter: prevState.board._numMines}));
        this.setState({timer: 0});
        clearInterval(this.state.timerFunctionState);
    };

    newGameIntermediate = () => {
        this.setState({board: genBoard({rows: 16, cols: 16, mines: 40})});
        this.setState(prevState => ({minesCounter: prevState.board._numMines}));
        this.setState({timer: 0});
        clearInterval(this.state.timerFunctionState);
    };

    newGameExpert = () => {
        this.setState({board: genBoard({rows: 24, cols: 24, mines: 99})});
        this.setState(prevState => ({minesCounter: prevState.board._numMines}));
        this.setState({timer: 0});
        clearInterval(this.state.timerFunctionState);
    };




    componentDidMount() {
        this.setState({board: genBoard({rows: 15, cols: 15})});
        this.setState(prevState => ({minesCounter: prevState.board._numMines}))
    };


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
        this.setState(this.reRender(), () => {
            if (boardStateBeforeOpen === 0 && this.state.board._state === 1) {
                let timerFunction = setInterval(() => (
                    this.setState(() => ({timer: this.state.timer + 1}))
                ), 1000);
                this.setState({timerFunctionState: timerFunction})
            }
        })
    };
    onCycleCellFlag = (cell) => {
        if (this.state.board == null)
            return null;
        if (!cell)
            return null;
        this.state.board.cycleCellFlag(cell.x,cell.y);
        let flagsCounter = 0;
        this.state.board.grid().forEach((row) => {
            row.forEach((el) => {
              if (el.flag === 1) {
                  flagsCounter++;
              }
            })
        });
        this.setState({minesCounter: this.state.board._numMines - flagsCounter});
        console.log(this.state.board._numMines);
        this.setState(this.reRender())
    };

    getFaceSrc() {
        if (this.state.board == null) {
            return "./img/smile.svg"
        }
        if (this.state.board.state() <= 1) {
            return "./img/smile.svg"
        }
        if (this.state.board.state() === 2) {
            clearInterval(this.state.timerFunctionState);
            return "./img/dead.svg"
        }
        if (this.state.board.state() === 3) {
            clearInterval(this.state.timerFunctionState);
            alert(`Gratulacje, wygrałeś! Twój czas to: ${this.state.timer}`);
            return "./img/laughing.svg"
        }
    }



    newGameMenu = () => {
        return (
            <ul>
                <li onClick={this.newGameBeginner}>Beginner</li>
                <li onClick={this.newGameIntermediate}>Intermediate</li>
                <li onClick={this.newGameExpert}>Expert</li>
            </ul>
        )
    };


    render() {
        console.log(this.getFaceSrc());
        if (!this.state.board)
            return null;
        return (
            <div className="gameView">
                <button onClick={() => this.setState({ newMenuOpen: true })}>New Game</button>
                { this.state.newMenuOpen ? this.newGameMenu() : null }
                <div className="headBox">
                <h1 className="score">Mines <span>{this.state.minesCounter}</span></h1>
                <img onClick={this.newGame} className="avatar" src={require(`${this.getFaceSrc()}`)}/>
                <h1 className="timer">Time <span>{this.state.timer}</span></h1>
                </div>
                <Board gameState={this.state.board.state()} board={this.state.board} onCellOpened={this.onCellOpened} onCycleCellFlag={this.onCycleCellFlag} showBomb={this.showBomb}/>
            </div>
        )
    }
}

export default Game;