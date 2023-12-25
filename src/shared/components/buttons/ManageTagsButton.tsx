import GenericButton from "./GenericButton";
import useManageTagsActions from "shared/hooks/useManageTagsActions";
import useTags from "shared/hooks/useTags";
import useManageTagsButtonStyles from "shared/styles/components/buttons/useManageTagsButtonStyles";
import { ManageTagsButtonProps } from "shared/types/Buttons.type";

const ManageTagsButton: React.FC<ManageTagsButtonProps> = ({ variant = "contained", formContext }) => {
    const isInsideRJSF = formContext !== undefined;

    const styles = useManageTagsButtonStyles({ variant, isInsideRJSF });

    const { currentTags, fetchCurrentTags } = useTags();

    const { handleToggleManageTagsDialog } = useManageTagsActions({
        currentTags,
        fetchCurrentTags,
    });

    return (
        <GenericButton sx={styles.manageTagsButton} variant={isInsideRJSF ? "text" : variant} onClick={handleToggleManageTagsDialog}>
            Manage tags
        </GenericButton>
    );
};

export default ManageTagsButton;
