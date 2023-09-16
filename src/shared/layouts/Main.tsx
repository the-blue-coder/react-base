import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import useMainLayoutStyles from "../styles/useMainLayoutStyles";

const Main: React.FC = () => {
    const styles = useMainLayoutStyles();

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
