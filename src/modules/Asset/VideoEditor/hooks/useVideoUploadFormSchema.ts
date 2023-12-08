import { GenericFormSchemaType } from "shared/types/Forms.type";

const useVideoUploadFormSchema = (): GenericFormSchemaType => {
    return {
        schema: {
            type: "object",
            properties: {
                video: {
                    type: "string",
                    format: "data-url",
                    title: "Upload your video",
                },
            },
        },

        uiSchema: {},
    };
};

export default useVideoUploadFormSchema;
