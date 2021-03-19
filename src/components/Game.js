import { Component } from "react";
import Board from "./Board";
import ControlPanel from "./ControlPanel";
import "./css/game.css";

class Game extends Component {
	state = {
		score: 0,
		current: 0,
		dice: [null, null],
		turn: 1,
	};
	roll = () => {
		const randomDice = Math.floor(Math.random() * 6) + 1;
		const randomDice2 = Math.floor(Math.random() * 6) + 1;
		this.setState({
			dice: [randomDice, randomDice2],
		});
		this.setState((prev) => ({ score: prev.score + randomDice + randomDice2 }));
	};

	render() {
		return (
			<div className="container">
				<div className="game">
					<Board currentScore={this.state.score} />
					<ControlPanel rollFunc={this.roll} dice={this.state.dice} />
					<Board currentScore={this.state.score} />
				</div>
			</div>
		);
	}
}

export default Game;
