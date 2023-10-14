export type DynamicObject = { [key: string]: DynamicObject | string | number | boolean };

export type KeyValueObject = { key: string; value: string };

export type ColorsType = "inherit" | "error" | "success" | "primary" | "secondary" | "info" | "warning";

export type TimestampDataType = {
    date: string;
    timezone_type: number;
    timezone: string;
};
