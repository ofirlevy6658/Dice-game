import { Component } from "react";
import Current from "./Current";
import "./css/board.css";

const Board = ({ currentScore }) => {
	return (
		<div className="board-content">
			<h1>PLAYER</h1>
			<h3>Score:</h3>
			<Current currentScore={currentScore} />
		</div>
	);
};

export default Board;
