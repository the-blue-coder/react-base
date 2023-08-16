import useGenericMutation from "shared/hooks/useGenericMutation";
import GenericButton from "./GenericButton";
import { APIRoutes } from "routes";
import useDisplayAlert from "shared/hooks/useDisplayAlert";
import { defaultFormMessages } from "shared/constants/errorMessages.constant";
import { ResetEmailValidationButtonProps } from "shared/types/ResetEmailValidationButtonProps";

const ResetEmailValidationButton: React.FC<ResetEmailValidationButtonProps> = ({ onSuccess }) => {
    const displayAlert = useDisplayAlert();

    const { mutateAsync, isLoading } = useGenericMutation({
        endpointPath: APIRoutes.resendEmailValidation,
        isProtected: true,
    });

    const handleClick = () => {
        mutateAsync({})
            .then(() => onSuccess())
            .catch((error) => {
                displayAlert({
                    label: error.response.data.message || defaultFormMessages.error,
                });
            });
    };

    return (
        <GenericButton width="auto" onClick={handleClick} disabled={isLoading}>
            <strong>Resend email validation</strong>
        </GenericButton>
    );
};

export default ResetEmailValidationButton;
