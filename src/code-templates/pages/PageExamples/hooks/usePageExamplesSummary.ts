import { apiRoutes } from "routes";
import useGenericMutation from "shared/hooks/useGenericMutation";

const usePageExamplesSummary = () => {
    const {
        mutateAsync: fetchPageExamplesSummary,
        data: pageExamplesSummaryRawData,
        isPending: isFetchingPageExamplesSummary,
    } = useGenericMutation({
        method: "GET",
        endpointPath: `${apiRoutes.app_api_page_example_summary}`,
    });

    const pageExamplesSummaryData = pageExamplesSummaryRawData?.data?.pageExamplesSummary;

    return {
        isFetchingPageExamplesSummary,
        pageExamplesSummaryData,
        fetchPageExamplesSummary,
    };
};

export default usePageExamplesSummary;
