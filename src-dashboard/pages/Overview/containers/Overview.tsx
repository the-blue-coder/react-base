import { Grid, Typography } from "@mui/material";

const Overview: React.FC = () => {
    return (
        <Grid container padding={2}>
            <Grid item xs={12}>
                <Typography component="h1">Overview</Typography>
            </Grid>
        </Grid>
    );
};

export default Overview;
