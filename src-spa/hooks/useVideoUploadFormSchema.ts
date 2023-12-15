import { GenericFormSchemaType } from "generics/types/Forms.type";
import { useVideoUploadFormSchemaProps } from "../types/VideoUploadForm.type";
import CustomRadiosField from "generics/components/forms/CustomRadiosField";

const useVideoUploadFormSchema = ({
    shortlinkDomainsOptions,
    videoOutrosOptions,
}: useVideoUploadFormSchemaProps): GenericFormSchemaType => {
    return {
        schema: {
            type: "object",
            properties: {
                postZipFileName: {
                    type: "string",
                    title: "Post zip file name",
                },
                postLink: {
                    type: "string",
                    title: "Post link",
                },
                shortlinkDomainId: {
                    type: "number",
                    title: "Shortlink domain",
                },
                shortlinkSlug: {
                    type: "string",
                    title: "Shortlink slug",
                },
                videoOutroId: {
                    type: "number",
                    title: "Video outro",
                },
                videoDescription: {
                    type: "string",
                    title: "Video description",
                },
            },
            required: ["postZipFileName", "videoOutroId", "videoDescription"],
        },

        uiSchema: {
            shortlinkDomainId: {
                "ui:widget": CustomRadiosField,
                "ui:customErrorMessages": {
                    required: "Please select a shortlink domain",
                },
                "ui:options": {
                    options: shortlinkDomainsOptions,
                    inline: true,
                },
            },
            videoOutroId: {
                "ui:widget": CustomRadiosField,
                "ui:customErrorMessages": {
                    required: "Please select a video outro",
                },
                "ui:options": {
                    options: videoOutrosOptions,
                    inline: true,
                },
            },
            videoDescription: {
                "ui:widget": "textarea",
                "ui:options": {
                    rows: 4,
                },
            },
        },
    };
};

export default useVideoUploadFormSchema;
