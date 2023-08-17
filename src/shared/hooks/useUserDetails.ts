import useGenericMutation from "./useGenericMutation";
import { APIRoutes, routes } from "routes";
import useCookie from "react-use-cookie";
import { JWTTokenKey } from "pages/Authentication/Login/constants/Login.constant";
import useAppRoutes from "./useAppRoutes";
import { useRecoilState } from "recoil";
import { UserDetailsState } from "shared/state/UserDetails.state";

const useUserDetails = () => {
    const [userDetails, setUserDetails] = useRecoilState(UserDetailsState);
    const [, setJWTToken] = useCookie(JWTTokenKey);
    const { getRoutePath } = useAppRoutes();

    const { mutateAsync } = useGenericMutation({
        method: "GET",
        endpointPath: APIRoutes.fetchUserDetails,
        isProtected: true,
    });

    const fetchUserDetails = async () => {
        await mutateAsync({})
            .then((response) => {
                setUserDetails({
                    ...response.data,
                    isValidated: response.data.is_validated,
                });
            })
            .catch(() => {
                setJWTToken("");
                window.location.href = getRoutePath(routes.authentication.login); //We are refreshing the page
            });
    };

    return { userDetails, fetchUserDetails };
};

export default useUserDetails;
