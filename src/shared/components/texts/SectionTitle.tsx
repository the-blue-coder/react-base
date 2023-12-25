import { Box, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { SelectedPropertyState } from "shared/states/PropertySwitcher.state";
import useSectionTitleStyles from "shared/styles/components/texts/useSectionTitleStyles";
import { SectionTitleProps } from "shared/types/Texts.type";

const SectionTitle: React.FC<SectionTitleProps> = ({ hasUpperSection = true, children }) => {
    const selectedProperty = useRecoilValue(SelectedPropertyState);
    const styles = useSectionTitleStyles();

    return (
        <Box sx={styles.sectionTitle} mb={1}>
            <Typography component="h1">
                {hasUpperSection && (
                    <>
                        {selectedProperty?.name} ({selectedProperty?.type}) {"> "}
                    </>
                )}
                {children}
            </Typography>
        </Box>
    );
};

export default SectionTitle;
