import { StopwatchProps } from "shared/types/Timers.type";
import { createTimeModel, useTimeModel } from "react-compound-timer";
import { useMemo } from "react";
import { Alert } from "@mui/material";

const Stopwatch: React.FC<StopwatchProps> = ({ label, alertSeverity = "error", initialTimeInMilliseconds }) => {
    const timer = useMemo(() => {
        return createTimeModel({
            initialTime: initialTimeInMilliseconds,
            direction: "backward",
        });
    }, [initialTimeInMilliseconds]);

    const { value } = useTimeModel(timer);

    return (
        <Alert severity={alertSeverity}>
            <strong>
                {label ? `${label} ` : ""}
                {`${value.h} hour${value.h > 1 ? "s" : ""}, ${value.m} minute${value.m > 1 ? "s" : ""} and ${value.s} second${
                    value.s > 1 ? "s" : ""
                }`}
            </strong>
        </Alert>
    );
};

export default Stopwatch;
