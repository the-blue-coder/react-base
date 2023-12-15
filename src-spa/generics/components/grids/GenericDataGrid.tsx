import { GenericDataGridProps } from "generics/types/Grids.type";
import { DataGrid, GridFilterModel, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import useGenericDataGridStyles from "generics/styles/components/grids/useGenericDataGridStyles";
import { useMemo, useRef, useState } from "react";
import { defaultDataGridPageSize } from "generics/constants/MuiDataGrid.constant";
import CustomGridFilterToolbar from "./CustomGridFilterToolbar";
import { GridFilterContext } from "generics/contexts/Grids.context";

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
    hasToolbar = true,
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

    const getToolbar = () => {
        if (!hasToolbar) {
            return null;
        }

        if (onlyGridFilterInToolbar) {
            return CustomGridFilterToolbar;
        }

        return GridToolbar;
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
                        toolbar: getToolbar(),
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
