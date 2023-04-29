import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "../../../helper";

export const homeSlice = createSlice({
	name: "userName",
	initialState: {
		value: "",
	},
	reducers: {
		homeNewUser: (state, action) => {
			console.log(action);
			state.value = action.payload;

			createUser(action.payload);
		},
	},
});

export const { homeNewUser } = homeSlice.actions;
export default homeSlice.reducer;
