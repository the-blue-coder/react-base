import { useRef, forwardRef, useImperativeHandle } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import useGenericDataGridStyles from "shared/styles/components/grids/useGenericDataGridStyles";
import { defaultDataGridPageSize } from "shared/constants/MuiDataGrid.constant";
import { GenericDataGridProps } from "shared/types/Grids.type";
import { RefType } from "shared/types/Misc.type";

const GenericDataGrid = forwardRef<RefType, GenericDataGridProps>(
    (
        {
            columns,
            rows,
            pageSize = defaultDataGridPageSize,
            checkboxSelection = true,
            disableRowSelectionOnClick = false,
            disableColumnMenu = false,
            isLoading = false,
            onCellDoubleClick,
        },
        ref
    ) => {
        const styles = useGenericDataGridStyles();

        const gridRef = useRef<HTMLDivElement>(null);

        const handlePageChangeScrollToGridTop = () => {
            if (gridRef?.current) {
                gridRef.current.scrollIntoView();
            }
        };

        // Use useImperativeHandle to expose a function through the ref
        useImperativeHandle(ref, () => ({
            scrollIntoView: () => {
                if (gridRef?.current) {
                    gridRef.current.scrollIntoView();
                }
            },
        }));

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
    }
);

export default GenericDataGrid;
