import { useState } from "react";
import { apiRoutes } from "routes";
import useGenericMutation from "shared/hooks/useGenericMutation";
import useDisplayAlert from "shared/hooks/useDisplayAlert";
import { SinglePageExampleFormDataType, usePageExampleToolbarActionsProps } from "../types/PageExample.type";

const usePageExampleToolbarActions = ({
    fetchPageExamplesSummary,
    handleUpdatePageExamplesGridRows,
}: usePageExampleToolbarActionsProps) => {
    const [addPageExampleDialogOpen, setAddPageExampleDialogOpen] = useState<boolean>(false);

    const { mutateAsync: addPageExample, isPending: isAddingPageExample } = useGenericMutation({
        method: "POST",
        endpointPath: apiRoutes.app_api_page_example_new,
    });

    const { displaySuccessAlert, displayFailureAlert } = useDisplayAlert();

    const handleToggleAddPageExampleDialog = () => {
        setAddPageExampleDialogOpen(!addPageExampleDialogOpen);
    };

    const handleAddPageExampleSubmit = (formData: SinglePageExampleFormDataType) => {
        addPageExample(formData)
            .then(() => {
                displaySuccessAlert("The page example has been successfully created");
                handleToggleAddPageExampleDialog();
                fetchPageExamplesSummary({});
                handleUpdatePageExamplesGridRows();
            })
            .catch(() => {
                displayFailureAlert("Error occured while creating the page example, please try again");
            });
    };

    return {
        addPageExampleDialogOpen,
        isAddingPageExample,
        handleToggleAddPageExampleDialog,
        handleAddPageExampleSubmit,
    };
};

export default usePageExampleToolbarActions;
