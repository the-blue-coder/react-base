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
    onSubmit?: (formData: any) => any;
};

export type GenericFormSchemaType = {
    schema: JSONSchema7;
    uiSchema: FormProps["uiSchema"];
};

export type SelectOptionsType = {
    id: string | number;
    value: string | number;
    name: string | number;
};
