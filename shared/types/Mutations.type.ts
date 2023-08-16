export type GenericMutationPropsType = {
    method?: "GET" | "POST" | "PUT" | "DELETE";
    endpointPath: string;
    isProtected?: boolean;
};
