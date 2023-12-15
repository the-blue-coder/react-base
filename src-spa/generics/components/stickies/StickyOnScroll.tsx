/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import { StickyOnScrollProps } from "generics/types/Stickies.type";
import useStickyOnScrollStyles from "generics/styles/components/stickies/useStickyOnScrollStyles";

const StickyOnScroll: React.FC<StickyOnScrollProps> = ({ offsetTopStickyStart = 0, children }) => {
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const elementRef = useRef(null);
    const styles = useStickyOnScrollStyles(isSticky);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > offsetTopStickyStart);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isSticky]);

    return (
        <Box ref={elementRef} sx={styles.stickyOnScroll} className={`sticky-on-scroll ${isSticky ? "is-sticky" : ""}`}>
            {children}
        </Box>
    );
};

export default StickyOnScroll;
