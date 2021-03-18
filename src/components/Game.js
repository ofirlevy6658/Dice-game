import { Component } from "react";
import Board from "./Board";
import Roll from "./Roll";
import "./css/game.css";
class Game extends Component {
	render() {
		return (
			<div className="container">
				<div className="game">
					<Board />
					<Roll />
					<Board />
				</div>
			</div>
		);
	}
}

export default Game;
