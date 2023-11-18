import { GenericDataGridProps } from "shared/types/Grids.type";
import { DataGrid, GridFilterModel, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import useGenericDataGridStyles from "shared/styles/components/grids/useGenericDataGridStyles";
import { useMemo, useRef, useState } from "react";
import { defaultDataGridPageSize } from "shared/constants/MuiDataGrid.constant";
import CustomGridFilterToolbar from "./CustomGridFilterToolbar";
import { GridFilterContext } from "shared/contexts/Grids.context";

const GenericDataGrid: React.FC<GenericDataGridProps> = ({
    columns,
    columnNames,
    rows,
    pageSize = defaultDataGridPageSize,
    checkboxSelection = true,
    disableRowSelectionOnClick = true,
    disableColumnMenu = false,
    onlyGridFilterInToolbar = true,
    isLoading = false,
    filterSelectsOptions,
    onRowSelectionModelChange,
    onCellDoubleClick,
}) => {
    const [currentFilterModel, setCurrentFilterModel] = useState<GridFilterModel | undefined>();

    const contextValue = useMemo(
        () => ({ currentFilterModel, columnNames, filterSelectsOptions }),
        [currentFilterModel, columnNames, filterSelectsOptions]
    );

    const gridRef = useRef<HTMLDivElement>(null);

    const styles = useGenericDataGridStyles();

    const handlePageChangeScrollToGridTop = () => {
        if (gridRef?.current) {
            gridRef.current.scrollIntoView();
        }
    };

    const handleFilterModelChange = (model: GridFilterModel) => {
        setCurrentFilterModel(model);
    };

    return (
        <GridFilterContext.Provider value={contextValue}>
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
                        toolbar: onlyGridFilterInToolbar ? CustomGridFilterToolbar : GridToolbar,
                    }}
                    autoHeight
                    loading={isLoading}
                    pageSizeOptions={[pageSize]}
                    checkboxSelection={checkboxSelection}
                    disableRowSelectionOnClick={disableRowSelectionOnClick}
                    disableColumnMenu={disableColumnMenu}
                    onRowSelectionModelChange={onRowSelectionModelChange}
                    onCellDoubleClick={onCellDoubleClick}
                    onPaginationModelChange={handlePageChangeScrollToGridTop}
                    onFilterModelChange={handleFilterModelChange}
                />
            </Box>
        </GridFilterContext.Provider>
    );
};

export default GenericDataGrid;
