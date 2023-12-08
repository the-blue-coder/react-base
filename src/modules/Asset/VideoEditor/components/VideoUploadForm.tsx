import GenericForm from "shared/components/forms/GenericForm";
import { VideoUploadFormProps } from "../types/VideoUploadForm.type";
import useVideoUploadFormStyles from "../styles/useVideoUploadFormStyles";
import { Box } from "@mui/material";

const VideoUploadForm: React.FC<VideoUploadFormProps> = ({ schema }) => {
    const styles = useVideoUploadFormStyles();

    return (
        <Box sx={styles.videoUploadForm}>
            <GenericForm schema={schema} />
        </Box>
    );
};

export default VideoUploadForm;
