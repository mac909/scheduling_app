import { ArrowUturnLeftIcon, HomeIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
	const error = useRouteError();
	const navigate = useNavigate();
	return (
		<div className="error">
			<h1>Uh oh! We've got a problem</h1>
			<p>{error.message || error.statusText}</p>
			<div className="flex-md" onClick={() => navigate(-1)}>
				<button className="bg-secondary text-white m-8 p-1 rounded-xl w-20 mx-auto">
					<ArrowUturnLeftIcon width={24} />
					<span>Go Back</span>
				</button>
				<Link
					to="/"
					className="bg-secondary text-white m-8 p-1 rounded-xl w-20 mx-auto"
				>
					<span>Go Home</span>
					<HomeIcon width={24} />
				</Link>
			</div>
		</div>
	);
};

export default Error;
