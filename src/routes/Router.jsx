import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home"
import Register from "../pages/shared/register/Register";
import JobsPage from "../pages/jobsPage/JobsPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />
			},
			{
				path: "/jobs",
				element: <JobsPage />
			}
		]
	},
	{
		path: "register",
		element: <Register />
	}
])
export default router;