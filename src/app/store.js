import { configureStore } from "@reduxjs/toolkit";
import introReducer from "../components/Intro/introSlice";
import orderFormReducer from "../components/newOrderForm/orderFormSlice";

export default configureStore({
	reducer: {
		username: introReducer,
		orders: orderFormReducer,
	},
});
