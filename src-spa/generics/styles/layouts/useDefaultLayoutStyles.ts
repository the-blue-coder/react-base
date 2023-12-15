const useDefaultLayoutStyles = () => {
    const leftSectionWidth = 225;

    return {
        defaultLayout: {
            "& #content": {
                minHeight: "calc(100vh - 30px)",

                "& #left-section": {
                    position: "fixed",
                    width: leftSectionWidth,

                    "& .other-items-container": {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    },
                },

                "& #right-section": {
                    position: "relative",
                    left: leftSectionWidth,
                    width: `calc(100% - ${leftSectionWidth}px)`,
                },
            },
        },
    };
};

export default useDefaultLayoutStyles;
