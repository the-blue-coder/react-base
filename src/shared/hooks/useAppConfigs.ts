import useDotEnv from "./useDotEnv";

const useAppConfigs = () => {
    const { getEnvVariable } = useDotEnv();

    const getDisplayFacebookGroupCategories = () => {
        return getEnvVariable("VITE_DISPLAY_FACEBOOK_GROUP_CATEGORIES") === "true";
    };

    const displayFacebookGroupCategories = getDisplayFacebookGroupCategories();

    return {
        displayFacebookGroupCategories,
    };
};

export default useAppConfigs;
