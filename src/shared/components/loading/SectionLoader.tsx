import { Box } from "@mui/material";
import Spinner from "./Spinner";
import useSectionLoaderStyles from "shared/styles/components/loading/useSectionLoaderStyles";

const SectionLoader: React.FC = () => {
    const styles = useSectionLoaderStyles();

    return (
        <Box sx={styles.sectionLoader}>
            <Spinner />
        </Box>
    );
};

export default SectionLoader;
