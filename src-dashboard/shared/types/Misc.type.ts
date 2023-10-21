import { UseMutateAsyncFunction } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export type DynamicObject = { [key: string]: DynamicObject | string | number | boolean };

export type KeyValueObject = { key: string; value: string | number };

export type ColorsType = "inherit" | "error" | "success" | "primary" | "secondary" | "info" | "warning";

export type TimestampDataType = {
    date: string;
    timezone_type: number;
    timezone: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MutateAsyncFunctionType = UseMutateAsyncFunction<AxiosResponse<any, any>, unknown, any, unknown>;
