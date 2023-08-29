const useMainLayoutStyles = () => {
    return {
        main: {
            "& #content": {
                minHeight: "calc(100vh - 30px)",
            },
        },
    };
};

export default useMainLayoutStyles;
