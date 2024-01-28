import GenericDeleteConfirmationDialog from "shared/components/dialogs/GenericDeleteConfirmationDialog";
import { Box } from "@mui/material";
import { DeleteSinglePageExampleConfirmationDialogProps } from "../types/PageExample.type";

const DeleteSinglePageExampleConfirmationDialog: React.FC<DeleteSinglePageExampleConfirmationDialogProps> = ({
    open,
    isPending,
    selectedSinglePageExample,
    onClose,
    onConfirm,
}) => {
    return (
        <GenericDeleteConfirmationDialog
            open={open}
            title="Delete page example"
            isPending={isPending}
            onClose={onClose}
            onConfirm={onConfirm}
        >
            <Box>
                Do you really want to delete the page example <strong>"{selectedSinglePageExample?.name}"</strong>
            </Box>
        </GenericDeleteConfirmationDialog>
    );
};

export default DeleteSinglePageExampleConfirmationDialog;
