import { GenericConfirmationDialogProps } from "generics/types/Dialogs.type";
import GenericConfirmationDialog from "./GenericConfirmationDialog";

const GenericDeleteConfirmationDialog: React.FC<GenericConfirmationDialogProps> = ({
    open,
    title,
    isPending,
    children,
    onClose,
    onConfirm,
}) => {
    return (
        <GenericConfirmationDialog open={open} title={title} isPending={isPending} isDelete onConfirm={onConfirm} onClose={onClose}>
            {children}
        </GenericConfirmationDialog>
    );
};

export default GenericDeleteConfirmationDialog;
