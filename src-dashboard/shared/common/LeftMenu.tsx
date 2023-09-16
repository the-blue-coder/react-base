import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "routes";
import useAppRoutes from "shared/hooks/useAppRoutes";
import useLeftMenuStyles from "shared/styles/common/useLeftMenuStyles";

const LeftMenu: React.FC = () => {
    const menus = [routes.overview, routes.groups, routes.posts, routes.products, routes.tasks];
    const { getRoutePath } = useAppRoutes();
    const navigate = useNavigate();
    const location = useLocation();
    const styles = useLeftMenuStyles();

    return (
        <List sx={styles.leftMenu}>
            {menus.map((menu) => (
                <ListItem key={menu.path} disablePadding>
                    <ListItemButton onClick={() => navigate(getRoutePath(menu))} selected={`${menu.path}` === location.pathname}>
                        <ListItemText primary={menu.title} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
};

export default LeftMenu;
