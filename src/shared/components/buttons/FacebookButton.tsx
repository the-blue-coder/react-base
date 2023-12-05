import { FacebookButtonProps } from "shared/types/Buttons.type";
import GenericButton from "./GenericButton";
import { Facebook, OpenInNew } from "@mui/icons-material";
import useFacebookButtonStyles from "shared/styles/components/buttons/useFacebookButtonStyles";

const FacebookButton: React.FC<FacebookButtonProps> = ({ href, target, hasEndIcon = false, children, onClick }) => {
    const styles = useFacebookButtonStyles();

    return (
        <GenericButton
            sx={styles.facebookButton}
            href={href}
            target={target}
            startIcon={<Facebook />}
            endIcon={hasEndIcon ? <OpenInNew /> : null}
            onClick={onClick}
        >
            {children}
        </GenericButton>
    );
};

export default FacebookButton;
