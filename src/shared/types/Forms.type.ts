/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { FormProps } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";

export type GenericFormProps = {
    schema: GenericFormSchemaType;
    defaultValue: any;
    hideDefaultSubmitBtn?: boolean;
    children?: ReactNode;
    onFormChange?: (formData: any) => any;
    onSingleFieldBlur?: (id: string, data: any) => any;
    onSubmit?: (formData: any) => any;
};

export type GenericFormSchemaType = {
    schema: JSONSchema7;
    uiSchema: FormProps["uiSchema"];
};

export type SelectOptionType = {
    id: string | number;
    value: string | number;
};
