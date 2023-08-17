import { Grid } from "@mui/material";
import Spinner from "shared/components/loading/Spinner";

const PageLoader: React.FC = () => {
    return (
        <Grid container justifyContent="center">
            <Grid item xs={4} display="flex" justifyContent="center">
                <Spinner />
            </Grid>
        </Grid>
    );
};

export default PageLoader;
