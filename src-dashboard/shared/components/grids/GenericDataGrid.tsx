import { GenericDataGridProps } from "shared/types/Grids.type";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import useGenericDataGridStyles from "shared/styles/components/grids/useGenericDataGridStyles";

const GenericDataGrid: React.FC<GenericDataGridProps> = ({
    columns,
    rows,
    pageSize = 5,
    checkboxSelection = true,
    disableRowSelectionOnClick = true,
}) => {
    const styles = useGenericDataGridStyles();

    return (
        <Box sx={styles.genericDataGrid}>
            <DataGrid
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
            />
        </Box>
    );
};

export default GenericDataGrid;
