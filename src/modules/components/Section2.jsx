import React from "react";

const Section2 = (props) => {
	return (
		<div className=" leftAligned">
			<div className="headline heading-font leftHeadline ">
				{props.ww > 1023 ? (
					<>
						Your Day at <br /> the gallery
					</>
				) : (
					<>
						Your Day <br /> at the <br /> gallery
					</>
				)}
			</div>
			<p className="desc">
				The arts in the collection of the Modern Art Gallery all started
				from a spark of inspiration. Will these pieces inspire you? Visit us
				and find out.
			</p>
		</div>
	);
};

export default Section2;
