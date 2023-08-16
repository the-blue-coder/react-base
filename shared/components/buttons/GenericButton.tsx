import { Button } from "@mui/material";
import { GenericButtonProps } from "shared/types/Buttons.type";

const GenericButton: React.FC<GenericButtonProps> = ({ variant, color, width, children, onClick, ...props }) => {
    return (
        <Button {...props} variant={variant ?? "contained"} color={color ?? "primary"} sx={{ width: width ?? 125 }} onClick={onClick}>
            {children}
        </Button>
    );
};

export default GenericButton;
