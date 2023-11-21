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

export type MutateAsyncFunctionType = UseMutateAsyncFunction<AxiosResponse<unknown, unknown>, unknown, unknown, unknown>;

export type CallbackFunctionType = (callback?: ((data?: unknown) => void) | undefined) => void;

export type EnumType<T> = {
    [key in keyof T]: T[key];
};
