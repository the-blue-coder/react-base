import { GenericFormSchemaType } from "generics/types/Forms.type";
import CustomSelectField from "generics/components/forms/CustomSelectField";
import { usePropertySwitcherFormSchemaProps } from "generics/types/PropertySwitcher.type";

const usePropertySwitcherFormSchema = ({ propertiesOptions }: usePropertySwitcherFormSchemaProps): GenericFormSchemaType => {
    return {
        schema: {
            type: "object",
            properties: {
                selectedPropertyId: {
                    type: "number",
                    title: "Select a property",
                },
            },
        },

        uiSchema: {
            selectedPropertyId: {
                "ui:widget": CustomSelectField,
                "ui:options": {
                    id: "property-switcher",
                    options: propertiesOptions,
                },
            },
        },
    };
};

export default usePropertySwitcherFormSchema;
