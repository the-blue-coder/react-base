import GenericDialog from "shared/components/dialogs/GenericDialog";
import GenericForm from "shared/components/forms/GenericForm";
import GenericButton from "shared/components/buttons/GenericButton";
import { Box } from "@mui/material";
import { UpdateEntityTagsDialogProps } from "shared/types/Tags.type";
import useUpdateEntityTagsDialogStyles from "shared/styles/components/dialogs/useUpdateEntityTagsDialogStyles";
import useManageTagsActions from "shared/hooks/useManageTagsActions";
import useManageTagsFormSchemas from "shared/hooks/useManageTagsFormSchemas";

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
