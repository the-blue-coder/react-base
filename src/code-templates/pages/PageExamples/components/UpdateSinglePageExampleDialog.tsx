import { Box } from "@mui/material";
import GenericDialog from "shared/components/dialogs/GenericDialog";
import GenericForm from "shared/components/forms/GenericForm";
import GenericSubmitButton from "shared/components/buttons/GenericSubmitButton";
import useSinglePageExampleDialogStyles from "../styles/useSinglePageExampleDialogStyles";
import { UpdateSinglePageExampleDialogProps } from "../types/PageExample.type";

const UpdateSinglePageExampleDialog: React.FC<UpdateSinglePageExampleDialogProps> = ({
    open,
    isPending,
    schema,
    selectedSinglePageExample,
    onFormChange,
    onSubmit,
    onClose,
}) => {
    const styles = useSinglePageExampleDialogStyles();

    const formData = {
        firstname: selectedSinglePageExample?.firstname,
        name: selectedSinglePageExample?.name,
        age: selectedSinglePageExample?.age,
        genderId: selectedSinglePageExample?.genderId,
        email: selectedSinglePageExample?.email,
    };

    return (
        <GenericDialog open={open} title="Update page example" onClose={onClose}>
            <Box sx={styles.singlePageExampleDialog}>
                <GenericForm schema={schema} formData={formData} onFormChange={onFormChange} onSubmit={onSubmit}>
                    <GenericSubmitButton disabled={isPending}>Update page example</GenericSubmitButton>
                </GenericForm>
            </Box>
        </GenericDialog>
    );
};

export default UpdateSinglePageExampleDialog;
