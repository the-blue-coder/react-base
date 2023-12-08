import { assetRoutes } from "modules/Asset/asset.routes";
import { facebookRoutes } from "modules/Facebook/facebook.routes";
import AssetLayout from "shared/layouts/AssetLayout";
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
    asset: {
        subRoutes: { ...assetRoutes },
        layout: <AssetLayout />,
    },
};

export const defaultRoute = routes.facebook.subRoutes.overview;
