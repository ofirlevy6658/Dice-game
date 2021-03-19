import { Component } from "react";
import Board from "./Board";
import Board2 from "./Board2";
import ControlPanel from "./ControlPanel";
import "./css/game.css";

class Game extends Component {
	state = {
		total1: null,
		currentScore1: 0,
		total2: null,
		currentScore2: 0,
		dice: [null, null],
		turn: 0, // false mean player 1 , true player 2
	};

	roll = () => {
		const randomDice = Math.floor(Math.random() * 6) + 1;
		const randomDice2 = Math.floor(Math.random() * 6) + 1;
		const sum = randomDice + randomDice2;
		this.setState({
			dice: [randomDice, randomDice2],
		});
		sum === 12 ? this.changeTurn() : this.handelCurrentScore(sum);
	};
	hold = () => {
		if (!this.state.turn) {
			this.setState((prev) => ({ total1: prev.currentScore1 + prev.total1 }));
		} else {
			this.setState((prev) => ({ total2: prev.currentScore2 + prev.total2 }));
		}
		this.changeTurn();
	};

	changeTurn = async () => {
		if (!this.state.turn) {
			await this.setState({ currentScore1: 0 });
			await this.setState((prev) => ({ turn: !prev.turn }));
		} else {
			await this.setState({ currentScore2: 0 });
			await this.setState((prev) => ({ turn: !prev.turn }));
		}
	};
	handelCurrentScore = (sum) => {
		// player 1 turn
		if (!this.state.turn) {
			this.setState((prev) => ({ currentScore1: prev.currentScore1 + sum }));
		}
		//player 2 turn
		else {
			this.setState((prev) => ({ currentScore2: prev.currentScore2 + sum }));
		}
	};

	render() {
		return (
			<div className="container">
				<div className="game">
					<Board
						currentScore={this.state.currentScore1}
						turn={this.state.turn}
						totalScore={this.state.total1}
					/>
					<ControlPanel
						rollFunc={this.roll}
						holdFunc={this.hold}
						dice={this.state.dice}
					/>
					<Board2
						currentScore={this.state.currentScore2}
						turn={this.state.turn}
						totalScore={this.state.total2}
					/>
				</div>
			</div>
		);
	}
}

export default Game;
