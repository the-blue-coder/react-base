import { ReactNode } from "react";
import { FormProps } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";

export type GenericFormProps = {
    schema: GenericFormSchemaType;
    formData?: unknown;
    hideDefaultSubmitBtn?: boolean;
    children?: ReactNode;
    onFormChange?: (formData: unknown) => unknown;
    onSingleFieldBlur?: (id: string, value: unknown) => unknown;
    onSubmit?: (formData: unknown) => unknown;
};

export type GenericFormSchemaType = {
    schema: JSONSchema7;
    uiSchema: FormProps["uiSchema"];
};

export type SelectOptionType = {
    id: string | number;
    value: string | number;
    slug?: string;
};
