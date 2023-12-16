/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { FormProps } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";
import { GridFilterInputValueProps } from "@mui/x-data-grid";

export type GenericFormProps = {
    schema: GenericFormSchemaType;
    formData?: unknown;
    hideDefaultSubmitBtn?: boolean;
    children?: ReactNode;
    onFormChange?: (formData: any) => void;
    onSingleFieldBlur?: (id: string, value: any) => void;
    onSubmit?: (formData: any) => void;
};

export type GenericFormSchemaType = {
    schema: JSONSchema7;
    uiSchema: FormProps["uiSchema"];
};

export type GenericFormFieldOptionType = {
    id: string | number;
    value: string | number;
};

export type SelectOptionType = GenericFormFieldOptionType & {
    slug?: string;
};

export type CustomGridSelectFilterFormProps = GridFilterInputValueProps & {
    schema: GenericFormSchemaType;
};

export type useCustomRadiosFieldStylesProps = {
    isInline: boolean;
};
