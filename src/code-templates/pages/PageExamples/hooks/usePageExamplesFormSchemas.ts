import useSinglePageExampleFormSchema from "./useSinglePageExampleFormSchema";

const usePageExamplesFormSchemas = () => {
    const singlePageExampleFormSchema = useSinglePageExampleFormSchema();

    return {
        singlePageExampleFormSchema,
    };
};

export default usePageExamplesFormSchemas;
