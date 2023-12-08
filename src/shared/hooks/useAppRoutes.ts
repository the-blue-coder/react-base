import { RouteItemType } from "shared/types/Routes.type";

const useAppRoutes = () => {
    const getRoutePath = (routeItem: RouteItemType) => {
        return routeItem.path;
    };

    const getFacebookApiEndpoint = (path: string) => {
        return `${path}${path.includes("?") ? "&" : "?"}access_token=`;
    };

    return { getRoutePath, getFacebookApiEndpoint };
};

export default useAppRoutes;
