import { GridColDef, GridEventListener, GridValidRowModel } from "@mui/x-data-grid";

export type GenericDataGridProps = {
    columns: GridColDef[];
    rows: GridValidRowModel[];
    pageSize?: number;
    checkboxSelection?: boolean;
    disableRowSelectionOnClick?: boolean;
    disableColumnMenu?: boolean;
    isLoading?: boolean;
    onCellClick?: GridEventListener<"cellClick">;
};
