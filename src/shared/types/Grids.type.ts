/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    GridCallbackDetails,
    GridColDef,
    GridEventListener,
    GridFilterModel,
    GridRowSelectionModel,
    GridValidRowModel,
} from "@mui/x-data-grid";
import { GenericFormSchemaType, SelectOptionType } from "./Forms.type";
import { DataGridPropsWithoutDefaultValue } from "@mui/x-data-grid/internals";

export type GenericDataGridProps = {
    columns: GridColDef[];
    columnNames: unknown;
    rows: GridValidRowModel[];
    pageSize?: number;
    checkboxSelection?: boolean;
    disableRowSelectionOnClick?: boolean;
    disableColumnMenu?: boolean;
    onlyGridFilterInToolbar?: boolean;
    isLoading?: boolean;
    hasToolbar?: boolean;
    filterSelectsOptions?: Record<string, SelectOptionType[]>;
    getRowClassName?: DataGridPropsWithoutDefaultValue["getRowClassName"];
    onRowSelectionModelChange?: (rowSelectionModel: GridRowSelectionModel, details: GridCallbackDetails<any>) => void;
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
    columnNames?: any;
    filterSelectsOptions?: Record<string, SelectOptionType[]>;
};

export type GridRowSelectionModelChangeFunctionType = (rowSelectionModel: GridRowSelectionModel, details: GridCallbackDetails<any>) => void;

export type useCustomGridFilterOperatorsProps = {
    targetField: string;
    options: SelectOptionType[];
};

export type useCustomGridSelectFilterFormSchemaProps = {
    options: SelectOptionType[];
};
