import { RouteSectionType } from "shared/types/Routes.type";
import Groups from "./Groups/containers/Groups";
import Overview from "./Overview/containers/Overview";

export const facebookPrefix = "/facebook";

export const facebookRoutes: RouteSectionType = {
    overview: {
        title: "Overview",
        path: `${facebookPrefix}`,
        container: <Overview />,
    },
    groups: {
        title: "Groups",
        path: `${facebookPrefix}/groups`,
        container: <Groups />,
    },
};
