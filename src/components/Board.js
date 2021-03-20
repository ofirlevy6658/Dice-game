import { Component } from "react";
import Current from "./Current";
import "./css/board.css";

class Board extends Component {
	shouldComponentUpdate({ turn }) {
		if (!turn) {
			document.querySelector(".board1").classList.add("turn");
			return true;
		} else {
			document.querySelector(".board1").classList.remove("turn");
			return false;
		}
	}
	render() {
		return (
			<div className="board-content board1">
				<h1>PLAYER1</h1>
				<h1>{this.props.totalScore}</h1>
				<p>WINS:{this.props.wins}</p>
				<Current currentScore={this.props.currentScore} />
			</div>
		);
	}
}

export default Board;
