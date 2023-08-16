import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "shared/layouts/Main";
import PageNotFound from "shared/components/errors/PageNotFound";
import { routes } from "routes";

const AppRouter: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Main />}>
					{Object.entries(routes).map(([key, value]) => (
						<Route
							key={key}
							path={value.path}
							element={value.container}
						></Route>
					))}

					{/* 404 page */}
					<Route path="*" element={<PageNotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
