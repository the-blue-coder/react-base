const useMainLayoutStyles = () => {
    return {
        main: {
            "& #content": {
                minHeight: "calc(100vh - 120px)",
            },
        },
    };
};

export default useMainLayoutStyles;
