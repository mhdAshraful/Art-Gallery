import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import SceneGraph from "../../experience/SceneGraph";
import FontFaceObserver from "fontfaceobserver";
import Loading from "../components/Loading";

function Home() {
	// fonts
	useEffect(() => {
		(async function loadLonts() {
			const f1 = new FontFaceObserver("Big Shoulders Display");
			const f2 = new FontFaceObserver("Outfit");
			try {
				await Promise.all([f1.load(), f2.load()]);
				document.documentElement.classList.add("fonts-loaded");
			} catch (e) {
				console.error("Roboto font failed to load");
			}
		})();
	}, []);

	const updateIcon = (url) => {
		const link = document.querySelector("link[rel~='icon']");
		if (link) {
			link.href = url;
		} else {
			const newLink = document.createElement("link");
			newLink.rel = "icon";
			newLink.href = url;
			document.head.appendChild(newLink);
		}
	};
	updateIcon("./favicon_io/favicon.ico");

	const [loading, setLoading] = useState(true);
	const handleComplete = () => {
		setLoading(false);
	};

	return loading ? (
		<Loading onComplete={handleComplete} />
	) : (
		<Canvas
			shadows
			style={{
				width: "100%",
				height: "100%",
				position: "absolute",
				top: 0,
				left: 0,
				right: 0,
				zIndex: -10,
			}}
			gl={{
				powerPreference: "high-performance",
				antialias: true,
				alpha: true,
			}}
			camera={{
				fov: 45,
				near: 0.01,
				far: 100,
				position: [0, 0, 30],
			}}
		>
			{/* Scene Components */}
			<SceneGraph />
		</Canvas>
	);
}

export default Home;
