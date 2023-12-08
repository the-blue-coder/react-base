import { Box, Typography } from "@mui/material";
import useSectionSubTitleStyles from "shared/styles/components/texts/useSectionSubTitleStyles";
import { SectionSubTitleProps } from "shared/types/Texts.type";

const SectionSubTitle: React.FC<SectionSubTitleProps> = ({ children }) => {
    const styles = useSectionSubTitleStyles();

    return (
        <Box sx={styles.sectionSubTitle} mb={1}>
            <Typography component="h2">{children}</Typography>
        </Box>
    );
};

export default SectionSubTitle;
