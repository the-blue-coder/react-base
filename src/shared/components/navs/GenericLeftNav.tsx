import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import useAppRoutes from "shared/hooks/useAppRoutes";
import useMenuStyles from "shared/styles/common/useMenuStyles";
import { GenericLeftNavProps } from "shared/types/Navs.type";

const GenericLeftNav: React.FC<GenericLeftNavProps> = ({ navItems }) => {
    const { getRoutePath } = useAppRoutes();

    const navigate = useNavigate();

    const location = useLocation();

    const styles = useMenuStyles();

    return (
        <List sx={styles.menu}>
            {Object.entries(navItems).map(([, navItem]) => {
                return (
                    <Box key={navItem.path}>
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
