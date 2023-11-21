import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "routes";
import useAppRoutes from "shared/hooks/useAppRoutes";
import useMenuStyles from "shared/styles/common/useMenuStyles";

const Menu: React.FC = () => {
    const menuItems = [routes.overview, routes.groups, routes.posts, routes.products, routes.tasks];
    const { getRoutePath } = useAppRoutes();
    const navigate = useNavigate();
    const location = useLocation();
    const styles = useMenuStyles();

    return (
        <List sx={styles.menu}>
            {menuItems.map((menuItem) => {
                return (
                    <ListItem key={menuItem.path} disablePadding>
                        <ListItemButton
                            onClick={() => navigate(getRoutePath(menuItem))}
                            selected={`${menuItem.path}` === location.pathname}
                        >
                            <ListItemText primary={menuItem.title} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
};

export default Menu;
