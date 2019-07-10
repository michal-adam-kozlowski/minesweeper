import React, {Component} from "react";
// import ReactDOM from "react-dom";
import Cell from "./cell.js"
import "./board.scss";

class Board extends Component{


    render() {
        if (!this.props.board) {
            return null;
        }
        console.log(this.props.board);

        return (

            <div className="board">
            {this.props.board.grid().map((rowArr) =>
                    <div className={"row"}>
                        {rowArr.map((cell) =>
                            <Cell cellData={cell} onCellOpened={this.props.onCellOpened} onCycleCellFlag={this.props.onCycleCellFlag}/>
                        )}
                    </div>
                )}
            </div>

        )
    }
}

// ReactDOM.render(<Board/>, document.getElementById("root"));

export default Board;