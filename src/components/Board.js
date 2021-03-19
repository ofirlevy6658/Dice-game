import { Component } from "react";
import Current from "./Current";
import "./css/board.css";
class Board extends Component {
	render() {
		return (
			<div className="board-content">
				<h1>PLAYER</h1>
				<h3>Score:</h3>
				<Current />
			</div>
		);
	}
}

export default Board;
