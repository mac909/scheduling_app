import { createSlice } from "@reduxjs/toolkit";

export const introSlice = createSlice({
	name: "username",
	initialState: {
		value: "",
	},
	reducers: {
		newUser: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { newUser } = introSlice.actions;
export default introSlice.reducer;
