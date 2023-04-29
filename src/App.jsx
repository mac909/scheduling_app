import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Main from "./layouts/Main/Main";
import Error from "./pages/errorpage/Error";
import Home from "./pages/homepage/Home";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Main />,
			errorElement: <Error />,
			children: [
				{
					index: true,
					element: <Home />,
					errorElement: <Error />,
				},
			],
		},
	]);

	return (
		<>
			<div>
				<RouterProvider router={router} />
				<ToastContainer />
			</div>
		</>
	);
}

export default App;
