import Home from "pages/Public/Home/containers/Home";
import Dashboard from "pages/User/Dashboard/containers/Dashboard";

/**
 * The react-router-dom implementation is done inside shared\components\routes\AppRouter.tsx
 */
export const routes = {
	home: {
		path: "/",
		container: <Home />,
	},

	dashboard: {
		path: "/dashboard",
		container: <Dashboard />,
	},
};
