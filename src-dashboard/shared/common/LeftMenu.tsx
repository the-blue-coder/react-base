import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "routes";
import useAppRoutes from "shared/hooks/useAppRoutes";

const LeftMenu: React.FC = () => {
    const menus = [routes.overview, routes.groups, routes.posts, routes.products, routes.tasks];
    const { getRoutePath } = useAppRoutes();
    const navigate = useNavigate();

    return (
        <List>
            {menus.map((menu) => (
                <ListItem key={menu.path} disablePadding>
                    <ListItemButton onClick={() => navigate(getRoutePath(menu))}>
                        <ListItemText primary={menu.title} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
};

export default LeftMenu;
