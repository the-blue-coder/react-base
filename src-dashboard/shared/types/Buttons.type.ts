import { ButtonProps } from "@mui/material";

export type GenericButtonProps = ButtonProps & {
    isText?: boolean;
    width?: number | string;
};
