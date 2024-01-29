import useGenericMutation from "../../../shared/hooks/useGenericMutation";
import { apiRoutes } from "routes";

const usePageExamples = () => {
    const { mutateAsync: fetchPageExamples, isPending: isFetchingPageExamples } = useGenericMutation({
        method: "GET",
        endpointPath: `${apiRoutes.app_api_page_example_index}`,
    });

    return {
        isFetchingPageExamples,
        fetchPageExamples,
    };
};

export default usePageExamples;
