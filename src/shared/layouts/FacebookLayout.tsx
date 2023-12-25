import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import Footer from "../common/Footer";
import useDefaultLayoutStyles from "../styles/layouts/useDefaultLayoutStyles";
import PropertySwitcher from "shared/common/PropertySwitcher";
import { useRecoilValue } from "recoil";
import { SelectedPropertyState } from "shared/states/PropertySwitcher.state";
import { Outlet, useLocation } from "react-router-dom";
import useDisplayAlert from "shared/hooks/useDisplayAlert";
import { facebookRoutes } from "modules/Facebook/facebook.routes";
import GenericLeftNav from "shared/components/navs/GenericLeftNav";
import { routes } from "routes";

const FacebookLayout: React.FC = () => {
    const selectedProperty = useRecoilValue(SelectedPropertyState);

    const styles = useDefaultLayoutStyles();

    const { displayFailureAlert } = useDisplayAlert();

    const location = useLocation();

    const isGlobalSettings = location.pathname === facebookRoutes.globalSettings.path;

    useEffect(() => {
        if (!selectedProperty) {
            displayFailureAlert("Please select a property first");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Box sx={styles.defaultLayout}>
            <PropertySwitcher />

            <Grid container id="content">
                <Grid item id="left-section">
                    <GenericLeftNav navItems={routes.facebook.subRoutes} />
                </Grid>

                <Grid item id="right-section" py={1} pl={1} pr={2}>
                    {(selectedProperty || isGlobalSettings) && <Outlet />}
                </Grid>
            </Grid>

            <Footer />
        </Box>
    );
};

export default FacebookLayout;
