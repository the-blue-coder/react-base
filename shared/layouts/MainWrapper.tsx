import { Grid, Typography } from "@mui/material";
import { BASE_COLOR } from "../constants/colors";
import { Outlet } from "react-router-dom";

const MainWrapper: React.FC = () => {
    return (
        <Grid container margin="auto" padding={1} maxWidth={1600}>
            <Grid container>
                <Grid item xs={6}>
                    <Typography fontSize={30} color={BASE_COLOR.mainPrimary}>
                        <strong>App logo</strong>
                    </Typography>
                </Grid>

                <Grid item xs={6} display="flex" alignItems="center" justifyContent="flex-end">
                    Menu
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Outlet />
            </Grid>

            <Grid item xs={12} textAlign="center">
                <Typography>
                    <strong>App name - {new Date().getFullYear()}</strong>
                </Typography>
            </Grid>
        </Grid>
    );
};

export default MainWrapper;
