import React from "react";

const CustomInput = ({ onChangeFunc }) => {
	return (
		<div className="ui input">
			<input onChange={onChangeFunc} type="number" placeholder="100" />
		</div>
	);
};

export default CustomInput;
