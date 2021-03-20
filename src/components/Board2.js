import { Component } from "react";
import Current from "./Current";
import "./css/board.css";

class Board2 extends Component {
	shouldComponentUpdate({ turn }) {
		if (turn) {
			document.querySelector(".board2").classList.add("turn");
			return true;
		} else {
			document.querySelector(".board2").classList.remove("turn");
			return false;
		}
	}
	render() {
		return (
			<div className="board-content board2">
				<h1>PLAYER2</h1>
				<h1>{this.props.totalScore}</h1>
				<Current currentScore={this.props.currentScore} />
			</div>
		);
	}
}

export default Board2;
