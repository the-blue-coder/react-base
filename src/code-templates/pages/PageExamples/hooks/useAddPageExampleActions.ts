import { useState } from "react";
import { apiRoutes } from "routes";
import useGenericMutation from "shared/hooks/useGenericMutation";
import useDisplayAlert from "shared/hooks/useDisplayAlert";
import { SinglePageExampleFormDataType, useAddPageExampleActionsProps } from "../types/SinglePageExample.type";

const useAddPageExampleActions = ({ fetchPageExamplesSummary, handleUpdatePageExamplesGridRows }: useAddPageExampleActionsProps) => {
    const [addPageExampleDialogOpen, setAddPageExampleDialogOpen] = useState<boolean>(false);

    const { mutateAsync: addPageExample, isPending: isAddingPageExample } = useGenericMutation({
        method: "POST",
        endpointPath: apiRoutes.pageExample,
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

export default useAddPageExampleActions;