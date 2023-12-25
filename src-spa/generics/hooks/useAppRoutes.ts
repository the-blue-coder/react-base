import { RouteSectionItemType } from "generics/types/Routes.type";

const useAppRoutes = () => {
    const getRoutePath = (routeItem: RouteSectionItemType) => {
        return routeItem.path;
    };

    const getFacebookApiEndpoint = (path: string) => {
        return `${path}${path.includes("?") ? "&" : "?"}access_token=`;
    };

    return { getRoutePath, getFacebookApiEndpoint };
};

export default useAppRoutes;
