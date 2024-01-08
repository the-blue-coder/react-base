import { AlertColor } from "@mui/material";

export type StopwatchProps = {
    label?: string;
    alertSeverity?: AlertColor;
    initialTimeInMilliseconds: number;
    onStop?: () => void;
};
