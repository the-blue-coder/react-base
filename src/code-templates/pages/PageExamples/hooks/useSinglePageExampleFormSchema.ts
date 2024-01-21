import CustomSelectField from "shared/components/forms/CustomSelectField";
import { GenericFormSchemaType } from "shared/types/Forms.type";

const useSinglePageExampleFormSchema = (): GenericFormSchemaType => {
    return {
        schema: {
            type: "object",
            properties: {
                firstname: {
                    type: "string",
                    title: "Firstname",
                },
                name: {
                    type: "string",
                    title: "Name",
                },
                age: {
                    type: "number",
                    title: "Age",
                },
                genderId: {
                    type: "number",
                    title: "Gender",
                },
                email: {
                    type: "number",
                    format: "email",
                    title: "Email",
                },
            },
            required: ["firstname", "name", "age", "genderId", "email"],
        },

        uiSchema: {
            genderId: {
                "ui:widget": CustomSelectField,
                "ui:options": {
                    options: [
                        { id: 1, name: "Male" },
                        { id: 2, name: "Female" },
                    ],
                },
                "ui:customErrorMessages": {
                    required: "Please select a gender",
                },
            },
        },
    };
};

export default useSinglePageExampleFormSchema;
