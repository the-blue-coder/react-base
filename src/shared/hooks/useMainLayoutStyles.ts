const useMainLayoutStyles = () => {
    const styles = {
        main: {
            "& #content": {
                minHeight: "calc(100vh - 120px)",
            },
        },
    };

    return { styles };
};

export default useMainLayoutStyles;
