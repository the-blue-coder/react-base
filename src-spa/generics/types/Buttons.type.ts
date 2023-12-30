/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonProps } from "@mui/material";
import { GenericOptionType, PartialFormProps } from "./Forms.type";

export type GenericButtonProps = ButtonProps & {
    mr?: number;
    noMr?: boolean;
    isText?: boolean;
    target?: string;
};

export type GenericGoToButtonProps = GenericButtonProps & {
    routePathTarget: string;
};

export type GenericDropdownButtonProps = {
    label: string;
    options: GenericOptionType[];
    onSelect: (optionId: number) => void;
};

export type ManageTagsButtonProps = ButtonProps & PartialFormProps;

export type useManageTagsButtonStylesProps = {
    variant: ButtonProps["variant"];
    isInsideRJSF?: boolean;
};
