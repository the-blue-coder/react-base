import { GridCellParams, GridFilterItem, GridFilterOperator } from "@mui/x-data-grid";
import CustomGridSelectFilterForm from "shared/components/grids/CustomGridSelectFilterForm";
import useCustomGridSelectFilterFormSchema from "./useCustomGridSelectFilterFormSchema";
import { useCustomGridFilterOperatorsProps } from "shared/types/Grids.type";

const useCustomGridFilterOperators = ({ targetField, selectOptions }: useCustomGridFilterOperatorsProps) => {
    const customGridSelectFilterFormSchema = useCustomGridSelectFilterFormSchema({ options: selectOptions });

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

                if (typeof params.row[targetField] === "string") {
                    console.log(params.row[targetField]);
                    console.log(filterItem.value);
                    return String(params.row[targetField]).includes(filterItem.value);
                }

                return params.row[targetField].some((value: number) => filterItem.value.includes(value));
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
