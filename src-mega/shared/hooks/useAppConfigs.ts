import useDotEnv from "./useDotEnv";

const useAppConfigs = () => {
    const { getEnvVariable } = useDotEnv();

    const getIsPortfolio = () => {
        return getEnvVariable("VITE_IS_PORTFOLIO") === "true";
    };

    const isPortfolio = getIsPortfolio();

    return {
        isPortfolio,
    };
};

export default useAppConfigs;
