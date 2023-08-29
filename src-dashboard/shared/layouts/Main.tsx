import React from "react";
import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import useMainLayoutStyles from "../hooks/useMainLayoutStyles";
import LeftMenu from "shared/common/LeftMenu";

const Main: React.FC = () => {
    const styles = useMainLayoutStyles();

    return (
        <Box sx={styles.main}>
            <Grid container id="content">
                <Grid item xs={2}>
                    <LeftMenu />
                </Grid>

                <Grid item xs={10}>
                    <Outlet />
                </Grid>
            </Grid>

            <Footer />
        </Box>
    );
};

export default Main;
