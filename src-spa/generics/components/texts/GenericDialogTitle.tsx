import { DialogTitle } from "@mui/material";
import useGenericDialogTitleStyles from "generics/styles/components/texts/useGenericDialogTitleStyles";
import { GenericDialogTitleProps } from "generics/types/Texts.type";

const GenericDialogTitle: React.FC<GenericDialogTitleProps> = ({ color = "primary", children }) => {
    const styles = useGenericDialogTitleStyles();

    return (
        <DialogTitle sx={styles.genericDialogTitle} color={color}>
            <strong>{children}</strong>
        </DialogTitle>
    );
};

export default GenericDialogTitle;
