import { useTheme } from "@mui/material";
import useDynamicFormOneFieldStyles from "../forms/useDynamicFormOneFieldStyles";

const useManageTagsDialogStyles = () => {
    const theme = useTheme();
    const dynamicFormOneFieldStyles = useDynamicFormOneFieldStyles();

    return {
        manageTagsDialog: {
            width: 500,

            [theme.breakpoints.down("md")]: {
                width: "100%",
            },

            ...dynamicFormOneFieldStyles.dynamicFormOneField,
        },
    };
};

export default useManageTagsDialogStyles;
