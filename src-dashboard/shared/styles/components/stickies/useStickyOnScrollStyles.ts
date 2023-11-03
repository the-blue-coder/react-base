const useStickyOnScrollStyles = (isSticky: boolean) => {
    return {
        stickyOnScroll: {
            position: isSticky ? "fixed" : "static",
            top: 0,
            zIndex: isSticky ? 1000 : "auto",
        },
    };
};

export default useStickyOnScrollStyles;
