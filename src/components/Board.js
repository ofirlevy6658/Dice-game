import { Component } from "react";
import Current from "./Current";
import "./css/board.css";

class Board extends Component {
	shouldComponentUpdate({ turn }) {
		return !turn ? true : false;
	}
	render() {
		return (
			<div className="board-content board1">
				<h1>PLAYER1</h1>
				<h1>{this.props.totalScore}</h1>
				<Current currentScore={this.props.currentScore} />
			</div>
		);
	}
}

export default Board;
