import GenericDialog from "generics/components/dialogs/GenericDialog";
import GenericForm from "generics/components/forms/GenericForm";
import GenericButton from "generics/components/buttons/GenericButton";
import { Box } from "@mui/material";
import { UpdateEntityTagsDialogProps } from "generics/types/Tags.type";
import useUpdateEntityTagsDialogStyles from "generics/styles/components/dialogs/useUpdateEntityTagsDialogStyles";
import useManageTagsActions from "generics/hooks/useManageTagsActions";
import useManageTagsFormSchemas from "generics/hooks/useManageTagsFormSchemas";

const UpdateEntityTagsDialog: React.FC<UpdateEntityTagsDialogProps> = ({
    title,
    entityTagsFieldTitle,
    entityType,
    entityId,
    entityTagsIds,
    onAfterUpdatingEntityTags,
}) => {
    const styles = useUpdateEntityTagsDialogStyles();

    const formData = { entityTagsIds: entityTagsIds ?? [] };

    const { updateEntityTagsFormSchema } = useManageTagsFormSchemas({ updateEntityTagsFieldTitle: entityTagsFieldTitle });

    const { updateEntityTagsDialogOpen, isUpdatingEntityTags, handleToggleUpdateEntityTagsDialog, handleSubmitUpdateEntityTagsForm } =
        useManageTagsActions({
            entityType: entityType,
            entityId: entityId,
            onAfterUpdatingEntityTags: onAfterUpdatingEntityTags,
        });

    return (
        <GenericDialog open={updateEntityTagsDialogOpen} title={title} onClose={handleToggleUpdateEntityTagsDialog}>
            <Box sx={styles.updateEntityTagsDialog}>
                <GenericForm schema={updateEntityTagsFormSchema} formData={formData} onSubmit={handleSubmitUpdateEntityTagsForm}>
                    <GenericButton type="submit" disabled={isUpdatingEntityTags}>
                        Save
                    </GenericButton>
                </GenericForm>
            </Box>
        </GenericDialog>
    );
};

export default UpdateEntityTagsDialog;
