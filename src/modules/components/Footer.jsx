import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = ({ disp }) => {
	const [hoverIcon, setHover] = useState(null);
	const mouseIN = (x) => {
		setHover(x);
	};
	const mouseOUT = () => {
		setHover(null);
	};

	return (
		<div
			className={`footer ${
				disp === "main" ? "ft_clr_main" : "ft_clr_location"
			}`}
		>
			<div className="left-side">
				<div className="heading-font logo-text ">
					MODERN <br /> ART GALLERY
				</div>
				<p className="desc-text">
					The Modern Art Gallery is free to all visitors and open seven
					days a week from 8am to 9pm. Find us at 99 King Street, Newport,
					USA.
				</p>
			</div>
			<div className="allIcons">
				<IconContext.Provider
					value={{
						color:
							hoverIcon === "facebook"
								? disp === "main"
									? "#d5966c"
									: "white"
								: disp === "main"
								? "white"
								: "black",
					}}
				>
					<a
						href="http://facebook.com"
						rel="noopener noreferrer"
						target="_blank"
					>
						<FaFacebookSquare
							style={{ fontSize: "1.6rem" }}
							onMouseOver={() => mouseIN("facebook")}
							onMouseOut={mouseOUT}
						/>
					</a>
				</IconContext.Provider>
				<IconContext.Provider
					value={{
						color:
							hoverIcon === "instagram"
								? disp === "main"
									? "#d5966c"
									: "white"
								: disp === "main"
								? "white"
								: "black",
					}}
				>
					<a
						href="http://instagram.com"
						rel="noopener noreferrer"
						target="_blank"
					>
						<FaInstagram
							style={{ fontSize: "1.6rem" }}
							onMouseOver={() => mouseIN("instagram")}
							onMouseOut={mouseOUT}
						/>
					</a>
				</IconContext.Provider>
				<IconContext.Provider
					value={{
						color:
							hoverIcon === "twitter"
								? disp === "main"
									? "#d5966c"
									: "white"
								: disp === "main"
								? "white"
								: "black",
					}}
				>
					<a
						href="http://twitter.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaSquareXTwitter
							style={{ fontSize: "1.6rem" }}
							onMouseOver={() => mouseIN("twitter")}
							onMouseOut={mouseOUT}
						/>
					</a>
				</IconContext.Provider>
			</div>
		</div>
	);
};
export default Footer;
