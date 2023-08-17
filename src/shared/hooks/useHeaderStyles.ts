const useHeaderStyles = () => {
    const styles = {
        header: {
            position: "static",
            backgroundColor: "transparent",
            boxShadow: "none",

            "& #toolbar": {
                height: 90,
            },
        },
    };

    return { styles };
};

export default useHeaderStyles;
