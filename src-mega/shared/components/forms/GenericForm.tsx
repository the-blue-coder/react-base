/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, useState } from "react";
import Form from "@rjsf/mui";
import { GenericFormProps } from "../../types/Forms.type";
import { IChangeEvent } from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { ErrorTransformer, RJSFSchema } from "@rjsf/utils";
import { Box } from "@mui/material";
import useGenericFormStyles from "shared/styles/components/forms/useGenericFormStyles";

const GenericForm = forwardRef<any, GenericFormProps>(
    ({ formData = {}, schema, hideDefaultSubmitBtn = false, children, onFormChange, onSingleFieldBlur, onSubmit, ...props }, ref) => {
        const [internalFormData, setInternalFormData] = useState<any>(formData);

        const styles = useGenericFormStyles(hideDefaultSubmitBtn);

        const transformErrors: ErrorTransformer<any, RJSFSchema, any> = (errors, uiSchema) => {
            return errors.map((error) => {
                const errorType = String(error.name);
                const fieldProperty = String(error.property);
                const customErrorMessage = uiSchema?.[fieldProperty]?.["ui:customErrorMessages"]?.[errorType];
                const fieldName = error.stack.split(" '")[1]?.replace(/'/g, "");
                const updatedMessage = `${fieldName} ${error.message?.toLowerCase()}`;

                return { ...error, message: customErrorMessage || updatedMessage };
            });
        };

        const handleChange = ({ formData: newFormData }: IChangeEvent<any>): void => {
            onFormChange?.(newFormData);
            setInternalFormData(newFormData);
        };

        const handleBlur = (id: string, data: any): void => {
            onSingleFieldBlur?.(id, data);
        };

        const handleSubmit = ({ formData: newFormData }: IChangeEvent<any>) => {
            onSubmit?.(newFormData);
            setInternalFormData(newFormData);
        };

        return (
            <Box sx={styles.genericForm}>
                <Form
                    {...props}
                    ref={ref}
                    schema={schema.schema}
                    uiSchema={schema.uiSchema}
                    formData={internalFormData}
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
