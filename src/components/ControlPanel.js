import React from "react";
import "./css/controlpanel.css";
import CustomBtn from "./CustomBtn";
import Dice from "./Dice";
const ControlPanel = () => {
	return (
		<div className="control">
			<CustomBtn nameBtn={"RESTART GAME"} />
			<Dice dice1={1} dice2={5} />
			<CustomBtn nameBtn={"ROLL DICE"} />
			<CustomBtn nameBtn={"HOLD"} />
		</div>
	);
};

export default ControlPanel;
