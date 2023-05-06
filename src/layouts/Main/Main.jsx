import React from "react";

// helper function
// import { fetchData } from "../../helper";

// react router
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";

const Main = () => {
	const username = useSelector((state) => state.username.value);
	return (
		<div>
			{username ? <Navbar /> : <></>}
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default Main;
