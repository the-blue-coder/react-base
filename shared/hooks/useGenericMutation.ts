import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { GenericMutationPropsType } from "../types/Mutations.type";
import useDotEnv from "./useDotEnv";
import useCookie from "react-use-cookie";
import { JWTTokenKey } from "pages/Authentication/Login/constants/Login.constant";
import { DynamicObject } from "shared/types/Misc.type";

const useGenericMutation = ({ method = "POST", endpointPath, isProtected = false }: GenericMutationPropsType) => {
    const { getEnvVariable } = useDotEnv();
    const [JWTToken] = useCookie(JWTTokenKey);

    const mutation = useMutation(async (data: any) => {
        const url = `${getEnvVariable("VITE_API_BASE_URL")}${endpointPath}`;
        const config: DynamicObject = {};

        if (isProtected) {
            config.headers = {
                Authorization: `Bearer ${JWTToken}`,
            };
        }

        return await axios({ method, url, data, ...config });
    });

    return { ...mutation };
};

export default useGenericMutation;
