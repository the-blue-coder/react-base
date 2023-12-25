const useUpdateEntityTagsDialogStyles = () => {
    return {
        updateEntityTagsDialog: {
            "& form.rjsf": {
                "& > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)": {
                    marginTop: "0 !important",

                    "& > div:nth-of-type(1)": {
                        paddingTop: 0,

                        "& > div:nth-of-type(1) > div:nth-of-type(1)": {
                            display: "inline",
                        },
                    },

                    "& > div:nth-of-type(2)": {
                        marginTop: "-5px",
                        paddingTop: 0,

                        "& #entity-tags-select": {
                            width: "100%",
                        },
                    },
                },
            },
        },
    };
};

export default useUpdateEntityTagsDialogStyles;
