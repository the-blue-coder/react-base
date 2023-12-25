import { facebookApiRoutes } from "modules/Facebook/facebook.routes";
import { useRecoilState } from "recoil";
import useGenericMutation from "generics/hooks/useGenericMutation";
import { GroupSharedPostStatusesState } from "generics/states/GroupSharedPostStatuses.state";

const useGroupSharedPostStatuses = () => {
    const [groupSharedPostStatusesOptions, setGroupSharedPostStatusesOptions] = useRecoilState(GroupSharedPostStatusesState);

    const {
        mutateAsync: fetchGroupSharedPostStatuses,
        isLoading: isFetchingGroupSharedPostStatuses,
        data: groupSharedPostStatusesRawData,
    } = useGenericMutation({
        method: "GET",
        endpointPath: facebookApiRoutes.groupSharedPostStatuses,
    });

    return {
        isFetchingGroupSharedPostStatuses,
        groupSharedPostStatusesRawData,
        groupSharedPostStatusesOptions,
        fetchGroupSharedPostStatuses,
        setGroupSharedPostStatusesOptions,
    };
};

export default useGroupSharedPostStatuses;
