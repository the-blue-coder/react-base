import { AxiosResponse } from "axios";
import { usePageExamplesGridActionsProps } from "../types/PageExamplesGrid.type";
import usePageExamplesGridContent from "./usePageExamplesGridContent";
import useDisplayAlert from "shared/hooks/useDisplayAlert";
import { PageExampleType, SinglePageExampleFormDataType } from "../types/PageExample.type";
import { useSetRecoilState } from "recoil";
import { SelectedSinglePageExampleState, SinglePageExampleActionState } from "../states/PageExamples.state";
import { useState } from "react";
import useGenericMutation from "shared/hooks/useGenericMutation";
import { apiRoutes } from "routes";

const usePageExamplesGridActions = ({
    selectedSinglePageExample,
    fetchPageExamplesSummary,
    fetchPageExamples,
}: usePageExamplesGridActionsProps) => {
    const setSinglePageExampleAction = useSetRecoilState(SinglePageExampleActionState);
    const setSelectedSinglePageExample = useSetRecoilState(SelectedSinglePageExampleState);

    const [updateSinglePageExampleDialogOpen, setUpdateSinglePageExampleDialogOpen] = useState<boolean>(false);
    const [deleteSinglePageExampleDialogOpen, setDeleteSinglePageExampleDialogOpen] = useState<boolean>(false);

    const { displaySuccessAlert, displayFailureAlert } = useDisplayAlert();

    const handleEditSinglePageExampleClick = (pageExample: PageExampleType) => {
        setSinglePageExampleAction("edit");
        setSelectedSinglePageExample(pageExample);
        handleToggleUpdateSinglePageExampleDialog();
    };

    const handleDeleteSinglePageExampleClick = (pageExample: PageExampleType) => {
        setSelectedSinglePageExample(pageExample);
        handleToggleDeleteSinglePageExampleDialog();
    };

    const {
        columns: pageExamplesGridColumns,
        rows: pageExamplesGridRows,
        setPageExamplesGridRows,
    } = usePageExamplesGridContent({
        onEditSinglePageExampleClick: handleEditSinglePageExampleClick,
        onDeleteSinglePageExampleClick: handleDeleteSinglePageExampleClick,
    });

    const { mutateAsync: updateSinglePageExample, isPending: isUpdatingSinglePageExample } = useGenericMutation({
        method: "POST",
        endpointPath: `${apiRoutes.pageExample}/${selectedSinglePageExample?.id}`,
    });

    const { mutateAsync: deleteSinglePageExample, isPending: isDeletingSinglePageExample } = useGenericMutation({
        method: "DELETE",
        endpointPath: `${apiRoutes.pageExample}/${selectedSinglePageExample?.id}`,
    });

    const handleToggleUpdateSinglePageExampleDialog = () => {
        setUpdateSinglePageExampleDialogOpen(!updateSinglePageExampleDialogOpen);
    };

    const handleToggleDeleteSinglePageExampleDialog = () => {
        setDeleteSinglePageExampleDialogOpen(!deleteSinglePageExampleDialogOpen);
    };

    const handleUpdateSinglePageExampleSubmit = (formData: SinglePageExampleFormDataType) => {
        updateSinglePageExample(formData)
            .then(() => {
                displaySuccessAlert("The page example has been successfully updated");
                handleToggleUpdateSinglePageExampleDialog();
                fetchPageExamplesSummary({});
                handleUpdatePageExamplesGridRows();
            })
            .catch(() => displayFailureAlert("Error occured while updating the page example, please try again"));
    };

    const handleSinglePageExampleDeletion = () => {
        deleteSinglePageExample({})
            .then(() => {
                displaySuccessAlert("The page example has been successfully deleted");
                handleToggleDeleteSinglePageExampleDialog();
                fetchPageExamplesSummary({});
                handleUpdatePageExamplesGridRows();
            })
            .catch(() => displayFailureAlert("Error occured while deleting the page example, please try again"));
    };

    const handleUpdatePageExamplesGridRows = (callback?: (data?: unknown) => void) => {
        fetchPageExamples({})
            .then((axiosResponse: AxiosResponse) => {
                setPageExamplesGridRows(axiosResponse?.data?.pageExamples);
                callback?.();
            })
            .catch(() => {
                displayFailureAlert("Error while fetching the page examples, please try again");
            });
    };

    return {
        pageExamplesGridColumns,
        pageExamplesGridRows,
        isUpdatingSinglePageExample,
        isDeletingSinglePageExample,
        updateSinglePageExampleDialogOpen,
        deleteSinglePageExampleDialogOpen,
        handleToggleUpdateSinglePageExampleDialog,
        handleToggleDeleteSinglePageExampleDialog,
        handleUpdateSinglePageExampleSubmit,
        handleSinglePageExampleDeletion,
        handleUpdatePageExamplesGridRows,
    };
};

export default usePageExamplesGridActions;
