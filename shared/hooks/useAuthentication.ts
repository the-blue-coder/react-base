import { JWTTokenKey, JWTTokenCookieDefaultConfig } from "pages/Authentication/Login/constants/Login.constant";
import useCookie from "react-use-cookie";
import { routes } from "routes";
import useAppRoutes from "./useAppRoutes";

const useAuthentication = () => {
    const [JWTToken, setJWTToken] = useCookie(JWTTokenKey);
    const { getRoutePath } = useAppRoutes();

    const hasJWTToken = JWTToken && JWTToken !== "" && JWTToken !== undefined;

    const setJWTTokenAndGoToDashboard = (token: string) => {
        setJWTToken(token, JWTTokenCookieDefaultConfig);
        window.location.href = getRoutePath(routes.user.dashboard); //We are refreshing the page
    };

    const logout = () => {
        setJWTToken("");
        window.location.href = getRoutePath(routes.public.home); //We are refreshing the page
    };

    return { hasJWTToken, setJWTTokenAndGoToDashboard, logout };
};

export default useAuthentication;
