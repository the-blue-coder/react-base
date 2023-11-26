import { Box } from "@mui/material";
import GenericDialog from "shared/components/dialogs/GenericDialog";
import { GenerciDeleteConfirmationDialogProps, GenericDialogProps } from "shared/types/Dialogs.type";
import GenericButton from "shared/components/buttons/GenericButton";

const GenerciDeleteConfirmationDialog: React.FC<GenericDialogProps & GenerciDeleteConfirmationDialogProps> = ({
    open,
    isDeleting,
    children,
    onClose,
    onDeletionConfirm,
}) => {
    return (
        <GenericDialog id="delete-groups-dialog" open={open} title="Delete selected groups" onClose={onClose}>
            <Box>
                {children}

                <Box mt={2} className="btns-container">
                    <GenericButton onClick={onClose}>Cancel</GenericButton>
                    <GenericButton onClick={onDeletionConfirm} disabled={isDeleting}>
                        <strong>DELETE</strong>
                    </GenericButton>
                </Box>
            </Box>
        </GenericDialog>
    );
};

export default GenerciDeleteConfirmationDialog;
