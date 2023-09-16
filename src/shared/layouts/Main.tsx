import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import useMainStyles from "../styles/layouts/useMainStyles";

const Main: React.FC = () => {
    const styles = useMainStyles();

    return (
        <Box sx={styles.main}>
            <Header />

            <Box component="section" id="content">
                <Outlet />
            </Box>

            <Footer />
        </Box>
    );
};

export default Main;
