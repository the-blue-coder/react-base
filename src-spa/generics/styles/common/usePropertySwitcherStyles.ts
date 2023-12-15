const usePropertySwitcherStyles = () => {
    return {
        propertySwitcher: {
            position: "absolute",
            top: 0,
            right: 8,
            zIndex: 5,

            "& .MuiGrid-root.MuiGrid-container": {
                marginTop: "0 !important",

                "& .MuiGrid-root.MuiGrid-item": {
                    margin: "0 !important",
                    padding: "0 !important",
                },
            },
        },
    };
};

export default usePropertySwitcherStyles;
