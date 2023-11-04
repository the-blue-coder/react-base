const useSelectFieldStyles = () => {
    return {
        selectField: {
            "& .select-form-control": {
                minWidth: 150,

                "& .MuiSvgIcon-root[data-testid='ClearIcon']": {
                    position: "absolute",
                    right: "30px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                },
            },
        },
    };
};

export default useSelectFieldStyles;
