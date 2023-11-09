import { CustomGridSelectFilterFormDataType, CustomGridSelectFilterFormProps } from "shared/types/Grids.type";
import GenericForm from "../forms/GenericForm";
import { GridFilterInputValueProps } from "@mui/x-data-grid";

const CustomGridSelectFilterForm: React.FC<CustomGridSelectFilterFormProps & GridFilterInputValueProps> = ({
    schema,
    item,
    applyValue,
}) => {
    const defaultValue = {
        filter: item.value,
    };

    const handleFilterChange = (formData: CustomGridSelectFilterFormDataType) => {
        applyValue({ ...item, value: formData.filter });
    };

    return <GenericForm schema={schema} defaultValue={defaultValue} hideDefaultSubmitBtn onFormChange={handleFilterChange} />;
};

export default CustomGridSelectFilterForm;
