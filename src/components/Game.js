import { Component } from "react";
import Board from "./Board";
import Board2 from "./Board2";
import ControlPanel from "./ControlPanel";
import "./css/game.css";

class Game extends Component {
	state = {
		total1: 0,
		currentScore1: 0,
		total2: 0,
		currentScore2: 0,
		dice: [null, null],
		turn: 0, // false mean player 1 , true player 2
		goalPoints: 100,
		RoundFinish: false,
		wins1: 0,
		wins2: 0,
	};

	roll = () => {
		const randomDice = Math.floor(Math.random() * 6) + 1;
		const randomDice2 = Math.floor(Math.random() * 6) + 1;
		const sum = randomDice + randomDice2;
		this.setState({
			dice: [randomDice, randomDice2],
		});
		randomDice === randomDice2
			? this.changeTurn()
			: this.handelCurrentScore(sum);
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
		this.win();
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
	handelInput = (e) => {
		const input = e.target.value;
		if (input > 100) {
			e.target.setAttribute("id", "goodInput");
			this.setState({ goalPoints: input });
			e.target.placeholder = input;
		} else {
			e.target.setAttribute("id", "badInput");
		}
	};
	win() {
		console.log(this.state.goalPoints);
		if (this.state.goalPoints <= this.state.total1) {
			this.setState((prev) => ({ wins1: prev.wins1 + 1, RoundFinish: true }));
		} else if (this.state.goalPoints <= this.state.total2) {
			this.setState((prev) => ({ wins2: prev.wins2 + 1, RoundFinish: true }));
		}
	}

	reset = async () => {
		const randomTurn = Math.floor(Math.random() * 2);
		// after winning I need to render both of them so that why I set state to 1 and 0 before I random turn
		await this.setState({
			total1: 0,
			currentScore1: 0,
			total2: 0,
			currentScore2: 0,
			dice: [null, null],
			turn: 0,
			RoundFinish: false,
		});
		await this.setState({ turn: 1 });

		await this.setState({ turn: randomTurn });
	};

	render() {
		return (
			<div className="container">
				<div className="game">
					<Board
						currentScore={this.state.currentScore1}
						turn={this.state.turn}
						totalScore={this.state.total1}
						wins={this.state.wins1}
					/>
					<ControlPanel
						rollFunc={this.roll}
						holdFunc={this.hold}
						inputFunc={this.handelInput}
						resetFunc={this.reset}
						dice={this.state.dice}
						isRoundOver={this.state.RoundFinish}
					/>
					<Board2
						currentScore={this.state.currentScore2}
						turn={this.state.turn}
						totalScore={this.state.total2}
						wins={this.state.wins2}
					/>
				</div>
			</div>
		);
	}
}

export default Game;
