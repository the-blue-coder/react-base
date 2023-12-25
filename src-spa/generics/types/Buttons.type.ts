/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonProps } from "@mui/material";
import { FormProps } from "@rjsf/core";

export type GenericButtonProps = ButtonProps & {
    mr?: number;
    noMr?: boolean;
    isText?: boolean;
    target?: string;
};

export type GenericGoToButtonProps = GenericButtonProps & {
    routePathTarget: string;
};

export type PartialFormProps = Omit<FormProps<any, any, any>, "schema" | "validator">;

export type ManageTagsButtonProps = ButtonProps & PartialFormProps;

export type useManageTagsButtonStylesProps = {
    variant: ButtonProps["variant"];
    isInsideRJSF?: boolean;
};
