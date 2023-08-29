import { Grid, Typography } from "@mui/material";

const Posts: React.FC = () => {
    return (
        <Grid container padding={2}>
            <Grid item xs={12}>
                <Typography component="h1">Posts</Typography>
            </Grid>
        </Grid>
    );
};

export default Posts;
