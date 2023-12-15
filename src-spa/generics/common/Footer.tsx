import { Typography, Grid, Box } from "@mui/material";
import useFooterStyles from "../styles/common/useFooterStyles";
import { Link } from "react-router-dom";
import { routes } from "routes";
import useDotEnv from "../hooks/useDotEnv";
import useAppRoutes from "generics/hooks/useAppRoutes";

const Footer: React.FC = () => {
    const styles = useFooterStyles();
    const { getEnvVariable } = useDotEnv();
    const { getRoutePath } = useAppRoutes();

    return (
        <Box component="footer" sx={styles.footer}>
            <Grid container alignItems="center">
                <Grid item xs={12} textAlign="center">
                    <Typography>
                        <Link to={getRoutePath(routes.asset.subRoutes.videoEditor)}>{getEnvVariable("VITE_APP_NAME")}</Link> -{" "}
                        {new Date().getFullYear()}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
