import Dashboard from "pages/Dashboard/containers/Dashboard";

/**
 * The react-router-dom implementation is done inside shared\components\routes\AppRouter.tsx
 */
export const routes = {
	dashboard: {
		path: "/dashboard",
		container: <Dashboard />,
	},
};
