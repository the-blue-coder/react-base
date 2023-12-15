import { ExitToApp } from "@mui/icons-material";
import GenericButton from "./GenericButton";
import { GenericGoToButtonProps } from "generics/types/Buttons.type";
import { useNavigate } from "react-router-dom";

const GenericGoToButton: React.FC<GenericGoToButtonProps> = ({ routePathTarget, children }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(routePathTarget);
    };

    return (
        <GenericButton endIcon={<ExitToApp />} onClick={handleClick}>
            {children}
        </GenericButton>
    );
};

export default GenericGoToButton;
