import { ButtonProps } from "@mui/material";

export type GenericButtonProps = ButtonProps & {
    mr?: number;
    noMr?: boolean;
    isText?: boolean;
    target?: string;
};

export type FacebookButtonProps = GenericButtonProps & {
    hasEndIcon?: boolean;
};
