import { ManageTagsFormDataType, TagType, UpdateEntityTagsFormDataType, useManageTagsActionsProps } from "generics/types/Tags.type";
import useGenericMutation from "./useGenericMutation";
import { globalApiRoutes } from "routes";
import useDisplayAlert from "./useDisplayAlert";
import { useRecoilState } from "recoil";
import { ManageTagsDialogOpenState, UpdateEntityTagsDialogOpenState } from "generics/states/Tags.state";

const useManageTagsActions = ({
    entityType,
    entityId,
    currentTags,
    fetchCurrentTags,
    onAfterUpdatingCurrentTags,
    onAfterUpdatingEntityTags,
}: useManageTagsActionsProps) => {
    const [manageTagsDialogOpen, setManageTagsDialogOpen] = useRecoilState(ManageTagsDialogOpenState);
    const [updateEntityTagsDialogOpen, setUpdateEntityTagsDialogOpen] = useRecoilState(UpdateEntityTagsDialogOpenState);

    const { displayFailureAlert, displaySuccessAlert } = useDisplayAlert();

    const { mutateAsync: updateTags, isLoading: isUpdatingTags } = useGenericMutation({
        method: "POST",
        endpointPath: `${globalApiRoutes.tags}`,
    });

    const { mutateAsync: updateEntitytags, isLoading: isUpdatingEntityTags } = useGenericMutation({
        method: "POST",
        endpointPath: `${globalApiRoutes.entityTags}`,
    });

    const handleToggleManageTagsDialog = () => {
        setManageTagsDialogOpen(!manageTagsDialogOpen);
    };

    const handleToggleUpdateEntityTagsDialog = () => {
        setUpdateEntityTagsDialogOpen(!updateEntityTagsDialogOpen);
    };

    const handleSubmitManageTagsForm = (formData: ManageTagsFormDataType) => {
        const uniqueTags: TagType[] = [];
        const duplicateTagValues: string[] = [];

        formData.tags.forEach((tag) => {
            if (uniqueTags.find((t) => t?.value?.toLowerCase() === tag?.value?.toLowerCase())) {
                duplicateTagValues.push(tag.value);
            } else {
                uniqueTags.push(tag);
            }
        });

        if (duplicateTagValues.length > 0) {
            const isPlural = duplicateTagValues.length > 1;
            return displayFailureAlert(`The following tag${isPlural ? "s are" : " is"} duplicated: ${duplicateTagValues.join(", ")}.`);
        }

        const renamedTags: TagType[] = formData.tags.filter((newTag: TagType) => {
            const matchingTag = currentTags?.find((currentTag: TagType) => currentTag.id === newTag.id);
            return matchingTag && matchingTag.value !== newTag.value;
        });

        const toDeleteIds = currentTags
            ?.filter((currentTag: TagType) => !formData.tags.some((tag) => tag.id === currentTag.id))
            .map((currentTag: TagType) => currentTag.id);

        const newTagsValues = formData.tags.filter((item) => !item.id).map((item) => item.value);

        const payload = { renamedTags, toDeleteIds, newTagsValues };

        updateTags(payload)
            .then(() => {
                displaySuccessAlert("Tags list has been successfully updated");
                fetchCurrentTags?.();
                handleToggleManageTagsDialog();
                onAfterUpdatingCurrentTags?.();
            })
            .catch(() => {
                displayFailureAlert("Error occured while updating tags, please try again");
            });
    };

    const handleSubmitUpdateEntityTagsForm = (formData: UpdateEntityTagsFormDataType) => {
        const payload = { entityType, entityId, newEntityTagsIds: formData.entityTagsIds };

        updateEntitytags(payload)
            .then(() => {
                displaySuccessAlert("Entity tags has been successfully updated");
                handleToggleUpdateEntityTagsDialog();
                onAfterUpdatingEntityTags?.();
            })
            .catch(() => {
                displayFailureAlert("Error occured while updating entity tags, please try again");
            });
    };

    return {
        manageTagsDialogOpen,
        updateEntityTagsDialogOpen,
        isUpdatingTags,
        isUpdatingEntityTags,
        handleToggleManageTagsDialog,
        handleToggleUpdateEntityTagsDialog,
        handleSubmitManageTagsForm,
        handleSubmitUpdateEntityTagsForm,
    };
};

export default useManageTagsActions;
