import { GenericButtonProps } from "shared/types/Buttons.type";
import GenericButton from "./GenericButton";
import { Facebook, OpenInNew } from "@mui/icons-material";
import useFacebookButtonStyles from "shared/styles/components/buttons/useFacebookButtonStyles";

const FacebookButton: React.FC<GenericButtonProps> = ({ href, disabled, children, onClick }) => {
    const styles = useFacebookButtonStyles();

    return (
        <GenericButton
            sx={styles.facebookButton}
            href={href}
            target="_blank"
            startIcon={<Facebook />}
            endIcon={href ? <OpenInNew /> : null}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </GenericButton>
    );
};

export default FacebookButton;
