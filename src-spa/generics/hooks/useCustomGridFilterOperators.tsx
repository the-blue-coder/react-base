import { GridCellParams, GridFilterItem, GridFilterOperator } from "@mui/x-data-grid";
import CustomGridSelectFilterForm from "generics/components/grids/CustomGridSelectFilterForm";
import useCustomGridSelectFilterFormSchema from "./useCustomGridSelectFilterFormSchema";
import { useCustomGridFilterOperatorsProps } from "generics/types/Grids.type";

const useCustomGridFilterOperators = ({ targetField, options }: useCustomGridFilterOperatorsProps) => {
    const customGridSelectFilterFormSchema = useCustomGridSelectFilterFormSchema({ options });

    const customSelectFilterOperator: GridFilterOperator = {
        label: "contains",
        value: "contains",
        getApplyFilterFn: (filterItem: GridFilterItem) => {
            if (!filterItem.field || !filterItem.value || filterItem.value.length === 0 || !filterItem.operator) {
                return null;
            }

            return (params: GridCellParams): boolean => {
                if (!params.row[targetField]) {
                    return false;
                }

                // If is iterable, meaning the column has multiple value
                if (typeof params.row[targetField][Symbol.iterator] === "function") {
                    return params.row[targetField].some((value: number) => filterItem.value.includes(value));
                }

                return filterItem.value.includes(Number(params.row[targetField]));
            };
        },
        InputComponent: ({ item, applyValue, apiRef }) => (
            <CustomGridSelectFilterForm schema={customGridSelectFilterFormSchema} item={item} applyValue={applyValue} apiRef={apiRef} />
        ),
    };

    const customIsEmptyFilterOperator: GridFilterOperator = {
        label: "is empty",
        value: "is_empty",
        getApplyFilterFn: (filterItem: GridFilterItem) => {
            if (!filterItem.field || !filterItem.operator) {
                return null;
            }

            return (params: GridCellParams): boolean => {
                return !params.row[targetField];
            };
        },
    };

    return {
        customSelectFilterOperator,
        customIsEmptyFilterOperator,
    };
};

export default useCustomGridFilterOperators;
