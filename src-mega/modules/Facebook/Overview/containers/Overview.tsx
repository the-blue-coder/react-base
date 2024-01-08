import { Grid } from "@mui/material";
import SectionTitle from "shared/components/texts/SectionTitle";
import OverviewDetails from "../components/OverviewDetails";

const Overview: React.FC = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <SectionTitle>Overview</SectionTitle>
            </Grid>

            <Grid item xs={12}>
                <OverviewDetails></OverviewDetails>
            </Grid>
        </Grid>
    );
};

export default Overview;
