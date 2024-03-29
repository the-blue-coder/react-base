import React from "react";
import { Box, Grid } from "@mui/material";
import Footer from "../common/Footer";
import useDefaultLayoutStyles from "../styles/layouts/useDefaultLayoutStyles";
import { Outlet } from "react-router-dom";
import GenericNav from "shared/components/navs/GenericNav";
import { routes } from "routes";

const DefaultLayout: React.FC = () => {
    const styles = useDefaultLayoutStyles();

    return (
        <Box sx={styles.defaultLayout}>
            <Grid container id="content">
                <Grid item id="left-section">
                    <GenericNav navItems={routes} />
                </Grid>

                <Grid item id="right-section" py={1} pl={1} pr={2}>
                    <Outlet />
                </Grid>
            </Grid>

            <Footer />
        </Box>
    );
};

export default DefaultLayout;
