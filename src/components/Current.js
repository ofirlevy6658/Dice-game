import React from "react";
import "./css/current.css";

const Current = ({ currentScore }) => {
	return (
		<div className="scoreBox">
			<h1>{currentScore}</h1>
		</div>
	);
};

export default Current;
