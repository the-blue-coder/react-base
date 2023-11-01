import { GridColDef, GridEventListener, GridValidRowModel } from "@mui/x-data-grid";
import { GridApiCommunity } from "@mui/x-data-grid/internals";
import { MutableRefObject } from "react";

export type GenericDataGridProps = {
    apiRef: MutableRefObject<GridApiCommunity>;
    columns: GridColDef[];
    rows: GridValidRowModel[];
    pageSize?: number;
    checkboxSelection?: boolean;
    disableRowSelectionOnClick?: boolean;
    disableColumnMenu?: boolean;
    isLoading?: boolean;
    onCellDoubleClick?: GridEventListener<"cellDoubleClick">;
};
