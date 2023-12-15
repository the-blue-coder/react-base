import { BASE_COLOR } from "generics/constants/colors.constant";

const useFacebookButtonStyles = () => {
    return {
        facebookButton: {
            backgroundColor: BASE_COLOR.facebookBlue,
            color: `${BASE_COLOR.white} !important`,

            "&:hover": {
                backgroundColor: BASE_COLOR.facebookBlue,
            },
        },
    };
};

export default useFacebookButtonStyles;
