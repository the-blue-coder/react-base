/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from "react";
import Form from "@rjsf/mui";
import { GenericFormProps } from "../../types/Forms.type";
import { IChangeEvent } from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { ErrorTransformer, RJSFSchema } from "@rjsf/utils";
import { Box } from "@mui/material";
import useGenericFormStyles from "shared/styles/components/forms/useGenericFormStyles";

const GenericForm = forwardRef<any, GenericFormProps>(
    ({ formData = {}, schema, hideDefaultSubmitBtn = false, children, onFormChange, onSingleFieldBlur, onSubmit, ...props }, ref) => {
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

        const handleChange = ({ formData: newFormData }: IChangeEvent<any>): void => {
            onFormChange?.(newFormData);
        };

        const handleBlur = (id: string, data: any): void => {
            onSingleFieldBlur?.(id, data);
        };

        const handleSubmit = ({ formData: newFormData }: IChangeEvent<any>) => {
            onSubmit?.(newFormData);
        };

        return (
            <Box sx={styles.genericForm}>
                <Form
                    {...props}
                    ref={ref}
                    schema={schema.schema}
                    uiSchema={schema.uiSchema}
                    formData={formData}
                    validator={validator}
                    showErrorList={false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onSubmit={handleSubmit}
                    transformErrors={transformErrors}
                >
                    {children}
                </Form>
            </Box>
        );
    }
);

export default GenericForm;
