import { GridColDef, GridEventListener, GridValidRowModel } from "@mui/x-data-grid";
import { GenericFormSchemaType, SelectOptionType } from "./Forms.type";

export type GenericDataGridProps = {
    columns: GridColDef[];
    rows: GridValidRowModel[];
    pageSize?: number;
    checkboxSelection?: boolean;
    disableRowSelectionOnClick?: boolean;
    disableColumnMenu?: boolean;
    onlyGridFilterInToolbar?: boolean;
    isLoading?: boolean;
    onCellDoubleClick?: GridEventListener<"cellDoubleClick">;
};

export type CustomGridSelectFilterFormProps = {
    schema: GenericFormSchemaType;
};

export type CustomGridSelectFilterFormDataType = {
    filter: number | number[];
};

export type useCustomGridFilterOperatorsProps = {
    field: string;
    selectOptions: SelectOptionType[];
};

export type useCustomGridSelectFilterFormSchemaProps = {
    options: SelectOptionType[];
};
