import { Component } from "react";
import Board from "./Board";
import ControlPanel from "./ControlPanel";
import "./css/game.css";

class Game extends Component {
	state = {
		score: 0,
		current: 0,
		dice: [null, null],
	};

	render() {
		return (
			<div className="container">
				<div className="game">
					<Board />
					<ControlPanel />
					<Board />
				</div>
			</div>
		);
	}
}

export default Game;
