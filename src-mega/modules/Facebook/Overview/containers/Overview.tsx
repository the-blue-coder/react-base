import { Grid } from "@mui/material";
import SectionTitle from "shared/components/texts/SectionTitle";
import useOverviewStyles from "../styles/useOverviewStyles";

const Overview: React.FC = () => {
    const styles = useOverviewStyles();

    return (
        <Grid container sx={styles.overview}>
            <Grid item xs={12}>
                <SectionTitle>Overview</SectionTitle>
            </Grid>
        </Grid>
    );
};

export default Overview;
