import useVideoUploadFormSchema from "./useVideoUploadFormSchema";

const useVideoEditorFormSchemas = () => {
    const videoUploadFormSchema = useVideoUploadFormSchema();

    return {
        videoUploadFormSchema,
    };
};

export default useVideoEditorFormSchemas;
