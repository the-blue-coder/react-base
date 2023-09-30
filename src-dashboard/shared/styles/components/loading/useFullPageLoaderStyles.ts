const useFullPageLoaderStyles = () => {
    return {
        fullPageLoader: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ffffff",
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 1,
        },
    };
};

export default useFullPageLoaderStyles;
