const useDynamicFormOneFieldStyles = () => {
    return {
        dynamicFormOneField: {
            "& form.rjsf": {
                "& > .form-group": {
                    "& > .MuiFormControl-root": {
                        "& > .MuiGrid-root": {
                            marginTop: "0 !important",

                            "& > .MuiGrid-item": {
                                marginBottom: "0 !important",
                                paddingTop: 0,

                                "& > .form-group": {
                                    "& > .MuiFormControl-root": {
                                        "& > .MuiPaper-root": {
                                            boxShadow: "none",

                                            "& > .MuiBox-root": {
                                                padding: 0,

                                                "& > #root_groupCategories__title": {
                                                    margin: 0,
                                                },

                                                "& > .MuiGrid-root": {
                                                    "& > .MuiGrid-container": {
                                                        "& > .MuiGrid-item:nth-of-type(1)": {
                                                            "& > .MuiBox-root": {
                                                                marginBottom: 0,

                                                                "& > .MuiPaper-root": {
                                                                    boxShadow: "none",

                                                                    "& > .MuiBox-root": {
                                                                        padding: 0,

                                                                        "& > .form-group": {
                                                                            "& > .MuiFormControl-root": {
                                                                                "& > .MuiBox-root": {
                                                                                    margin: 0,
                                                                                },

                                                                                "& > .MuiGrid-container": {
                                                                                    "& > .MuiGrid-item": {
                                                                                        marginBottom: "0 !important",
                                                                                    },
                                                                                },
                                                                            },
                                                                        },
                                                                    },
                                                                },
                                                            },
                                                        },

                                                        "& > .MuiGrid-item:nth-of-type(2)": {
                                                            position: "relative",
                                                            top: 4,
                                                            right: -2,

                                                            "& > button": {
                                                                paddingRight: "0 !important",
                                                            },
                                                        },
                                                    },

                                                    "& > .MuiGrid-container:nth-last-of-type(1)": {
                                                        "& > .MuiGrid-item": {
                                                            "& > .MuiBox-root": {
                                                                position: "relative",
                                                                right: -4,
                                                                marginTop: 1,

                                                                "& > button": {
                                                                    paddingRight: 0,
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },

                "& > .MuiBox-root": {
                    marginTop: 0,
                },
            },

            "& .MuiTypography-h5": {
                display: "none",
            },

            "& hr": {
                display: "none",
            },
        },
    };
};

export default useDynamicFormOneFieldStyles;
