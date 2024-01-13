/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { SimpleVoidFunctionType } from "./Misc.type";
import { GenericFormSchemaType } from "./Forms.type";

export type GenericDialogProps = {
    open: boolean;
    title?: string;
    fullScreen?: boolean;
    children?: ReactNode;
    isPending?: boolean;
    onClose: SimpleVoidFunctionType;
};

export type GenericSingleEntityDialogProps = GenericDialogProps & {
    schema: GenericFormSchemaType;
    onFormChange?: (formData: any) => void;
    onSubmit: (formData: any) => void;
};

export type GenericConfirmationDialogProps = GenericDialogProps & {
    isDelete?: boolean;
    customConfirmButtonText?: string;
    onConfirm: (data: unknown) => void;
};

export type GenericDeleteConfirmationDialogProps = GenericDialogProps & {
    onDeletionConfirm: (data: unknown) => void;
};
