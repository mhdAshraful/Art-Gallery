import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./modules/Pages/Home";
import Location from "./modules/Pages/Location";
import ErrorPage from "./modules/Pages/ErrorPage";

const Root = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} errorElement={<ErrorPage />} />
				<Route path="/location" element={<Location />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Root;
