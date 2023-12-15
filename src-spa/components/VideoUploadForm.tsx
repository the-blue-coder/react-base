import GenericForm from "generics/components/forms/GenericForm";
import useVideoUploadFormStyles from "../styles/useVideoUploadFormStyles";
import { Box } from "@mui/material";
import GenericButton from "generics/components/buttons/GenericButton";
import { VideoUploadFormProps } from "../types/VideoUploadForm.type";

const VideoUploadForm: React.FC<VideoUploadFormProps> = ({ schema, isGeneratingVideo, onSubmit }) => {
    const styles = useVideoUploadFormStyles();

    const defaultFormData = {
        shortlinkDomainId: 1,
        videoOutroId: 1,
    };

    return (
        <Box sx={styles.videoUploadForm}>
            <Box>
                First, edit your video using Clipchamp and use <strong>16:9 as ratio</strong> then export it to mp4 format and{" "}
                <strong>720p</strong> on export.
                <br />
                Copy/upload your video to api/assets/temp (its name must be <strong>"video.mp4"</strong>), then fill the form below.
                <br />
                It should be the only video in that folder, after generating the video, it will be automatically deleted from the folder.
            </Box>

            <Box className="form-container" mt={1}>
                <GenericForm schema={schema} formData={defaultFormData} onSubmit={onSubmit}>
                    <GenericButton type="submit" disabled={isGeneratingVideo}>
                        Generate video post
                    </GenericButton>
                </GenericForm>
            </Box>
        </Box>
    );
};

export default VideoUploadForm;
