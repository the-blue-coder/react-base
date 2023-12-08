import VideoEditor from "./VideoEditor/containers/VideoEditor";

const prefix = "/asset";

export const assetRoutes = {
    videoEditor: {
        title: "Video editor",
        path: `${prefix}`,
        container: <VideoEditor />,
    },
};
