import { apiRoutes } from "apiRoutes";
import useGenericMutation from "generics/hooks/useGenericMutation";

const useVideoOutros = () => {
    const { mutateAsync: fetchVideoOutros, data: videoOutrosRawData } = useGenericMutation({
        method: "GET",
        endpointPath: apiRoutes.videoOutro,
    });

    const videoOutrosOptions = videoOutrosRawData?.data?.videoOutros || [];

    return {
        videoOutrosOptions,
        fetchVideoOutros,
    };
};

export default useVideoOutros;
