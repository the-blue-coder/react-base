const useVideoUploadFormStyles = () => {
    return {
        videoUploadForm: {
            "& .form-container": {
                width: 400,

                "& form.rjsf": {
                    "& > div > div > div > div:nth-of-type(2)": {
                        marginBottom: "4px !important",
                    },
                },
            },
        },
    };
};

export default useVideoUploadFormStyles;
