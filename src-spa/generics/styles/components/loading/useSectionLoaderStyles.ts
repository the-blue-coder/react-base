import { BASE_COLOR } from "generics/constants/colors.constant";

const useSectionLoaderStyles = () => {
    return {
        sectionLoader: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            backgroundColor: BASE_COLOR.white,
            width: "100%",
            height: "100vh",
            zIndex: 5,
        },
    };
};

export default useSectionLoaderStyles;
