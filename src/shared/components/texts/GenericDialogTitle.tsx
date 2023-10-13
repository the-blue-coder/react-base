import { DialogTitle } from "@mui/material";
import { GenericDialogTitleProps } from "shared/types/Texts.type";
import useGenericDialogTitleStyles from "shared/styles/components/texts/useGenericDialogTitleStyles";

const GenericDialogTitle: React.FC<GenericDialogTitleProps> = ({ id, color = "primary", children }) => {
    const styles = useGenericDialogTitleStyles();

    return (
        <DialogTitle sx={styles.genericDialogTitle} id={id} color={color}>
            <strong>{children}</strong>
        </DialogTitle>
    );
};

export default GenericDialogTitle;
