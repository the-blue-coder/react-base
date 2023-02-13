import { Grid, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import useMainWrapperStyles from "../hooks/useMainWrapperStyles";

const MainWrapper: React.FC = () => {
  const styles = useMainWrapperStyles();

  return (
    <Grid container sx={styles.MainWrapper}>
      <Grid container>
        <Grid item xs={6}>
          <Typography sx={styles.MainWrapper.logoContainer}>
            <strong>App logo</strong>
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Outlet />
      </Grid>

      <Grid item xs={12} textAlign="center">
        <Typography>App name - {new Date().getFullYear()}</Typography>
      </Grid>
    </Grid>
  );
};

export default MainWrapper;
