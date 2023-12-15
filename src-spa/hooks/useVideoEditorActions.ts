import useGenericMutation from "generics/hooks/useGenericMutation";
import { VideoUploadFormDataType } from "../types/VideoUploadForm.type";
import useDisplayAlert from "generics/hooks/useDisplayAlert";
import { defaultFormMessages } from "generics/constants/errorMessages.constant";
import { apiRoutes } from "apiRoutes";

const useVideoEditorActions = () => {
    const { displaySuccessAlert, displayFailureAlert } = useDisplayAlert();

    const { mutateAsync: generateVideoPost, isLoading: isGeneratingVideo } = useGenericMutation({
        method: "POST",
        endpointPath: apiRoutes.video,
    });

    const handleVideoUploadFormSubmit = (formData: VideoUploadFormDataType) => {
        generateVideoPost(formData)
            .then((response) => {
                displaySuccessAlert("The video post has been successfully generated");
                window.open(response.data.zippedFileUrl);
                window.location.reload();
            })
            .catch((error) => {
                const errorStatus = error.response.data.status;
                let errorMessage = "";

                switch (errorStatus) {
                    case "shortlink_not_found":
                        errorMessage = "Shortlink not found";
                        break;

                    case "domain_and_slug_already_exists":
                        errorMessage = "Domain and slug already exists";
                        break;

                    case "video_not_found":
                        errorMessage = "Video not found, please place your video named video.mp4 into api/assets/temp";
                        break;

                    default:
                        errorMessage = defaultFormMessages.failure;
                }

                displayFailureAlert(errorMessage);
            });
    };

    return {
        isGeneratingVideo,
        handleVideoUploadFormSubmit,
    };
};

export default useVideoEditorActions;
