import { Grid, Typography } from "@mui/material";
import LogoutButton from "pages/Authentication/Logout/components/LogoutButton";

const Dashboard: React.FC = () => {
    return (
        <Grid container alignItems="center">
            <Grid item xs={12} display="flex" justifyContent="center" mb={2}>
                <Typography className="custom-title-1">Dashboard</Typography>
            </Grid>

            <Grid item xs={12} display="flex" justifyContent="center" mb={2}>
                <LogoutButton />
            </Grid>
        </Grid>
    );
};

export default Dashboard;
