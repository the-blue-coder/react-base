const useHeaderStyles = () => {
    return {
        header: {
            position: "static",
            backgroundColor: "transparent",
            boxShadow: "none",

            "& #toolbar": {
                height: 90,
            },
        },
    };
};

export default useHeaderStyles;
