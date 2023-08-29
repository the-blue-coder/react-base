import { Grid, Typography } from "@mui/material";

const Tasks: React.FC = () => {
    return (
        <Grid container padding={2}>
            <Grid item xs={12}>
                <Typography component="h1">Tasks</Typography>
            </Grid>
        </Grid>
    );
};

export default Tasks;
