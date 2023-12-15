import { CustomGridSelectFilterFormDataType } from "generics/types/Grids.type";
import GenericForm from "../forms/GenericForm";
import { GridFilterInputValueProps } from "@mui/x-data-grid";

const CustomGridSelectFilterForm: React.FC<GridFilterInputValueProps> = ({ schema, item, applyValue }) => {
    const formData = {
        filter: item.value,
    };

    const handleFilterChange = (formData: CustomGridSelectFilterFormDataType) => {
        applyValue({ ...item, value: formData.filter });
    };

    return <GenericForm schema={schema} formData={formData} hideDefaultSubmitBtn onFormChange={handleFilterChange} />;
};

export default CustomGridSelectFilterForm;
