import { useVideoEditorFormSchemasProps } from "../types/VideoEditor.type";
import useVideoUploadFormSchema from "./useVideoUploadFormSchema";

const useVideoEditorFormSchemas = ({ shortlinkDomainsOptions, videoOutrosOptions }: useVideoEditorFormSchemasProps) => {
    const videoUploadFormSchema = useVideoUploadFormSchema({ shortlinkDomainsOptions, videoOutrosOptions });

    return {
        videoUploadFormSchema,
    };
};

export default useVideoEditorFormSchemas;
