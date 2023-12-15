/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from "@mui/material";
import SectionTitle from "generics/components/texts/SectionTitle";
import VideoUploadForm from "../components/VideoUploadForm";
import useVideoEditorFormSchemas from "../hooks/useVideoEditorFormSchemas";
import useVideoOutros from "../hooks/useVideoOutros";
import { useEffect } from "react";
import useVideoEditorActions from "../hooks/useVideoEditorActions";
import useShortlinkDomains from "../hooks/useShortlinkDomains";

const VideoEditor: React.FC = () => {
    /**
     * Backend data
     */
    const { shortlinkDomainsOptions, fetchShortlinkDomains } = useShortlinkDomains();

    const { videoOutrosOptions, fetchVideoOutros } = useVideoOutros();
    // End of Backend data

    /**
     * Form schemas
     */
    const { videoUploadFormSchema } = useVideoEditorFormSchemas({ shortlinkDomainsOptions, videoOutrosOptions });
    // End of Form schemas

    /**
     * Actions
     */
    const { isGeneratingVideo, handleVideoUploadFormSubmit } = useVideoEditorActions();
    // End of Actions

    useEffect(() => {
        fetchShortlinkDomains({});
    }, []);

    useEffect(() => {
        fetchVideoOutros({});
    }, []);

    return (
        <Grid container p={2}>
            <Grid item xs={12}>
                <SectionTitle hasUpperSection={false}>Video editor</SectionTitle>
            </Grid>

            <Grid item xs={12} mt={1}>
                <VideoUploadForm
                    schema={videoUploadFormSchema}
                    onSubmit={handleVideoUploadFormSubmit}
                    isGeneratingVideo={isGeneratingVideo}
                />
            </Grid>
        </Grid>
    );
};

export default VideoEditor;
