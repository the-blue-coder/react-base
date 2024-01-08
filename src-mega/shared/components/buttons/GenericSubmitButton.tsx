import { GenericButtonProps } from "shared/types/Buttons.type";
import GenericButton from "./GenericButton";

const GenericSubmitButton: React.FC<GenericButtonProps> = ({ disabled, children }) => {
    return (
        <GenericButton type="submit" disabled={disabled}>
            {children ?? "Submit"}
        </GenericButton>
    );
};

export default GenericSubmitButton;
