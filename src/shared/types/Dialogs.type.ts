import { ReactNode } from "react";

export type GenericDialogProps = {
    id?: string;
    open: boolean;
    title?: string;
    children?: ReactNode;
    onClose: () => void;
};

export type GenerciDeleteConfirmationDialogProps = GenericDialogProps & {
    isDeleting: boolean;
    onDeletionConfirm: (data: unknown) => void;
};
