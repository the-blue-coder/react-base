import React from "react";
import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import useMainStyles from "../styles/layouts/useMainStyles";
import Menu from "shared/common/Menu";

const Main: React.FC = () => {
    const styles = useMainStyles();

    return (
        <Box sx={styles.main}>
            <Grid container id="content">
                <Grid item id="left-section">
                    <Menu />
                </Grid>

                <Grid item id="right-section" py={1} pl={1} pr={2}>
                    <Outlet />
                </Grid>
            </Grid>

            <Footer />
        </Box>
    );
};

export default Main;
