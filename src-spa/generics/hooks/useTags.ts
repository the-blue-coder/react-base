import { globalApiRoutes } from "routes";
import useGenericMutation from "./useGenericMutation";
import { useRecoilState } from "recoil";
import { CurrentTagsState } from "generics/states/Tags.state";
import { AxiosResponse } from "axios";
import useDisplayAlert from "./useDisplayAlert";

const useTags = () => {
    const [currentTags, setCurrentTags] = useRecoilState(CurrentTagsState);

    const { displayFailureAlert } = useDisplayAlert();

    const { mutateAsync: fetchTags, isLoading: isFetchingCurrentTags } = useGenericMutation({
        method: "GET",
        endpointPath: `${globalApiRoutes.tags}`,
    });

    const fetchCurrentTags = () => {
        fetchTags({})
            .then((response: AxiosResponse) => {
                setCurrentTags(response.data.tags);
            })
            .catch(() => {
                displayFailureAlert("Error occured while fetching current tags, please try again");
            });
    };

    return {
        isFetchingCurrentTags,
        currentTags,
        fetchCurrentTags,
    };
};

export default useTags;
