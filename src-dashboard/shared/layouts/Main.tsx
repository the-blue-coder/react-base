import React from "react";
import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import useMainStyles from "../styles/layouts/useMainStyles";
import LeftMenu from "shared/common/LeftMenu";

const Main: React.FC = () => {
    const styles = useMainStyles();

    return (
        <Box sx={styles.main}>
            <Grid container id="content">
                <Grid item xs={2}>
                    <LeftMenu />
                </Grid>

                <Grid item xs={10} py={1} pl={1} pr={2}>
                    <Outlet />
                </Grid>
            </Grid>

            <Footer />
        </Box>
    );
};

export default Main;
