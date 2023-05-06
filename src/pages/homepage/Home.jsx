import React from "react";
import Intro from "../../components/Intro/Intro";
import Userhomepage from "../userhomepage/Userhomepage";
import { useSelector } from "react-redux";

const Home = () => {
	const username = useSelector((state) => state.username.value);

	return <div>{username ? <Userhomepage /> : <Intro />}</div>;
};

export default Home;
