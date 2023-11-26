const useFullPageLoaderStyles = () => {
    return {
        fullPageLoader: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ffffff",
            position: "fixed",
            width: "100%",
            height: "100%",
            zIndex: 6,
        },
    };
};

export default useFullPageLoaderStyles;
