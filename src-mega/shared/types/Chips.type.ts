/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChipTypeMap } from "@mui/material";

export type GenericMultiColorChipProps = {
    className?: string;
    value: string | number;
    row?: any;
    backgroundColor: string;
    color: string;
    disabled?: boolean;
    noMr?: boolean;
} & ({ onClick: (row: any) => void } & { row: any });

export type GenericUniColorChipProps = {
    label: string;
    color?: ChipTypeMap["props"]["color"];
};
