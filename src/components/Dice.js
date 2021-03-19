import React from "react";

const Dice = ({ dice1, dice2 }) => {
	return (
		<div>
			<img height="70px" src={"img/dice-" + dice1 + ".png"} alt="dice img" />
			<img height="70px" src={"img/dice-" + dice2 + ".png"} alt="dice img" />
		</div>
	);
};

export default Dice;
