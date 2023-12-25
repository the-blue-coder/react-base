import CustomSelectField from "shared/components/forms/CustomSelectField";
import { GenericFormSchemaType } from "shared/types/Forms.type";
import useTags from "./useTags";
import { useUpdateEntityTagsFormSchemaProps } from "shared/types/Tags.type";
import ManageTagsButton from "shared/components/buttons/ManageTagsButton";

const useUpdateEntityTagsFormSchema = ({ updateEntityTagsFieldTitle }: useUpdateEntityTagsFormSchemaProps): GenericFormSchemaType => {
    const { currentTags } = useTags();

    return {
        schema: {
            type: "object",
            properties: {
                manageTagsTextButton: {
                    type: "string",
                },
                entityTagsIds: {
                    type: "array",
                    items: {
                        type: "number",
                    },
                    title: updateEntityTagsFieldTitle,
                },
            },
        },

        uiSchema: {
            manageTagsTextButton: {
                "ui:widget": ManageTagsButton,
            },
            entityTagsIds: {
                "ui:widget": CustomSelectField,
                "ui:options": {
                    id: "entity-tags-select",
                    variant: "outlined",
                    options: currentTags,
                    isMultiple: true,
                    hasClearBtn: true,
                },
            },
        },
    };
};

export default useUpdateEntityTagsFormSchema;
