import { Dialog, DialogContent, useMediaQuery, useTheme } from "@mui/material";
import { GenericDialogProps } from "shared/types/Dialogs.type";
import GenericDialogTitle from "../texts/GenericDialogTitle";

const GenericDialog: React.FC<GenericDialogProps> = ({ id, open, title, children, onClose }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Dialog fullScreen={fullScreen} open={open} id={id} onClose={onClose} aria-labelledby={id}>
            <GenericDialogTitle id={`${id}-title`}>{title}</GenericDialogTitle>
            <DialogContent>{children}</DialogContent>
        </Dialog>
    );
};

export default GenericDialog;
