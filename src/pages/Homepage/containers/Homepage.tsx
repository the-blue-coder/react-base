import { Grid, Typography } from "@mui/material";

const Homepage: React.FC = () => {
    return (
        <Grid container alignItems="center">
            <Grid item xs={12} display="flex" justifyContent="center" mb={2}>
                <Typography>Homepage</Typography>
            </Grid>
        </Grid>
    );
};

export default Homepage;
