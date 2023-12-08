import Groups from "./Groups/containers/Groups";
import Overview from "./Overview/containers/Overview";

const prefix = "/facebook";

export const facebookRoutes = {
    overview: {
        title: "Overview",
        path: `${prefix}`,
        container: <Overview />,
    },
    groups: {
        title: "Groups",
        path: `${prefix}/groups`,
        container: <Groups />,
    },
};
