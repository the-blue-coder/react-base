import { facebookRoutes } from "modules/Facebook/facebook.routes";
import FacebookLayout from "shared/layouts/FacebookLayout";
import { GlobalRoutesType } from "shared/types/Routes.type";

/**
 * The react-router-dom implementation is done inside shared\components\routes\AppRouter.tsx
 */
export const routes: GlobalRoutesType = {
    facebook: {
        subRoutes: { ...facebookRoutes },
        layout: <FacebookLayout />,
    },
};

export const globalApiRoutes = {
    tag: "/tag",

    entityTag: "/entity-tag",
};

export const defaultRoute = routes.facebook.subRoutes.overview;
