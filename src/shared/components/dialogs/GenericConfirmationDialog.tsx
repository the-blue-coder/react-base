import { Box } from "@mui/material";
import GenericDialog from "shared/components/dialogs/GenericDialog";
import { GenericConfirmationDialogProps } from "shared/types/Dialogs.type";
import GenericButton from "shared/components/buttons/GenericButton";

const GenericConfirmationDialog: React.FC<GenericConfirmationDialogProps> = ({
    open,
    title,
    isPending,
    children,
    isDelete,
    customConfirmButtonText,
    onClose,
    onConfirm,
}) => {
    return (
        <GenericDialog open={open} title={title} onClose={onClose}>
            <Box>
                {children}

                <Box mt={2}>
                    <GenericButton onClick={onClose}>Cancel</GenericButton>
                    <GenericButton onClick={onConfirm} disabled={isPending} noMr>
                        <strong>{customConfirmButtonText || (isDelete ? "DELETE" : "Confirm")}</strong>
                    </GenericButton>
                </Box>
            </Box>
        </GenericDialog>
    );
};

export default GenericConfirmationDialog;
