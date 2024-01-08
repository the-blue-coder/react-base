import { Button } from "@mui/material";
import { GenericButtonProps } from "shared/types/Buttons.type";

const GenericButton: React.FC<GenericButtonProps> = ({ mr = 0.5, noMr = false, variant, color, isText, children, onClick, ...props }) => {
    return (
        <Button
            {...props}
            sx={{ ...props.sx, mr: noMr ? 0 : mr }}
            variant={isText ? "text" : variant ?? "contained"}
            color={color ?? "primary"}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

export default GenericButton;
