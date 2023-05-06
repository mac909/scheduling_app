import { v4 as uuidv4 } from "uuid";

import { toast } from "react-toastify";

export const fetchData = (key) => {
	return JSON.parse(localStorage.getItem(key));
};

// delete item
export const deleteItem = ({ key, id }) => {
	const existingData = fetchData(key);
	if (id) {
		const newData = existingData.filter((item) => item.id !== id);
		return localStorage.setItem(key, JSON.stringify(newData));
	}
	return localStorage.removeItem(key);
};

export const createUser = (userName) => {
	return localStorage.setItem("userName", JSON.stringify(userName));
	// return toast.success(`Welcome ${userName}`);
};

export const createOrder = ({ customer, product, price, qty, ops }) => {
	const newItem = {
		id: uuidv4(),
		customer: customer,
		product: product,
		qty: qty,
		price: price,
		ops: ops,
		createdAt: Date.now(),
	};
	const existingOrders = fetchData("orders") ?? [];
	return localStorage.setItem(
		"orders",
		JSON.stringify([...existingOrders, newItem])
	);
};

export const formatCurrency = (amt) => {
	return amt.toLocaleString(undefined, {
		style: "currency",
		currency: "USD",
	});
};
