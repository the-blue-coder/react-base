import { BASE_COLOR } from "generics/constants/colors.constant";

const useFullPageLoaderStyles = () => {
    return {
        fullPageLoader: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: BASE_COLOR.white,
            position: "fixed",
            width: "100%",
            height: "100%",
            zIndex: 6,
        },
    };
};

export default useFullPageLoaderStyles;
