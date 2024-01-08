import { Grid } from "@mui/material";
import SectionTitle from "shared/components/texts/SectionTitle";
import useGroupsStyles from "../styles/useGroupsStyles";

const Groups: React.FC = () => {
    const styles = useGroupsStyles();

    return (
        <Grid container sx={styles.groups}>
            <Grid item xs={12}>
                <SectionTitle>Groups</SectionTitle>
            </Grid>
        </Grid>
    );
};

export default Groups;
