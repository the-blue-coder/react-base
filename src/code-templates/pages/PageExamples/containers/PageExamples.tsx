/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from "@mui/material";
import SectionTitle from "shared/components/texts/SectionTitle";
import usePageExamplesStyles from "../styles/usePageExamplesStyles";
import PageExamplesToolbar from "../components/PageExamplesToolbar";
import AddPageExampleDialog from "../components/AddPageExampleDialog";
import usePageExampleToolbarActions from "../hooks/usePageExampleToolbarActions";
import usePageExamplesFormSchemas from "../hooks/usePageExamplesFormSchemas";
import PageExamplesGrid from "../components/PageExamplesGrid";
import usePageExamplesGridActions from "../hooks/usePageExamplesGridActions";
import usePageExamples from "pages/PageExamples/hooks/usePageExamples";
import { useRecoilValue } from "recoil";
import { SelectedSinglePageExampleState } from "../states/PageExamples.state";
import { useEffect } from "react";
import UpdateSinglePageExampleDialog from "../components/UpdateSinglePageExampleDialog";
import DeleteSinglePageExampleConfirmationDialog from "../components/DeleteSinglePageExampleConfirmationDialog";
import usePageExamplesSummary from "../hooks/usePageExamplesSummary";
import Spinner from "shared/components/loading/Spinner";
import GenericSummaryTable from "shared/components/tables/GenericSummaryTable";

const PageExamples: React.FC = () => {
    const selectedSinglePageExample = useRecoilValue(SelectedSinglePageExampleState);

    const styles = usePageExamplesStyles();

    /**
     * Backend data
     */
    const { isFetchingPageExamplesSummary, pageExamplesSummaryData, fetchPageExamplesSummary } = usePageExamplesSummary();

    const { isFetchingPageExamples, fetchPageExamples } = usePageExamples();
    // End of Backend data

    /**
     * Form schemas
     */
    const { singlePageExampleFormSchema } = usePageExamplesFormSchemas();
    // End of form schemas

    /**
     * Actions
     */
    const {
        pageExamplesGridColumns,
        pageExamplesGridRows,
        updateSinglePageExampleDialogOpen,
        deleteSinglePageExampleDialogOpen,
        isUpdatingSinglePageExample,
        isDeletingSinglePageExample,
        handleToggleUpdateSinglePageExampleDialog,
        handleToggleDeleteSinglePageExampleDialog,
        handleUpdateSinglePageExampleSubmit,
        handleUpdatePageExamplesGridRows,
        handleSinglePageExampleDeletion,
    } = usePageExamplesGridActions({
        selectedSinglePageExample,
        fetchPageExamplesSummary,
        fetchPageExamples,
    });

    const { addPageExampleDialogOpen, isAddingPageExample, handleToggleAddPageExampleDialog, handleAddPageExampleSubmit } =
        usePageExampleToolbarActions({ fetchPageExamplesSummary, handleUpdatePageExamplesGridRows });
    // End of Actions

    useEffect(() => {
        fetchPageExamplesSummary({});
    }, []);

    useEffect(() => {
        handleUpdatePageExamplesGridRows();
    }, []);

    return (
        <Grid container sx={styles.pageExamples}>
            <Grid item xs={12}>
                <SectionTitle>Page examples</SectionTitle>
            </Grid>

            <Grid item xs={12} mt={0.5}>
                {isFetchingPageExamplesSummary && <Spinner />}
                {!isFetchingPageExamplesSummary && (
                    <GenericSummaryTable className="page-examples-summary-table" summaryData={pageExamplesSummaryData} />
                )}
            </Grid>

            <Grid item xs={12} mt={1}>
                <PageExamplesToolbar onToggleAddPageExampleDialog={handleToggleAddPageExampleDialog} />

                <AddPageExampleDialog
                    open={addPageExampleDialogOpen}
                    isPending={isAddingPageExample}
                    schema={singlePageExampleFormSchema}
                    onSubmit={handleAddPageExampleSubmit}
                    onClose={handleToggleAddPageExampleDialog}
                />
            </Grid>

            <Grid item xs={12} mt={1}>
                <PageExamplesGrid columns={pageExamplesGridColumns} rows={pageExamplesGridRows} isLoading={isFetchingPageExamples} />

                <UpdateSinglePageExampleDialog
                    open={updateSinglePageExampleDialogOpen}
                    isPending={isUpdatingSinglePageExample}
                    schema={singlePageExampleFormSchema}
                    selectedSinglePageExample={selectedSinglePageExample}
                    onSubmit={handleUpdateSinglePageExampleSubmit}
                    onClose={handleToggleUpdateSinglePageExampleDialog}
                />

                <DeleteSinglePageExampleConfirmationDialog
                    open={deleteSinglePageExampleDialogOpen}
                    isPending={isDeletingSinglePageExample}
                    selectedSinglePageExample={selectedSinglePageExample}
                    onClose={handleToggleDeleteSinglePageExampleDialog}
                    onConfirm={handleSinglePageExampleDeletion}
                />
            </Grid>
        </Grid>
    );
};

export default PageExamples;
