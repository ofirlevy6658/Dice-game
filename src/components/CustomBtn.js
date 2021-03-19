import React from "react";
// import "./css/controlpanel.css";

const CustomBtn = ({ nameBtn, onClickFunc }) => {
	return (
		<button onClick={onClickFunc} className="btn">
			{nameBtn}
		</button>
	);
};

export default CustomBtn;
