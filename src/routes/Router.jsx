import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home"
import Register from "../pages/shared/register/Register";
import JobsPage from "../pages/jobsPage/JobsPage";
import AddJob from "../pages/addJob/AddJob"
import Dashboard from "../layout/Dashboard";

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
			},
			{
				path: "/add-job",
				element: <AddJob />
			}
		]
	},
	{
		path: "dashboard",
		element: <Dashboard />,
		children: [
			{
				path: "addjob",
				element: <AddJob />
			}
		]
	},
	{
		path: "register",
		element: <Register />
	}
])
export default router;