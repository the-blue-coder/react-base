import { GenericDataGridProps } from "shared/types/Grids.type";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import useGenericDataGridStyles from "shared/styles/components/grids/useGenericDataGridStyles";
import { useRef } from "react";
import { defaultDataGridPageSize } from "shared/constants/MuiDataGrid.constant";
import GridFilterToolbar from "./CustomGridFilterToolbar";

const GenericDataGrid: React.FC<GenericDataGridProps> = ({
    columns,
    rows,
    pageSize = defaultDataGridPageSize,
    checkboxSelection = true,
    disableRowSelectionOnClick = false,
    disableColumnMenu = true,
    onlyGridFilterInToolbar = false,
    isLoading = false,
    onCellDoubleClick,
}) => {
    const styles = useGenericDataGridStyles();

    const gridRef = useRef<HTMLDivElement>(null);

    const handlePageChangeScrollToGridTop = () => {
        if (gridRef?.current) {
            gridRef.current.scrollIntoView();
        }
    };

    return (
        <Box sx={styles.genericDataGrid}>
            <DataGrid
                ref={gridRef}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize,
                        },
                    },
                }}
                slots={{
                    toolbar: onlyGridFilterInToolbar ? GridFilterToolbar : GridToolbar,
                }}
                autoHeight
                loading={isLoading}
                pageSizeOptions={[pageSize]}
                checkboxSelection={checkboxSelection}
                disableRowSelectionOnClick={disableRowSelectionOnClick}
                disableColumnMenu={disableColumnMenu}
                onCellDoubleClick={onCellDoubleClick}
                onPaginationModelChange={handlePageChangeScrollToGridTop}
            />
        </Box>
    );
};

export default GenericDataGrid;
