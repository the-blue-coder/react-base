/* eslint-disable @typescript-eslint/no-explicit-any */
import { KeyValueObject } from "shared/types/Misc.type";
import { RouteItemType } from "shared/types/Routes.type";

const useAppRoutes = () => {
    const getRoutePath = (routeItem: RouteItemType) => {
        return routeItem.path;
    };

    const getFacebookApiEndpoint = (path: string) => {
        return `${path}${path.includes("?") ? "&" : "?"}access_token=`;
    };

    const buildEndpointPathWithParams = (endpoint: string, params: KeyValueObject[]) => {
        params.forEach((param) => {
            endpoint = endpoint.replace(new RegExp(`{${param.key}}`, "g"), String(param.value));
        });

        return endpoint;
    };

    const buildEndpointPathWithIdAsParam = (route: string, entity: any) => {
        return buildEndpointPathWithParams(route, [
            {
                key: "id",
                value: Number(entity?.id),
            },
        ]);
    };

    return { getRoutePath, getFacebookApiEndpoint, buildEndpointPathWithParams, buildEndpointPathWithIdAsParam };
};

export default useAppRoutes;
