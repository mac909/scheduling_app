import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newUser } from "./introSlice";
import introImage from "../../assets/introImage.svg";
import { Form } from "react-router-dom";
import timeImage from "../../assets/time.jpg";

const Intro = () => {
	const user = useSelector((state) => state.username.value);
	const dispatch = useDispatch();
	const [newUserName, setNewUserName] = useState("");

	return (
		<div>
			<h1 className="text-4xl font-bold text-center text-gray-900 my-20">
				Effortlessly manage your time, achieve more
			</h1>
			<div className="grid grid-cols-1 gap-4 xl:grid-cols-2 m-4 ">
				<div className="my-auto mx-auto">
					<p className="m-4 text-lg">
						Effective{" "}
						<span className="text-3xl text-secondary font-medium">
							time management
						</span>{" "}
						is crucial for success. It allows individuals to
						accomplish more, reduce stress, and prioritize their
						goals. Make{" "}
						<span className=" text-3xl text-secondary font-medium">
							time management
						</span>{" "}
						a priority and reap the benefits.
					</p>
					<img src={introImage} alt="Intro Image" />
				</div>
				<div className="grid grid-col-1  gap-4 lg:grid-cols-2 m-4 border border-secondary rounded-xl">
					<div className="noDisplay lg:block">
						<img
							src={timeImage}
							alt="Clock Image"
							className="h-full rounded-l-xl"
						/>
					</div>
					<div className="flex flex-col w-full my-auto mx-auto px-10 py-4">
						<p className="text-2xl mb-10 mx-auto">
							Sign in and get started now
						</p>
						<input
							type="text"
							placeholder="Username"
							className=" border-accent border p-1 rounded-xl m-8 mx-auto"
							onChange={(e) => setNewUserName(e.target.value)}
						/>
						<button
							className=" bg-secondary text-white  m-8 p-1 rounded-xl w-20 mx-auto"
							onClick={() => dispatch(newUser(newUserName))}
						>
							Sign In
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
