import React from "react";

const CustomBtn = ({ nameBtn, onClickFunc }) => {
	return (
		<button onClick={onClickFunc} id="btn" className="ui positive button">
			{nameBtn}
		</button>
	);
};

export default CustomBtn;
