import { GenericFormFieldOptionType, GenericFormProps } from "generics/types/Forms.type";

export type VideoUploadFormProps = GenericFormProps & {
    isGeneratingVideo: boolean;
};

export type VideoUploadFormDataType = {
    videoFile: string;
    videoOutroId: number;
    videoDescription: string;
};

export type useVideoUploadFormSchemaProps = {
    shortlinkDomainsOptions: GenericFormFieldOptionType[];
    videoOutrosOptions: GenericFormFieldOptionType[];
};
