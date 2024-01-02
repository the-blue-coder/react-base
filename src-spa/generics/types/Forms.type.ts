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

export type GenericOptionType = {
    id: string | number;
    value: string | number;
};

export type SelectOptionType = GenericOptionType & {
    slug?: string;
};

export type GenericFileUploaderFileType = File & {
    preview: string;
};

export type CustomGridSelectFilterFormProps = GridFilterInputValueProps & {
    schema: GenericFormSchemaType;
};

export type PartialFormProps = Omit<FormProps<any, any, any>, "schema" | "validator">;

export type useCustomRadiosFieldStylesProps = {
    isInline: boolean;
};
