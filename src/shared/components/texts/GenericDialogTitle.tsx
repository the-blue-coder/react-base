import { DialogTitle } from "@mui/material";
import { GenericDialogTitleProps } from "shared/types/Texts.type";

const GenericDialogTitle: React.FC<GenericDialogTitleProps> = ({ id, color = "primary", children }) => {
    return (
        <DialogTitle id={id} color={color}>
            <strong>{children}</strong>
        </DialogTitle>
    );
};

export default GenericDialogTitle;
