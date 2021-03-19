import { Component } from "react";
import Current from "./Current";
import "./css/board.css";

class Board2 extends Component {
	shouldComponentUpdate({ turn }) {
		return turn ? true : false;
	}
	render() {
		return (
			<div className="board-content">
				<h1>PLAYER</h1>
				<h3>{this.props.totalScore}</h3>
				<Current currentScore={this.props.currentScore} />
			</div>
		);
	}
}

export default Board2;
