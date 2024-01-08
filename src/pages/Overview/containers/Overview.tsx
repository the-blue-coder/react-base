import { Grid } from "@mui/material";
import SectionTitle from "shared/components/texts/SectionTitle";

const Overview: React.FC = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <SectionTitle>Overview</SectionTitle>
            </Grid>
        </Grid>
    );
};

export default Overview;
