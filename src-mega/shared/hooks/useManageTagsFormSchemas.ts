import { useManageTagsFormSchemasProps } from "shared/types/Tags.type";
import useManageTagsFormSchema from "./useManageTagsFormSchema";
import useUpdateEntityTagsFormSchema from "./useUpdateEntityTagsFormSchema";

const useManageTagsFormSchemas = ({ updateEntityTagsFieldTitle }: useManageTagsFormSchemasProps) => {
    const manageTagsFormSchema = useManageTagsFormSchema();

    const updateEntityTagsFormSchema = useUpdateEntityTagsFormSchema({
        updateEntityTagsFieldTitle: updateEntityTagsFieldTitle || "Entity tags",
    });

    return {
        manageTagsFormSchema,
        updateEntityTagsFormSchema,
    };
};

export default useManageTagsFormSchemas;
