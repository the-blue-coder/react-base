import { GridColDef, GridEventListener, GridFilterModel, GridValidRowModel } from "@mui/x-data-grid";
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
    filterSelectsOptions?: Record<string, SelectOptionType[]>;
    onCellDoubleClick?: GridEventListener<"cellDoubleClick">;
};

export type CustomGridSelectFilterFormProps = {
    schema: GenericFormSchemaType;
};

export type CustomGridSelectFilterFormDataType = {
    filter: number | number[];
};

export type GridFilterContextType = {
    currentFilterModel?: GridFilterModel;
    filterSelectsOptions?: Record<string, SelectOptionType[]>;
};

export type useCustomGridFilterOperatorsProps = {
    targetField: string;
    selectOptions: SelectOptionType[];
};

export type useCustomGridSelectFilterFormSchemaProps = {
    options: SelectOptionType[];
};
