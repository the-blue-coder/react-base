/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { GenericMutationPropsType } from "../types/Mutations.type";
import useDotEnv from "./useDotEnv";

const useGenericMutation = ({ method = "POST", endpointPath }: GenericMutationPropsType) => {
    const { getEnvVariable } = useDotEnv();

    const mutation = useMutation(async (data: any) => {
        const url = `${getEnvVariable("VITE_API_BASE_URL")}${endpointPath}`;

        return await axios({ method, url, data });
    });

    return { ...mutation };
};

export default useGenericMutation;
