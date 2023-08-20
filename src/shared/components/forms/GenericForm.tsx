/* eslint-disable @typescript-eslint/no-explicit-any */
import Form from "@rjsf/mui";
import { GenericFormProps } from "../../types/Forms.type";
import { useState } from "react";
import { IChangeEvent } from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { ErrorTransformer, RJSFSchema } from "@rjsf/utils";

const GenericForm: React.FC<GenericFormProps> = ({ defaultValue, schema, children, onSubmit, ...props }) => {
    const [formData, setFormData] = useState(defaultValue);

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
        setFormData(formData ?? defaultValue);
    };

    const handleSubmit = ({ formData }: IChangeEvent<any>) => {
        onSubmit(formData);
    };

    return (
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
    );
};

export default GenericForm;
