import React from "react";
import { Link } from "react-router-dom";

const Buttons = (props) => {
	return (
		<div className="my_button">
			<div className="btnName">{props.name}</div>
			<div className="btnDirection">{props.direction}</div>
		</div>
	);
};

export default Buttons;
