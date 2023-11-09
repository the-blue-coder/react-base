import { GridCellParams, GridFilterItem, GridFilterOperator } from "@mui/x-data-grid";
import CustomGridSelectFilterForm from "shared/components/grids/CustomGridSelectFilterForm";
import useCustomGridSelectFilterFormSchema from "./useCustomGridSelectFilterFormSchema";
import { useCustomGridFilterOperatorsProps } from "shared/types/Grids.type";

const useCustomGridFilterOperators = ({ field, selectOptions }: useCustomGridFilterOperatorsProps) => {
    const customGridSelectFilterFormSchema = useCustomGridSelectFilterFormSchema({ options: selectOptions });

    const customSelectFilterOperator: GridFilterOperator = {
        label: "contains",
        value: "contain",
        getApplyFilterFn: (filterItem: GridFilterItem) => {
            if (!filterItem.field || !filterItem.value || filterItem.value.length === 0 || !filterItem.operator) {
                return null;
            }

            return (params: GridCellParams): boolean => {
                if (!params.row[field]) {
                    return false;
                }
                return params.row[field].some((value: number) => filterItem.value.includes(value));
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
                return !params.row[field];
            };
        },
    };

    return {
        customSelectFilterOperator,
        customIsEmptyFilterOperator,
    };
};

export default useCustomGridFilterOperators;
