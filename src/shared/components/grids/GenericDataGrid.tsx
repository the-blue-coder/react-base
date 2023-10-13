import { GenericDataGridProps } from "shared/types/Grids.type";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import useGenericDataGridStyles from "shared/styles/components/grids/useGenericDataGridStyles";
import { useRef } from "react";

const GenericDataGrid: React.FC<GenericDataGridProps> = ({
    columns,
    rows,
    pageSize = 5,
    checkboxSelection = true,
    disableRowSelectionOnClick = true,
}) => {
    const styles = useGenericDataGridStyles();

    const gridRef = useRef<HTMLDivElement>(null);

    const handlePageChange = () => {
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
                onPaginationModelChange={handlePageChange}
            />
        </Box>
    );
};

export default GenericDataGrid;
