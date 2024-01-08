/* eslint-disable @typescript-eslint/no-explicit-any */

const useDotEnv = () => {
    const getEnvVariable = (variableName: string): string | undefined => {
        return (import.meta as any).env[variableName];
    };

    return { getEnvVariable };
};

export default useDotEnv;
