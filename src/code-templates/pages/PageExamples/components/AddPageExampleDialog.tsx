import { Box } from "@mui/material";
import GenericDialog from "shared/components/dialogs/GenericDialog";
import GenericForm from "shared/components/forms/GenericForm";
import GenericSubmitButton from "shared/components/buttons/GenericSubmitButton";
import { GenericSingleEntityDialogProps } from "shared/types/Dialogs.type";
import useSinglePageExampleDialogStyles from "../styles/useSinglePageExampleDialogStyles";

const AddPageExampleDialog: React.FC<GenericSingleEntityDialogProps> = ({ open, isPending, schema, onFormChange, onSubmit, onClose }) => {
    const styles = useSinglePageExampleDialogStyles();

    return (
        <GenericDialog open={open} title="New page example" onClose={onClose}>
            <Box sx={styles.singlePageExampleDialog}>
                <GenericForm schema={schema} onFormChange={onFormChange} onSubmit={onSubmit}>
                    <GenericSubmitButton disabled={isPending}>Create page example</GenericSubmitButton>
                </GenericForm>
            </Box>
        </GenericDialog>
    );
};

export default AddPageExampleDialog;
