import { GenericButtonProps } from "generics/types/Buttons.type";
import GenericButton from "./GenericButton";

const GenericSubmitButton: React.FC<GenericButtonProps> = ({ children }) => {
    return <GenericButton type="submit">{children ?? "Submit"}</GenericButton>;
};

export default GenericSubmitButton;
