import { SxProps } from "@mui/material";
import { BASE_COLOR } from "generics/constants/colors.constant";
import { useMenuStylesProps } from "generics/types/Navs.type";

const useMenuStyles = ({ inline }: useMenuStylesProps) => {
    let menuStyles: SxProps = {
        "& .MuiListItemButton-root": {
            transition: "initial",
            WebkitTransition: "initial",
        },

        "& .MuiListItemButton-root.Mui-selected, & .MuiListItemButton-root.Mui-selected:hover, & .MuiListItemButton-root:hover": {
            backgroundColor: BASE_COLOR.primary,
            color: BASE_COLOR.white,
        },
    };

    if (inline) {
        menuStyles = {
            display: "flex",
            flexDirection: "row",
            ...menuStyles,
        };
    }

    return {
        menu: menuStyles,
    };
};

export default useMenuStyles;
