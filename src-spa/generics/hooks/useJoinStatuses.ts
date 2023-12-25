import { facebookApiRoutes } from "modules/Facebook/facebook.routes";
import { useRecoilState } from "recoil";
import useGenericMutation from "generics/hooks/useGenericMutation";
import { JoinStatusesState } from "generics/states/JoinStatuses.state";

const useJoinStatuses = () => {
    const [joinStatusesOptions, setJoinStatusesOptions] = useRecoilState(JoinStatusesState);

    const {
        mutateAsync: fetchJoinStatuses,
        isLoading: isFetchingJoinStatuses,
        data: joinStatusesRawData,
    } = useGenericMutation({
        method: "GET",
        endpointPath: facebookApiRoutes.groupJoinStatuses,
    });

    return {
        isFetchingJoinStatuses,
        joinStatusesRawData,
        joinStatusesOptions,
        fetchJoinStatuses,
        setJoinStatusesOptions,
    };
};

export default useJoinStatuses;
