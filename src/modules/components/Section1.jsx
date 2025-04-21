import React, { useEffect, useRef } from "react";
import Buttons from "../common/Buttons";
import { Link, NavLink } from "react-router-dom";

const Section1 = () => {
	return (
		<div className="topHeading">
			<h1 className="headline heading-font ">
				Modern <br /> Art Gallery
			</h1>
			<div className="topDesc">
				<p className="desc">
					The arts in the collection of the Modern Art Gallery all started
					from a spark of inspiration. Will these pieces inspire you? Visit
					us and find out.
				</p>
				<a style={{ textDecoration: "none" }} href="/location">
					<Buttons name="Our Location" direction=">" />
				</a>
			</div>
		</div>
	);
};

export default Section1;
