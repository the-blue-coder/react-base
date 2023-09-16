import { Container, Typography, AppBar, Toolbar } from "@mui/material";
import { routes } from "routes";
import { Link } from "react-router-dom";
import useHeaderStyles from "../styles/common/useHeaderStyles";
import useDotEnv from "../hooks/useDotEnv";
import useAppRoutes from "shared/hooks/useAppRoutes";

const Header: React.FC = () => {
    const styles = useHeaderStyles();
    const { getEnvVariable } = useDotEnv();
    const { getRoutePath } = useAppRoutes();

    return (
        <AppBar sx={styles.header}>
            <Toolbar id="toolbar">
                <Container>
                    <Typography variant="h6">
                        <Link to={getRoutePath(routes.homepage)} color="inherit">
                            <Typography color="primary" fontWeight="bold" textAlign="center" fontSize={18}>
                                {getEnvVariable("VITE_APP_NAME")}
                            </Typography>
                        </Link>
                    </Typography>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
