import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/gsap-core";

const Loading = ({ onComplete }) => {
	const [isComplete, seTcomplete] = useState(false);
	const [progress, setProgress] = useState(0);
	const lodRf = useRef();

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					clearInterval(interval);
					return 100;
				}
				return prev + 1; // Increase progress by 1 each time
			});
		}, 10); // Adjust speed of loading (milliseconds)

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		// console.log("ref", lodRf.current.style.opacity);
		if (progress === 100) {
			gsap.to(lodRf.current.style, {
				duration: 0.8,
				opacity: 0,
				onComplete: () => {
					onComplete();
				},
			});
		}
	}, [progress, onComplete]);

	return (
		<div
			ref={lodRf}
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				opacity: 1,
				width: "100vw",
				height: "100vh",
				backgroundColor: "#000",
				color: "#fff",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				transition: "opacity 1s ease-out",
			}}
		>
			<h1>Loading... {progress}%</h1>
			<div
				style={{
					width: "50%",
					height: "10px",
					backgroundColor: "#444",
					marginTop: "20px",
				}}
			>
				<div
					style={{
						width: `${progress}%`,
						height: "100%",
						backgroundColor: "#fff",
					}}
				/>
			</div>
		</div>
	);
};

export default Loading;
