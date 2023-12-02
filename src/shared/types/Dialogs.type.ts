import { ReactNode } from "react";
import { SimpleVoidFunctionType } from "./Misc.type";

export type GenericDialogProps = {
    open: boolean;
    title?: string;
    fullScreen?: boolean;
    children?: ReactNode;
    onClose: SimpleVoidFunctionType;
};

export type GenerciDeleteConfirmationDialogProps = GenericDialogProps & {
    isDeleting: boolean;
    onDeletionConfirm: (data: unknown) => void;
};
