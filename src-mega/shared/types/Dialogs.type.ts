import { ReactNode } from "react";
import { SimpleVoidFunctionType } from "./Misc.type";

export type GenericDialogProps = {
    open: boolean;
    title?: string;
    fullScreen?: boolean;
    children?: ReactNode;
    onClose: SimpleVoidFunctionType;
};

export type GenericConfirmationDialogProps = GenericDialogProps & {
    isConfirming: boolean;
    isDelete?: boolean;
    customConfirmButtonText?: string;
    onConfirm: (data: unknown) => void;
};

export type GenericDeleteConfirmationDialogProps = GenericDialogProps & {
    isDeleting: boolean;
    onDeletionConfirm: (data: unknown) => void;
};
