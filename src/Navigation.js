import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";


const Navigation = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Routes>
						<Route exact path="/" element={<Login />} />
						{/* <Route path="/home" element={<Home />} /> */}
						<Route render={() => <h1 className="notfound">Not found!</h1>} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default Navigation;