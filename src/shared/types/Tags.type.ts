/* eslint-disable @typescript-eslint/no-explicit-any */
import { SimpleVoidFunctionType } from "./Misc.type";

export type TagType = {
    id: number;
    slug: string;
    value: string;
};

export type ManageTagsDialogProps = {
    onAfterUpdatingCurrentTags?: SimpleVoidFunctionType;
};

export type ManageTagsFormDataType = {
    tags: TagType[];
};

export type UpdateEntityTagsFormDataType = {
    entityTagsIds: number[];
};

export type UpdateEntityTagsDialogProps = {
    title: string;
    entityTagsFieldTitle: string;
    entityType: string;
    entityId: number;
    entityTagsIds: string | undefined;
    onAfterUpdatingEntityTags: SimpleVoidFunctionType;
};

export type useManageTagsActionsProps = {
    entityType?: string;
    entityId?: number;
    currentTags?: TagType[];
    fetchCurrentTags?: SimpleVoidFunctionType;
    onAfterUpdatingCurrentTags?: SimpleVoidFunctionType;
    onAfterUpdatingEntityTags?: SimpleVoidFunctionType;
};

export type useManageTagsFormSchemasProps = {
    updateEntityTagsFieldTitle?: string;
};

export type useUpdateEntityTagsFormSchemaProps = {
    updateEntityTagsFieldTitle?: string;
};
