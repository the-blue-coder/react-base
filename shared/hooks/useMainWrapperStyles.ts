import { BASE_COLOR } from "../constants/colors";

const useMainWrapperStyles = () => {
    return {
        MainWrapper: {
            margin: "auto",
            padding: 1,
            maxWidth: 1600,

            logoContainer: {
                fontSize: 30,
                color: BASE_COLOR.mainPrimary,
            },
        },
    };
};

export default useMainWrapperStyles;
