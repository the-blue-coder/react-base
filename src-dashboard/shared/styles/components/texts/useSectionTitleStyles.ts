import { BASE_COLOR } from "shared/constants/colors.constant";

const useSectionTitleStyles = () => {
    return {
        sectionTitle: {
            marginBottom: 0,

            "& h1": {
                fontSize: 18,
                fontWeight: "bold",
                color: BASE_COLOR.primary,
            },
        },
    };
};

export default useSectionTitleStyles;
