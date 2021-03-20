import React from "react";
import "./css/controlpanel.css";
import CustomBtn from "./CustomBtn";
import Dice from "./Dice";
import CustomInput from "./CustomInput";

const ControlPanel = ({
	resetFunc,
	rollFunc,
	holdFunc,
	dice,
	inputFunc,
	isRoundOver,
}) => {
	return (
		<div className="control">
			<CustomBtn nameBtn={"RESTART"} onClickFunc={resetFunc} />
			{!isRoundOver && dice[0] && <Dice dice1={dice[0]} dice2={dice[1]} />}
			{!isRoundOver && (
				<CustomBtn nameBtn={"ROLL DICE"} onClickFunc={rollFunc} />
			)}
			{!isRoundOver && <CustomBtn nameBtn={"HOLD"} onClickFunc={holdFunc} />}
			{!isRoundOver && <CustomInput onChangeFunc={inputFunc} />}
		</div>
	);
};

export default ControlPanel;
