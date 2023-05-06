import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

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
				createdAt: Date.now(),
			};
			state.value = [...state.value, newItem];
		},
		deleteOrder: (state, action) => {
			state.value = state.value.filter(
				(order) => order.id !== action.payload
			);
		},
	},
});

export const { newOrder, deleteOrder } = orderFormSlice.actions;
export default orderFormSlice.reducer;
