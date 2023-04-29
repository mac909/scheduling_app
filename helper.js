import { v4 as uuidv4 } from "uuid";

import { toast } from "react-toastify";

export const fetchData = (key) => {
	return JSON.parse(localStorage.getItem(key));
};

export const createUser = (userName) => {
	return localStorage.setItem("userName", JSON.stringify(userName));
	// return toast.success(`Welcome ${userName}`);
};
