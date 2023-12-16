import { CustomGridSelectFilterFormDataType } from "shared/types/Grids.type";
import GenericForm from "../forms/GenericForm";
import { CustomGridSelectFilterFormProps } from "shared/types/Forms.type";

const CustomGridSelectFilterForm: React.FC<CustomGridSelectFilterFormProps> = ({ schema, item, applyValue }) => {
    const formData = {
        filter: item.value,
    };

    const handleFilterChange = (formData: CustomGridSelectFilterFormDataType) => {
        applyValue({ ...item, value: formData.filter });
    };

    return <GenericForm schema={schema} formData={formData} hideDefaultSubmitBtn onFormChange={handleFilterChange} />;
};

export default CustomGridSelectFilterForm;
