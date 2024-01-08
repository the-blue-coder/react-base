import { Box, Typography } from "@mui/material";
import useSectionTitleStyles from "shared/styles/components/texts/useSectionTitleStyles";
import { SectionTitleProps } from "shared/types/Texts.type";

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
    const styles = useSectionTitleStyles();

    return (
        <Box sx={styles.sectionTitle} mb={1}>
            <Typography component="h1">{children}</Typography>
        </Box>
    );
};

export default SectionTitle;
