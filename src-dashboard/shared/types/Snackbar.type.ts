import { AlertProps, SnackbarProps } from "@mui/material";

export type SnackbarListProps = {
    limit?: number;
};

export type SnackbarItemType = Omit<SnackbarProps, "action"> & {
    id?: string;
    AlertProps?: AlertProps;
    severity?: AlertProps["severity"];
    label: AlertProps["children"];
    action?: {
        label: string;
        onClick?: (item: SnackbarItemType) => void;
    };
};
