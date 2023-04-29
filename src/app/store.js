import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../pages/homepage/homeSlice";

export default configureStore({
	reducer: {
		username: homeReducer,
	},
});
