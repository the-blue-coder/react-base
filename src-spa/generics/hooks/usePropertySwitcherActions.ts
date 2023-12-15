import { PropertySwitcherFormDataType, PropertyType, usePropertySwitcherActionsProps } from "generics/types/PropertySwitcher.type";
import { useSetRecoilState } from "recoil";
import { SelectedPropertyState } from "generics/states/PropertySwitcher.state";

const usePropertySwitcherActions = ({ properties }: usePropertySwitcherActionsProps) => {
    const setSelectedProperty = useSetRecoilState(SelectedPropertyState);

    const handleFormChange = (formData: PropertySwitcherFormDataType) => {
        setSelectedProperty(properties?.find((property: PropertyType) => Number(property.id) === formData.selectedPropertyId) || null);
    };

    return {
        handleFormChange,
    };
};

export default usePropertySwitcherActions;
