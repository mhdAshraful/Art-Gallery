import React from "react";

const Buttons = (props) => {
	return (
		
			<div className="my_button">
				<div className="btnName">{props.name}</div>
				<div className="btnDirection">{props.direction}</div>
			</div>
		
	);
};

export default Buttons;
