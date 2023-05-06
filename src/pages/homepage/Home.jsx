import React from "react";
import Intro from "../../components/Intro/Intro";
import Userhomepage from "../userhomepage/Userhomepage";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
	const username = useSelector((state) => state.username.value);

	return (
		<div>
			{username ? <Navbar /> : <></>}
			{username ? <Userhomepage /> : <Intro />}
		</div>
	);
};

export default Home;
