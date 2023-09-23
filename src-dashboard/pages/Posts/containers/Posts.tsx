import { Grid, Typography } from "@mui/material";
import SectionTitle from "shared/components/texts/SectionTitle";

const Posts: React.FC = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <SectionTitle>Posts</SectionTitle>
            </Grid>
        </Grid>
    );
};

export default Posts;
