import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Intro from "../../components/Intro/Intro";

const Home = () => {
	const userName = useSelector((state) => state.username.value);

	return (
		<>
			{userName ? (
				<div>
					<h1>Welcome {userName}!!</h1>
				</div>
			) : (
				<Intro />
			)}
		</>
	);
};

export default Home;
