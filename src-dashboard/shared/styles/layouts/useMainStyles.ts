const useMainStyles = () => {
    return {
        main: {
            "& #content": {
                minHeight: "calc(100vh - 30px)",

                "& #right-section": {
                    padding: "8px 8px 8px 16px",
                },
            },
        },
    };
};

export default useMainStyles;
