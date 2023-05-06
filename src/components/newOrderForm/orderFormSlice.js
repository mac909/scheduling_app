import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { formatDateToLocaleString } from "../../../helper";

export const orderFormSlice = createSlice({
	name: "orders",
	initialState: {
		value: [],
	},
	reducers: {
		newOrder: (state, action) => {
			const newItem = {
				id: uuidv4(),
				customer: action.payload.customer,
				product: action.payload.product,
				quantity: action.payload.quantity,
				price: action.payload.price,
				ops: action.payload.ops,
				createdAt: formatDateToLocaleString(Date.now()),
				updatedAt: formatDateToLocaleString(Date.now()),
			};
			state.value = [...state.value, newItem];
		},
		deleteOrder: (state, action) => {
			state.value = state.value.filter(
				(order) => order.id !== action.payload
			);
		},
		updateOrder: (state, action) => {
			const { id, updates } = action.payload;
			const orderIndex = state.value.findIndex(
				(order) => order.id === id
			);
			if (orderIndex !== -1) {
				state.value[orderIndex] = {
					...state.value[orderIndex],
					...updates,
				};
			}
		},
	},
});

export const { newOrder, deleteOrder, updateOrder } = orderFormSlice.actions;
export default orderFormSlice.reducer;
