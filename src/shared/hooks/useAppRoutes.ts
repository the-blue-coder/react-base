import { KeyValueObject } from "shared/types/Misc.type";
import { RouteItemType } from "shared/types/Routes.type";

const useAppRoutes = () => {
    const getRoutePath = (routeItem: RouteItemType) => {
        return routeItem.path;
    };

    const getFacebookApiEndpoint = (path: string) => {
        return `${path}${path.includes("?") ? "&" : "?"}access_token=`;
    };

    const buildEndpointWithParams = (endpoint: string, params: KeyValueObject[]) => {
        params.forEach((param) => {
            endpoint = endpoint.replace(new RegExp(`{${param.key}}`, "g"), String(param.value));
        });

        return endpoint;
    };

    return { getRoutePath, getFacebookApiEndpoint, buildEndpointWithParams };
};

export default useAppRoutes;
