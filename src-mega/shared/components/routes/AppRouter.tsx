import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PageNotFound from "shared/components/errors/PageNotFound";
import { defaultRoute, routes } from "routes";
import useAppRoutes from "shared/hooks/useAppRoutes";

const AppRouter: React.FC = () => {
    const { getRoutePath } = useAppRoutes();

    return (
        <BrowserRouter>
            <Routes>
                {/* Redirect / to overview */}
                <Route path="/" element={<Navigate to={getRoutePath(defaultRoute)} />}></Route>

                {Object.keys(routes).map((globalRouteKey) => {
                    const routeElement = routes[globalRouteKey];

                    return (
                        <Route key={globalRouteKey} path={`/${globalRouteKey}`} element={routeElement.layout}>
                            {Object.entries(routeElement.subRoutes).map(([key, routeItem]) => (
                                <Route key={key} path={getRoutePath(routeItem)} element={routeItem.container}></Route>
                            ))}
                        </Route>
                    );
                })}

                {/* 404 page */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
