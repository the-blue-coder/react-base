import { useState, useEffect, useRef, MutableRefObject } from "react";
import Box from "@mui/material/Box";
import { StickyOnScrollProps } from "shared/types/Stickies.type";
import useStickyOnScrollStyles from "shared/styles/components/stickies/useStickyOnScrollStyles";

const StickyOnScroll: React.FC<StickyOnScrollProps> = ({ children }) => {
    const [topOffset, setTopOffset] = useState<number>(0);
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const elementRef = useRef(null);
    const styles = useStickyOnScrollStyles(isSticky);

    useEffect(() => {
        const handleScroll = () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const elementHeight = (elementRef as MutableRefObject<any>).current.clientHeight;

            setIsSticky(window.scrollY > topOffset);

            if (!isSticky && elementHeight !== topOffset) {
                setTopOffset(elementHeight);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [topOffset, isSticky]);

    return (
        <Box ref={elementRef} sx={styles.stickyOnScroll} className={`sticky-on-scroll ${isSticky ? "is-sticky" : ""}`}>
            {children}
        </Box>
    );
};

export default StickyOnScroll;
