import { apiRoutes } from "apiRoutes";
import useGenericMutation from "generics/hooks/useGenericMutation";

const useShortlinkDomains = () => {
    const { mutateAsync: fetchShortlinkDomains, data: shortlinkDomainsRawData } = useGenericMutation({
        method: "GET",
        endpointPath: apiRoutes.shortlinkDomain,
    });

    const shortlinkDomainsOptions = shortlinkDomainsRawData?.data?.shortlinkDomains || [];

    return {
        shortlinkDomainsOptions,
        fetchShortlinkDomains,
    };
};

export default useShortlinkDomains;
