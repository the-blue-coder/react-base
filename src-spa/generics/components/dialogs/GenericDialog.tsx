import { Dialog, DialogContent, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { GenericDialogProps } from "generics/types/Dialogs.type";
import GenericDialogTitle from "../texts/GenericDialogTitle";
import { GridCloseIcon } from "@mui/x-data-grid";
import useGenericDialogStyles from "generics/styles/components/dialogs/useGenericDialogStyles";

const GenericDialog: React.FC<GenericDialogProps> = ({ open, title, fullScreen = false, children, onClose }) => {
    const styles = useGenericDialogStyles();
    const theme = useTheme();
    const responsiveFullScreen = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Dialog sx={styles.genericDialog} fullScreen={fullScreen || responsiveFullScreen} open={open} onClose={onClose}>
            {(fullScreen || responsiveFullScreen) && (
                <IconButton className="close-button" edge="end" color="inherit" onClick={onClose} aria-label="close">
                    <GridCloseIcon />
                </IconButton>
            )}

            <GenericDialogTitle>{title}</GenericDialogTitle>
            <DialogContent>{children}</DialogContent>
        </Dialog>
    );
};

export default GenericDialog;
