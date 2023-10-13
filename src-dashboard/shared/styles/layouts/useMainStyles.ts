const useMainStyles = () => {
    const leftSectionWidth = 225;

    return {
        main: {
            "& #content": {
                minHeight: "calc(100vh - 30px)",

                "& #left-section": {
                    position: "fixed",
                    width: leftSectionWidth,
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

export default useMainStyles;
