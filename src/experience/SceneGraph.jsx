import React, {
	Suspense,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import { Vector3 } from "three";
import { Preload, Scroll, ScrollControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Display from "./Display";
import Section1 from "@modules/components/Section1";
import Section2 from "@modules/components/Section2";
import Section3 from "@modules/components/Section3";
import Footer from "@modules/components/Footer";

gsap.registerPlugin(useGSAP);

const SceneGraph = () => {
	const [numberOfpages, SetPage] = useState(4.2);
	const [ww, setWW] = useState(window.innerWidth);
	const [hh, setHH] = useState(window.innerHeight);

	const [texture, setTx] = useState([
		"../src/assets/images/desktop/hero-m.jpg",
		"../src/assets/images/desktop/image-grid-1@2x.jpg",
		"../src/assets/images/desktop/image-grid-2@2x.jpg",
		"../src/assets/images/desktop/image-grid-3@2x.jpg",
	]);

	useEffect(() => {
		const handleResize = () => {
			setWW(window.innerWidth);
			setHH(window.innerHeight);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const updatePhoto = () => {
			if (ww >= 768) {
				setTx([
					"../src/assets/images/desktop/hero-d.jpg",
					"../src/assets/images/desktop/image-grid-1@2x.jpg",
					"../src/assets/images/desktop/image-grid-2@2x.jpg",
					"../src/assets/images/desktop/image-grid-3@2x.jpg",
				]);
			} else {
				setTx([
					"../src/assets/images/desktop/hero-m.jpg",
					"../src/assets/images/desktop/image-grid-1@2x.jpg",
					"../src/assets/images/desktop/image-grid-2@2x.jpg",
					"../src/assets/images/desktop/image-grid-3@2x.jpg",
				]);
			}
		};

		const updatePageNumbers = () => {
			ww <= 767
				? SetPage(() => 4.5)
				: ww >= 768 && ww <= 1439
				? SetPage(() => 2.5)
				: SetPage(() => 3.5);
		};

		updatePhoto();
		updatePageNumbers();

		window.addEventListener("resize", updatePhoto);
		window.addEventListener("resize", updatePageNumbers);
		return () => (
			window.removeEventListener("resize", updatePhoto),
			window.removeEventListener("resize", updatePageNumbers)
		);
	}, [ww, hh]);

	const { width, height } = useThree((state) =>
		state.viewport.getCurrentViewport()
	);

	// three image positioning
	const [o, setO] = useState(new Vector3(0, height / 3, 0));
	const [oS, setOs] = useState(new Vector3(width, height / 3, 1));
	const [p, setP] = useState(new Vector3(0, -height * 0.76, 0));
	const [q, setQ] = useState(new Vector3(0, -height * 1.8, 0));
	const [s, setS] = useState(new Vector3(0, -height * 2.36, 0));
	const [pS, setPs] = useState(new Vector3(width * 0.9, height * 0.5, 1));
	const [qS, setQs] = useState(new Vector3(width * 0.9, height * 0.7, 1));
	const [sS, setSs] = useState(new Vector3(width * 0.9, height * 0.36, 1));
	/* 
┌─────────────────────────────────────────────────────────────────────────┐
│ All photo positioning & scale  													              │
└─────────────────────────────────────────────────────────────────────────┘
*/

	useGSAP(() => {
		let mm = gsap.matchMedia();
		mm.add(
			{
				isMobile: "(min-width:300px) and (max-width:767px)",
				isTablet: "(min-width:768px) and (max-width:1439px)",
				isDesktop: "(min-width:1440px)",
			},
			(context) => {
				let aspectW = ww / width;
				let aspectH = hh / height;

				let { isMobile, isTablet, isDesktop } = context.conditions;

				console.log("constext", context.conditions);
				console.log("mobile,tablet,desk,", isMobile, isTablet, isDesktop);

				/*
  ┌─────────────────────────────────────────────────────────────────────────────┐
  │         picture location                                                    │
  └─────────────────────────────────────────────────────────────────────────────┘
*/
				// O----
				gsap.to(o, {
					x: isMobile
						? 0
						: isTablet
						? -width / 4.5
						: isDesktop
						? width * 0.01
						: 0,
					y: isMobile
						? height / 3
						: isTablet
						? height / 6.5
						: isDesktop
						? 0
						: 0,
					onUpdate: () => setO(new Vector3(o.x, o.y, 0)),
				});
				gsap.to(oS, {
					x: isMobile
						? width
						: isTablet
						? width * 0.6
						: isDesktop
						? width * 0.4
						: width,
					y: isMobile
						? height / 3
						: isTablet
						? height * 0.8
						: isDesktop
						? height
						: height / 3,
					onUpdate: () => setOs(new Vector3(oS.x, oS.y, 1)),
				});

				// P--------
				gsap.to(p, {
					x: isMobile
						? 0
						: isTablet
						? width / 5.5
						: isDesktop
						? width / 6
						: width / 6,
					y: isMobile
						? -height * 0.9
						: isTablet
						? -height * 0.58
						: isDesktop
						? -height
						: -height * 0.6,
					onUpdate: () => setP(new Vector3(p.x, p.y, 0)),
				});
				gsap.to(pS, {
					x: isMobile
						? width * 0.9
						: isTablet
						? width * 0.5
						: isDesktop
						? width * 0.5
						: width / 2,
					y: isMobile
						? height * 0.5
						: isTablet
						? height * 0.45
						: isDesktop
						? height * 0.6
						: height * 0.6,
					onUpdate: () => setPs(new Vector3(pS.x, pS.y, 1)),
				});

				// Q-----
				gsap.to(q, {
					x: isMobile
						? 0
						: isTablet
						? -width * 0.2
						: isDesktop
						? -width / 6
						: 0,
					y: isMobile
						? -height * 2.1
						: isTablet
						? -height * 1.21
						: isDesktop
						? -height * 1.8
						: -height * 1.8,
					onUpdate: () => setQ(new Vector3(q.x, q.y, 0)),
				});
				gsap.to(qS, {
					x: isMobile
						? width * 0.9
						: isTablet
						? width * 0.5
						: isDesktop
						? width * 0.44
						: width * 0.9,
					y: isMobile
						? height * 0.72
						: isTablet
						? height * 0.76
						: isDesktop
						? height * 0.93
						: height * 0.72,
					onUpdate: () => setQs(new Vector3(qS.x, qS.y, 1)),
				});

				// S----------
				gsap.to(s, {
					x: isMobile
						? 0
						: isTablet
						? width * 0.26
						: isDesktop
						? width * 0.25
						: width / 6,
					y: isMobile
						? -height * 2.7
						: isTablet
						? -height * 0.98
						: isDesktop
						? -height * 1.53
						: -height / 6,
					onUpdate: () => setS(new Vector3(s.x, s.y, 0)),
				});
				gsap.to(sS, {
					x: isMobile
						? width * 0.9
						: isTablet
						? width * 0.35
						: isDesktop
						? width * 0.34
						: width * 2,
					y: isMobile
						? height * 0.4
						: isTablet
						? height * 0.3
						: isDesktop
						? height * 0.4
						: height / 6,
					onUpdate: () => setSs(new Vector3(sS.x, sS.y, 1)),
				});
			}
		);
	}, [ww, hh]);

	return (
		<Suspense fallback={null}>
			<ScrollControls damping={0.3} pages={numberOfpages} distance={1}>
				<Scroll>
					{/* O */}
					<Display texture={texture[0]} position={o} scale={oS} />
					{/* P */}
					<Display texture={texture[1]} position={p} scale={pS} />
					{/* Q */}
					<Display texture={texture[2]} position={q} scale={qS} />
					{/* S */}
					<Display texture={texture[3]} position={s} scale={sS} />
				</Scroll>
				<Scroll html>
					{ww >= 1440 && <div className="blackThing"></div>}

					<div className="sections topS1">
						<Section1 />
					</div>
					<div className="sections topS2">
						<Section2 ww={ww} />
					</div>
					<div className="sections topS3">
						<Section3 />
					</div>
					<div id="foot_section">
						<Footer disp={"main"} />
					</div>
				</Scroll>

				<Preload />
			</ScrollControls>
		</Suspense>
	);
};

export default SceneGraph;
