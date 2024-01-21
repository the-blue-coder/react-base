import GenericDataGrid from "shared/components/grids/GenericDataGrid";
import { Box } from "@mui/material";
import { GenericDataGridPropsWithoutColumnNames } from "shared/types/Grids.type";
import usePageExamplesGridStyles from "../styles/usePageExamplesGridStyles";
import { PAGE_EXAMPLES_GRID_COLUMN_NAMES } from "../enums/PageExamplesGrid.enum";

const PageExamplesGrid: React.FC<GenericDataGridPropsWithoutColumnNames> = ({
    columns,
    rows,
    isLoading,
    filterSelectsOptions,
    onRowSelectionModelChange,
    onCellDoubleClick,
}) => {
    const styles = usePageExamplesGridStyles();

    return (
        <Box sx={styles.pageExamplesGrid}>
            <GenericDataGrid
                columns={columns}
                columnNames={PAGE_EXAMPLES_GRID_COLUMN_NAMES}
                rows={rows}
                isLoading={isLoading}
                filterSelectsOptions={filterSelectsOptions}
                disableColumnMenu
                onRowSelectionModelChange={onRowSelectionModelChange}
                onCellDoubleClick={onCellDoubleClick}
            />
        </Box>
    );
};

export default PageExamplesGrid;
