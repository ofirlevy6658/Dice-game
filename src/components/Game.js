import { Component } from "react";
import Board from "./Board";
import Board2 from "./Board2";
import ControlPanel from "./ControlPanel";
import "./css/game.css";

class Game extends Component {
	state = {
		score: 0,
		current: 0,
		dice: [null, null],
		turn: false, // false mean player1 turn and true player2
	};
	roll = () => {
		const randomDice = Math.floor(Math.random() * 6) + 1;
		const randomDice2 = Math.floor(Math.random() * 6) + 1;
		const sum = randomDice + randomDice2;
		this.setState({
			dice: [randomDice, randomDice2],
		});
		this.setState((prev) => ({ score: prev.score + sum }));
		if (sum === 12) this.setState((prev) => ({ turn: !prev.turn }));
		console.log(this.state.turn);
	};

	render() {
		return (
			<div className="container">
				<div className="game">
					<Board currentScore={this.state.score} turn={this.state.turn} />
					<ControlPanel rollFunc={this.roll} dice={this.state.dice} />
					<Board2 currentScore={this.state.score} turn={this.state.turn} />
				</div>
			</div>
		);
	}
}

export default Game;
