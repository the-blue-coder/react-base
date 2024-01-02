import { BASE_COLOR } from "generics/constants/colors.constant";

const useGenericFileUploaderFieldStyles = () => {
    return {
        genericFileUploaderField: {
            "& .paper": {
                padding: 2,
                textAlign: "center",
                border: "2px dashed #cccccc",
                cursor: "pointer",
            },

            "& .thumbnail-container": {
                width: "100%",
                height: "100%",

                "& img": {
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                },
            },

            "& .error": {
                color: BASE_COLOR.primary,
            },
        },
    };
};

export default useGenericFileUploaderFieldStyles;
