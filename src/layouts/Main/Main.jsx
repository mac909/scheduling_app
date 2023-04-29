import React from "react";

// helper function
// import { fetchData } from "../../helper";

// react router
import { Outlet } from "react-router-dom";

const Main = () => {
	return (
		<div className="container">
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default Main;
