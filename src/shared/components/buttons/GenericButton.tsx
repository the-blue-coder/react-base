import { Button } from "@mui/material";
import { GenericButtonProps } from "shared/types/Buttons.type";

const GenericButton: React.FC<GenericButtonProps> = ({ variant, color, isText, width, children, onClick, ...props }) => {
    return (
        <Button
            {...props}
            variant={isText ? "text" : variant ?? "contained"}
            color={color ?? "primary"}
            sx={{ width: isText ? "auto" : width ?? 125 }}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

export default GenericButton;
