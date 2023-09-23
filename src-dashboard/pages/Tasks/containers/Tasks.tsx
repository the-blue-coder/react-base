import { Grid, Typography } from "@mui/material";
import SectionTitle from "shared/components/texts/SectionTitle";

const Tasks: React.FC = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <SectionTitle>Tasks</SectionTitle>
            </Grid>
        </Grid>
    );
};

export default Tasks;
