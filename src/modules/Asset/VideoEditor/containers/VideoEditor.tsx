import { Grid } from "@mui/material";
import SectionTitle from "shared/components/texts/SectionTitle";
import VideoUploadForm from "../components/VideoUploadForm";
import useVideoEditorFormSchemas from "../hooks/useVideoEditorFormSchemas";

const VideoEditor: React.FC = () => {
    /**
     * Form schemas
     */
    const { videoUploadFormSchema } = useVideoEditorFormSchemas();
    // End of Form schemas

    return (
        <Grid container>
            <Grid item xs={12}>
                <SectionTitle>Video editor</SectionTitle>
            </Grid>

            <Grid item xs={12} mt={1}>
                <VideoUploadForm schema={videoUploadFormSchema} />
            </Grid>
        </Grid>
    );
};

export default VideoEditor;
