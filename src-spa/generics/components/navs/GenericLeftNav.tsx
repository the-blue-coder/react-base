import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import useAppRoutes from "generics/hooks/useAppRoutes";
import useMenuStyles from "generics/styles/common/useMenuStyles";
import { GenericLeftNavProps } from "generics/types/Navs.type";

const GenericLeftNav: React.FC<GenericLeftNavProps> = ({ navItems }) => {
    const { getRoutePath } = useAppRoutes();
    const navigate = useNavigate();
    const location = useLocation();
    const styles = useMenuStyles();

    return (
        <List sx={styles.menu}>
            {Object.entries(navItems).map(([, navItem]) => {
                return (
                    <ListItem key={navItem.path} disablePadding>
                        <ListItemButton onClick={() => navigate(getRoutePath(navItem))} selected={`${navItem.path}` === location.pathname}>
                            <ListItemText primary={navItem.title} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
};

export default GenericLeftNav;
