import React from "react";
// import "./css/controlpanel.css";

const CustomBtn = ({ nameBtn, rollFunc }) => {
	return (
		<button onClick={rollFunc} className="btn">
			{nameBtn}
		</button>
	);
};

export default CustomBtn;
