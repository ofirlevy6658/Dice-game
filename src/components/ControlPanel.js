import React from "react";
import "./css/controlpanel.css";
import CustomBtn from "./CustomBtn";
import Dice from "./Dice";
const ControlPanel = ({ rollFunc, dice }) => {
	return (
		<div className="control">
			<CustomBtn nameBtn={"RESTART GAME"} />
			<Dice dice1={dice[0]} dice2={dice[1]} />
			<CustomBtn nameBtn={"ROLL DICE"} rollFunc={rollFunc} />
			<CustomBtn nameBtn={"HOLD"} />
		</div>
	);
};

export default ControlPanel;
