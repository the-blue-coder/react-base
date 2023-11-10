import SelectField from "shared/components/forms/SelectField";
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
                "ui:widget": SelectField,
                "ui:options": {
                    variant: "standard",
                    options,
                    isMultiple: true,
                    hasClearBtn: true,
                },
            },
        },
    };
};

export default useCustomGridSelectFilterFormSchema;
