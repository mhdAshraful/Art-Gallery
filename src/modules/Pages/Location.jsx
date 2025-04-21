import React, { useEffect } from "react";
import Map from "ol/Map.js";
import View from "ol/View.js";
import TileLayer from "ol/layer/Tile.js";
import { OSM } from "ol/source";
import { fromLonLat } from "ol/proj.js";

import Buttons from "../common/Buttons";
import marker from "/assets/images/marker.svg?url";
import Feature from "ol/Feature";
import { Point } from "ol/geom";
import { Icon, Style } from "ol/style";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import Footer from "../components/Footer";

const Location = () => {
	useEffect(() => {
		const lookat = [-71.309, 41.4852]; // longitude first, then latitude
		const artmeusium = fromLonLat(lookat);

		const Layer = new TileLayer({
			source: new OSM(),
		});

		// create marker using vector layer
		const artMeusum = new Feature({
			geometry: new Point(fromLonLat([-71.3081, 41.4858])),
		});

		artMeusum.setStyle(
			new Style({
				image: new Icon({
					color: "#D5966C",
					crossOrigin: "anonymous",
					src: marker,
				}),
			})
		);

		const vectorSource = new VectorSource({
			features: [artMeusum],
		});
		const vectorLayer = new VectorLayer({
			source: vectorSource,
		});

		// this is the same as the above code, but it is written in a more functional way
		const map = new Map({
			target: "map",
			layers: [Layer, vectorLayer],
			view: new View({
				center: artmeusium,
				zoom: 17,
			}),
		});

		map.renderSync();

		return () => {
			map.setTarget(null);
		};
	}, []);

	return (
		<div className="ourLocation">
			<a className="links" href="/">
				<Buttons direction="<" name="back to home" />
			</a>

			<OurLocation />
			<Footer disp={"loc"} />

			<div
				id="map"
				style={{
					position: "absolute",
					top: 0,
					bottom: 0,
					width: "100%",
					height: "100%",
					zIndex: -10,
				}}
			></div>
		</div>
	);
};
export default Location;

const OurLocation = () => {
	return (
		<>
			<div className="wrap">
				<div className="title heading-font">Our Location</div>
				<div className="details">
					<div className="heading heading-font">99 King Street</div>
					<div className="address">
						<p>Newport</p>
						<p>RI 02840 </p>
						<p>United States of America</p>
					</div>
					<div className="brief">
						Our newly opened gallery is located near the Edward King House
						on 99 King Street, the Modern Art Gallery is free to all
						visitors and open seven days a week from 8am to 9pm.
					</div>
				</div>
			</div>
		</>
	);
};
