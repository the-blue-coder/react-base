import CustomSelectField from "generics/components/forms/CustomSelectField";
import { GenericFormSchemaType } from "generics/types/Forms.type";
import { useCustomGridSelectFilterFormSchemaProps } from "generics/types/Grids.type";

const useCustomGridSelectFilterFormSchema = ({ options }: useCustomGridSelectFilterFormSchemaProps): GenericFormSchemaType => {
    return {
        schema: {
            type: "object",
            properties: {
                filter: {
                    type: "string",
                    title: "Filter",
                },
            },
        },

        uiSchema: {
            filter: {
                "ui:widget": CustomSelectField,
                "ui:options": {
                    variant: "standard",
                    options,
                    isMultiple: true,
                },
            },
        },
    };
};

export default useCustomGridSelectFilterFormSchema;
