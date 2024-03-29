/* eslint-disable react-hooks/exhaustive-deps */
import GenericDialog from "./GenericDialog";
import { Box } from "@mui/material";
import GenericButton from "../buttons/GenericButton";
import useManageTagsActions from "shared/hooks/useManageTagsActions";
import GenericForm from "../forms/GenericForm";
import useManageTagsDialogStyles from "shared/styles/components/dialogs/useManageTagsDialogStyles";
import useTags from "shared/hooks/useTags";
import Spinner from "../loading/Spinner";
import useManageTagsFormSchemas from "shared/hooks/useManageTagsFormSchemas";
import { ManageTagsDialogProps } from "shared/types/Tags.type";

const ManageTagsDialog: React.FC<ManageTagsDialogProps> = ({ onAfterUpdatingCurrentTags }) => {
    const styles = useManageTagsDialogStyles();

    const { isFetchingCurrentTags, currentTags, fetchCurrentTags } = useTags();

    const { manageTagsFormSchema: schema } = useManageTagsFormSchemas({});

    const { manageTagsDialogOpen, isUpdatingTags, handleToggleManageTagsDialog, handleSubmitManageTagsForm } = useManageTagsActions({
        currentTags,
        fetchCurrentTags,
        onAfterUpdatingCurrentTags,
    });

    const formData = {
        tags: currentTags,
    };

    return (
        <GenericDialog open={manageTagsDialogOpen} title="Manage tags" onClose={handleToggleManageTagsDialog}>
            <Box sx={styles.manageTagsDialog}>
                {isFetchingCurrentTags && <Spinner />}

                {!isFetchingCurrentTags && currentTags && (
                    <GenericForm schema={schema} formData={formData} onSubmit={handleSubmitManageTagsForm}>
                        <GenericButton type="submit" disabled={isUpdatingTags}>
                            Save tags
                        </GenericButton>
                    </GenericForm>
                )}
            </Box>
        </GenericDialog>
    );
};

export default ManageTagsDialog;
