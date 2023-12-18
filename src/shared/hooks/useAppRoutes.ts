import { RouteSectionItemType } from "shared/types/Routes.type";

const useAppRoutes = () => {
    const getRoutePath = (routeSectionItem: RouteSectionItemType) => {
        return routeSectionItem.path;
    };

    const getFacebookApiEndpoint = (path: string) => {
        return `${path}${path.includes("?") ? "&" : "?"}access_token=`;
    };

    return { getRoutePath, getFacebookApiEndpoint };
};

export default useAppRoutes;
