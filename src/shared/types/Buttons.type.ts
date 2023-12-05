import { ButtonProps } from "@mui/material";

export type GenericButtonProps = ButtonProps & {
    mr?: number;
    noMr?: boolean;
    isText?: boolean;
    target?: string;
};
