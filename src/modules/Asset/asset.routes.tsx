import { RouteSectionType } from "shared/types/Routes.type";
import VideoEditor from "./VideoEditor/containers/VideoEditor";

export const assetPrefix = "/asset";

export const assetRoutes: RouteSectionType = {
    videoEditor: {
        title: "Video editor",
        path: `${assetPrefix}`,
        container: <VideoEditor />,
    },
};
