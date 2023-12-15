import { Box, Typography } from "@mui/material";
import useSectionSubTitleStyles from "generics/styles/components/texts/useSectionSubTitleStyles";
import { SectionSubTitleProps } from "generics/types/Texts.type";

const SectionSubTitle: React.FC<SectionSubTitleProps> = ({ children }) => {
    const styles = useSectionSubTitleStyles();

    return (
        <Box sx={styles.sectionSubTitle} mb={1}>
            <Typography component="h2">{children}</Typography>
        </Box>
    );
};

export default SectionSubTitle;
