import { Box } from "@mui/material";
import Spinner from "./Spinner";
import useFullPageLoaderStyles from "shared/styles/components/loading/useFullPageLoaderStyles";

const FullPageLoader: React.FC = () => {
    const styles = useFullPageLoaderStyles();

    return (
        <Box sx={styles.fullPageLoader}>
            <Spinner />
        </Box>
    );
};

export default FullPageLoader;
