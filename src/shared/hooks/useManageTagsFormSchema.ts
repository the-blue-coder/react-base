import { GenericFormSchemaType } from "shared/types/Forms.type";

const useManageTagsFormSchema = (): GenericFormSchemaType => {
    return {
        schema: {
            type: "object",
            properties: {
                tags: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            value: {
                                type: "string",
                                title: "Insert a tag",
                            },
                        },
                    },
                },
            },
        },

        uiSchema: {
            tags: {
                "ui:options": {
                    orderable: false,
                },
            },
        },
    };
};

export default useManageTagsFormSchema;
