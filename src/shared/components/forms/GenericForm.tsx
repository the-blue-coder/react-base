/* eslint-disable @typescript-eslint/no-explicit-any */
import Form from "@rjsf/mui";
import { GenericFormProps } from "../../types/Forms.type";
import { useState } from "react";
import { IChangeEvent } from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { ErrorTransformer, RJSFSchema } from "@rjsf/utils";
import { Box } from "@mui/material";
import useGenericFormStyles from "shared/styles/components/forms/useGenericFormStyles";

const GenericForm: React.FC<GenericFormProps> = ({
    defaultValue,
    schema,
    hideDefaultSubmitBtn = false,
    children,
    onFormChange,
    onSubmit,
    ...props
}) => {
    const [formData, setFormData] = useState(defaultValue);

    const styles = useGenericFormStyles(hideDefaultSubmitBtn);

    const transformErrors: ErrorTransformer<any, RJSFSchema, any> = (errors, uiSchema) => {
        return errors.map((error) => {
            const errorType = String(error.name);
            const fieldProperty = String(error.property?.slice(1));
            const customErrorMessage = uiSchema?.[fieldProperty]?.["ui:customErrorMessages"]?.[errorType];
            const fieldName = error.stack.split("' ")[0]?.slice(1);
            const updatedMessage = `${fieldName} ${error.message?.toLowerCase()}`;

            return { ...error, message: customErrorMessage || updatedMessage };
        });
    };

    const handleChange = ({ formData }: IChangeEvent<any>): void => {
        setFormData(formData);
        onFormChange?.(formData);
    };

    const handleSubmit = ({ formData }: IChangeEvent<any>) => {
        onSubmit?.(formData);
    };

    return (
        <Box sx={styles.genericForm}>
            <Form
                {...props}
                schema={schema.schema}
                uiSchema={schema.uiSchema}
                formData={formData}
                validator={validator}
                showErrorList={false}
                onChange={handleChange}
                onSubmit={handleSubmit}
                transformErrors={transformErrors}
            >
                {children}
            </Form>
        </Box>
    );
};

export default GenericForm;
