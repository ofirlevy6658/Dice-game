import React from "react";
import "./css/controlpanel.css";
import CustomBtn from "./CustomBtn";
import Dice from "./Dice";

const ControlPanel = ({ resetFunc, rollFunc, holdFunc, dice }) => {
	return (
		<div className="control">
			<CustomBtn nameBtn={"RESTART"} onClickFunc={resetFunc} />
			<Dice dice1={dice[0]} dice2={dice[1]} />
			<CustomBtn nameBtn={"ROLL DICE"} onClickFunc={rollFunc} />
			<CustomBtn nameBtn={"HOLD"} onClickFunc={holdFunc} />
		</div>
	);
};

export default ControlPanel;
