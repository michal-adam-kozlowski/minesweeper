import React, {Component} from "react";
import Game from './game.js';
import "./home.scss";

function Home() {

    // let newGame = () => {
    //   return (
    //       ReactDOM.render(<Game/>, document.getElementById('root'))
    //   )
    // };

    return (
        <Game/>
    )
}

export default Home;