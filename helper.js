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

export const findOrderById = (orders, id) => {
	return orders.find((order) => order.id === id);
};

export const getAllMatchingItems = ({ category, key, value }) => {
	const data = fetchData(category) ?? [];
	return data.filter((item) => item[key] === value);
};

export const formatDateToLocaleString = (epoch) =>
	new Date(epoch).toLocaleDateString();

export const formatCurrency = (amt) => {
	return amt.toLocaleString(undefined, {
		style: "currency",
		currency: "USD",
	});
};
