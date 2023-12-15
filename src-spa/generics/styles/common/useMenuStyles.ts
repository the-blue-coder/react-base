import { BASE_COLOR } from "generics/constants/colors.constant";

const useMenuStyles = () => {
    return {
        menu: {
            "& .MuiListItemButton-root": {
                transition: "initial",
                WebkitTransition: "initial",
            },

            "& .MuiListItemButton-root.Mui-selected, & .MuiListItemButton-root.Mui-selected:hover, & .MuiListItemButton-root:hover": {
                backgroundColor: BASE_COLOR.primary,
                color: BASE_COLOR.white,
            },
        },
    };
};

export default useMenuStyles;
