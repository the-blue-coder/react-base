import CustomSelectField from "shared/components/forms/CustomSelectField";
import { GenericFormSchemaType } from "shared/types/Forms.type";
import { useCustomGridSelectFilterFormSchemaProps } from "shared/types/Grids.type";

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
