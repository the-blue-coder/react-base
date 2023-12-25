import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { facebookBaseUrls } from "modules/Facebook/facebook.routes";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import useAppRoutes from "generics/hooks/useAppRoutes";
import { SelectedPropertyState } from "generics/states/PropertySwitcher.state";
import useMenuStyles from "generics/styles/common/useMenuStyles";
import { GenericLeftNavProps } from "generics/types/Navs.type";

const GenericLeftNav: React.FC<GenericLeftNavProps> = ({ navItems }) => {
    const selectedProperty = useRecoilValue(SelectedPropertyState);

    const { getRoutePath } = useAppRoutes();

    const navigate = useNavigate();

    const location = useLocation();

    const styles = useMenuStyles();

    const goToMetaBusinessSuiteInsightsOverview = () => {
        window.open(`${facebookBaseUrls.metaBusinessSuite.insights.overview}${selectedProperty?.platformId}`);
    };

    return (
        <List sx={styles.menu}>
            {Object.entries(navItems).map(([key, navItem]) => {
                return (
                    <Box key={navItem.path}>
                        {key === "groups" && (
                            <ListItem disablePadding>
                                <ListItemButton onClick={goToMetaBusinessSuiteInsightsOverview}>
                                    <ListItemText primary="Insights" />
                                </ListItemButton>
                            </ListItem>
                        )}

                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => navigate(getRoutePath(navItem))}
                                selected={`${navItem.path}` === location.pathname}
                            >
                                <ListItemText primary={navItem.title} />
                            </ListItemButton>
                        </ListItem>
                    </Box>
                );
            })}
        </List>
    );
};

export default GenericLeftNav;
