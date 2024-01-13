import { Box } from "@mui/material";
import GenericDialog from "generics/components/dialogs/GenericDialog";
import { GenericConfirmationDialogProps } from "generics/types/Dialogs.type";
import GenericButton from "generics/components/buttons/GenericButton";

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
