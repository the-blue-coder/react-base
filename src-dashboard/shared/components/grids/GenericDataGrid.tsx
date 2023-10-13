import { GenericDataGridProps } from "shared/types/Grids.type";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import useGenericDataGridStyles from "shared/styles/components/grids/useGenericDataGridStyles";
import { useRef } from "react";
import { defaultDataGridPageSize } from "shared/constants/MuiDataGrid.constant";

const GenericDataGrid: React.FC<GenericDataGridProps> = ({
    columns,
    rows,
    pageSize = defaultDataGridPageSize,
    checkboxSelection = true,
    disableRowSelectionOnClick = false,
    disableColumnMenu = false,
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
                pageSizeOptions={[pageSize]}
                checkboxSelection={checkboxSelection}
                disableRowSelectionOnClick={disableRowSelectionOnClick}
                onPaginationModelChange={handlePageChangeScrollToGridTop}
                disableColumnMenu={disableColumnMenu}
            />
        </Box>
    );
};

export default GenericDataGrid;
