import Groups from "pages/Groups/containers/Groups";
import Overview from "pages/Overview/containers/Overview";
import { RoutesType } from "shared/types/Routes.type";

/**
 * The react-router-dom implementation is done inside shared\components\routes\AppRouter.tsx
 */
export const routes: RoutesType = {
    overview: {
        title: "Overview",
        path: "/",
        container: <Overview />,
    },
    groups: {
        title: "Groups",
        path: "/groups",
        container: <Groups />,
    },
};
