import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "shared/components/errors/PageNotFound";
import { routes } from "routes";
import useAppRoutes from "shared/hooks/useAppRoutes";
import DefaultLayout from "shared/layouts/DefaultLayout";

const AppRouter: React.FC = () => {
    const { getRoutePath } = useAppRoutes();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    {Object.entries(routes).map(([key, routeItem]) => (
                        <Route key={key} path={getRoutePath(routeItem)} element={routeItem.container}></Route>
                    ))}
                </Route>

                {/* 404 page */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
