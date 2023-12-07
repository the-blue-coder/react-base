import { GenericDeleteConfirmationDialogProps, GenericDialogProps } from "shared/types/Dialogs.type";
import GenericConfirmationDialog from "./GenericConfirmationDialog";

const GenericDeleteConfirmationDialog: React.FC<GenericDialogProps & GenericDeleteConfirmationDialogProps> = ({
    open,
    title,
    isDeleting,
    children,
    onClose,
    onDeletionConfirm,
}) => {
    return (
        <GenericConfirmationDialog
            open={open}
            title={title}
            isConfirming={isDeleting}
            isDelete
            onConfirm={onDeletionConfirm}
            onClose={onClose}
        >
            {children}
        </GenericConfirmationDialog>
    );
};

export default GenericDeleteConfirmationDialog;
