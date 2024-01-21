import { apiRoutes } from "routes";
import useGenericMutation from "shared/hooks/useGenericMutation";

const usePageExamplesSummary = () => {
    const {
        mutateAsync: fetchPageExamplesSummary,
        data: pageExamplesSummaryRawData,
        isPending: isFetchingPageExamplesSummary,
    } = useGenericMutation({
        method: "GET",
        endpointPath: `${apiRoutes.pageExamplesSummary}`,
    });

    const pageExamplesSummaryData = pageExamplesSummaryRawData?.data?.pageExamplesSummary;

    return {
        isFetchingPageExamplesSummary,
        pageExamplesSummaryData,
        fetchPageExamplesSummary,
    };
};

export default usePageExamplesSummary;
