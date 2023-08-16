import { Grid } from "@mui/material";
import LogoutButton from "pages/Authentication/Logout/components/LogoutButton";
import { Link } from "react-router-dom";
import { routes } from "routes";
import GenericButton from "shared/components/buttons/GenericButton";
import useAppRoutes from "shared/hooks/useAppRoutes";
import useAuthentication from "shared/hooks/useAuthentication";

const Home: React.FC = () => {
    const { hasJWTToken } = useAuthentication();
    const { getRoutePath } = useAppRoutes();

    return (
        <Grid container alignItems="center">
            {hasJWTToken ? (
                <Grid item xs={12} display="flex" justifyContent="center" mb={2}>
                    <LogoutButton />
                </Grid>
            ) : (
                <>
                    <Grid item xs={12} display="flex" justifyContent="center" mb={2}>
                        <Link to={getRoutePath(routes.authentication.login)}>
                            <GenericButton>Login</GenericButton>
                        </Link>
                    </Grid>

                    <Grid item xs={12} display="flex" justifyContent="center">
                        <Link to={getRoutePath(routes.authentication.register)}>
                            <GenericButton>Register</GenericButton>
                        </Link>
                    </Grid>
                </>
            )}
        </Grid>
    );
};

export default Home;
