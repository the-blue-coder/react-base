import { RouteItemType } from "shared/types/Routes.type";

const useAppRoutes = () => {
    const getRoutePath = (routeItem: RouteItemType) => {
        return routeItem.path;
    };

    return { getRoutePath };
};

export default useAppRoutes;
