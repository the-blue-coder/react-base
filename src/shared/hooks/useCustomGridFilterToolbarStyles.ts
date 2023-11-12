const useCustomGridFilterToolbarStyles = () => {
    return {
        customGridFilterToolbar: {
            "& .search-bar": {
                position: "absolute",
                top: 22,
                right: 0,
            },

            "& .clear-icon": {
                position: "absolute",
                top: 11,
                marginLeft: "5px",
                fontSize: 20,
                cursor: "pointer",
            },
        },
    };
};

export default useCustomGridFilterToolbarStyles;
