import GenericButton from "./GenericButton";
import useManageTagsActions from "generics/hooks/useManageTagsActions";
import useTags from "generics/hooks/useTags";
import useManageTagsButtonStyles from "generics/styles/components/buttons/useManageTagsButtonStyles";
import { ManageTagsButtonProps } from "generics/types/Buttons.type";

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
