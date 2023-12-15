const useGenericFormStyles = (hideDefaultSubmitBtn: boolean) => {
    return {
        genericForm: {
            "& form.rjsf": {
                "& > .MuiBox-root": {
                    display: hideDefaultSubmitBtn ? "none" : "initial",
                },
            },
        },
    };
};

export default useGenericFormStyles;
