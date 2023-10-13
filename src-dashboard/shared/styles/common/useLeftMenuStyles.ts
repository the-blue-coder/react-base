import { BASE_COLOR } from "shared/constants/colors.constant";

const useLeftMenuStyles = () => {
    return {
        leftMenu: {
            "& .MuiListItemButton-root": {
                transition: "initial",
                WebkitTransition: "initial",
            },

            "& .MuiListItemButton-root.Mui-selected, & .MuiListItemButton-root.Mui-selected:hover, & .MuiListItemButton-root:hover": {
                backgroundColor: BASE_COLOR.primary,
                color: "#ffffff",
            },
        },
    };
};

export default useLeftMenuStyles;
