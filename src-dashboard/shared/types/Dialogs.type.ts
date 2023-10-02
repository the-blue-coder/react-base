import { ReactNode } from "react";

export type GenericDialogProps = {
    id: string;
    open: boolean;
    title: string;
    children: ReactNode;
    onClose: () => void;
};
