import React, {Component} from "react";
import "./cell.scss";

function Cell(props) {

    if ((props.cellData.state === 1) && (props.cellData.numAdjacentMines === 0) && (props.cellData.isMine === false)){
        return (
            <div className={"cellOpened"} onClick={() => props.onCellOpened(props.cellData)} onContextMenu={(e)=>{e.preventDefault(); props.onCycleCellFlag(props.cellData)}}>

            </div>
        )
    }
    if ((props.cellData.state === 1) && (props.cellData.numAdjacentMines === 1) && (props.cellData.isMine === false)){
        return (
            <div style={{color: "blue"}} className={"cellOpened"} onClick={() => props.onCellOpened(props.cellData)} onContextMenu={(e)=>{e.preventDefault(); props.onCycleCellFlag(props.cellData)}}>
                {props.cellData.numAdjacentMines}
            </div>
        )
    }
    if ((props.cellData.state === 1) && (props.cellData.numAdjacentMines === 2) && (props.cellData.isMine === false)){
        return (
            <div style={{color: "green"}} className={"cellOpened"} onClick={() => props.onCellOpened(props.cellData)} onContextMenu={(e)=>{e.preventDefault(); props.onCycleCellFlag(props.cellData)}}>
                {props.cellData.numAdjacentMines}
            </div>
        )
    }
    if ((props.cellData.state === 1) && (props.cellData.numAdjacentMines === 3) && (props.cellData.isMine === false)){
        return (
            <div style={{color: "red"}} className={"cellOpened"} onClick={() => props.onCellOpened(props.cellData)} onContextMenu={(e)=>{e.preventDefault(); props.onCycleCellFlag(props.cellData)}}>
                {props.cellData.numAdjacentMines}
            </div>
        )
    }
    if ((props.cellData.state === 1) && (props.cellData.numAdjacentMines === 4) && (props.cellData.isMine === false)){
        return (
            <div style={{color: "purple"}} className={"cellOpened"} onClick={() => props.onCellOpened(props.cellData)} onContextMenu={(e)=>{e.preventDefault(); props.onCycleCellFlag(props.cellData)}}>
                {props.cellData.numAdjacentMines}
            </div>
        )
    }
    if ((props.cellData.state === 1) && (props.cellData.numAdjacentMines === 5) && (props.cellData.isMine === false)){
        return (
            <div style={{color: "maroon"}} className={"cellOpened"} onClick={() => props.onCellOpened(props.cellData)} onContextMenu={(e)=>{e.preventDefault(); props.onCycleCellFlag(props.cellData)}}>
                {props.cellData.numAdjacentMines}
            </div>
        )
    }
    if ((props.cellData.state === 1) && (props.cellData.numAdjacentMines === 6) && (props.cellData.isMine === false)){
        return (
            <div style={{color: "turquoise"}} className={"cellOpened"} onClick={() => props.onCellOpened(props.cellData)} onContextMenu={(e)=>{e.preventDefault(); props.onCycleCellFlag(props.cellData)}}>
                {props.cellData.numAdjacentMines}
            </div>
        )
    }
    if ((props.cellData.state === 1) && (props.cellData.numAdjacentMines === 7) && (props.cellData.isMine === false)){
        return (
            <div style={{color: "black"}} className={"cellOpened"} onClick={() => props.onCellOpened(props.cellData)} onContextMenu={(e)=>{e.preventDefault(); props.onCycleCellFlag(props.cellData)}}>
                {props.cellData.numAdjacentMines}
            </div>
        )
    }
    if ((props.cellData.state === 1) && (props.cellData.numAdjacentMines === 8) && (props.cellData.isMine === false)){
        return (
            <div style={{color: "grey"}} className={"cellOpened"} onClick={() => props.onCellOpened(props.cellData)} onContextMenu={(e)=>{e.preventDefault(); props.onCycleCellFlag(props.cellData)}}>
                {props.cellData.numAdjacentMines}
            </div>
        )
    }
    if ((props.cellData.state === 1) && (props.cellData.isMine === true)){
        return (
            <div className={"cellOpened bomb"} onClick={() => props.onCellOpened(props.cellData)} onContextMenu={(e)=>{e.preventDefault(); props.onCycleCellFlag(props.cellData)}}>
                <img className="bombImg" src={require("./img/bomb.svg")}/>
            </div>
        )
    }

    if ((props.cellData.state === 0) && (props.cellData.flag === 1)){
        return (
            <div className={"cellClosed"} onContextMenu={(e)=>{e.preventDefault(); props.onCycleCellFlag(props.cellData)}}>
                <img className="bombImg" src={require("./img/flag.svg")}/>
            </div>
        )
    }
    if ((props.cellData.state === 0) && (props.cellData.flag === 2)){
        return (
            <div className={"cellClosed"} onClick={() => props.onCellOpened(props.cellData)} onContextMenu={(e)=>{e.preventDefault(); props.onCycleCellFlag(props.cellData)}}>
                ???
            </div>
        )
    }
    if ((props.cellData.isMine === true) && (props.gameState === 2)){
        return (
            <div className={"cellOpened"}>
                <img className="bombImg" src={require("./img/bomb.svg")}/>
            </div>
        )
    }
    return (
    <div className={"cellClosed"} onClick={() => props.onCellOpened(props.cellData)} onContextMenu={(e)=>{e.preventDefault(); props.onCycleCellFlag(props.cellData)}}>

    </div>
    )

}







export default Cell;