import { Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { SelectedPropertyState } from "shared/state/PropertySwitcher.state";
import useSectionTitleStyles from "shared/styles/components/texts/useSectionTitleStyles";
import { SectionTitleProps } from "shared/types/Texts.type";

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
    const styles = useSectionTitleStyles();

    return (
        <Typography component="h1" sx={styles.sectionTitle}>
            {children}
        </Typography>
    );
};

export default SectionTitle;
