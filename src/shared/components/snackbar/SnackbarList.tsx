/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, IconButton, Alert, Snackbar, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { SnackbarListState } from "../../states/SnackbarList.state";
import { Close } from "@mui/icons-material";
import { useCallback } from "react";
import _ from "lodash";
import { SnackbarItemType, SnackbarListProps } from "shared/types/Snackbar.type";

const SnackbarList: React.FC = ({ limit }: SnackbarListProps) => {
    const [list, setList] = useRecoilState(SnackbarListState);

    const removeFromList = (index: number) => {
        setList((l) => {
            const list = [...l];
            list.splice(index, 1);
            return list;
        });
    };

    const handleActionClick = (item: SnackbarItemType, index: number) => {
        removeFromList(index);
        item.action?.onClick?.(item);
    };

    const renderAction = (item: SnackbarItemType, index: number) => {
        return (
            <>
                <Button color="inherit" size="small" onClick={() => handleActionClick(item, index)}>
                    {item.action?.label}
                </Button>

                <IconButton aria-label="close" color="inherit" size="small" onClick={() => removeFromList(index)}>
                    <Close fontSize="inherit" />
                </IconButton>
            </>
        );
    };

    const getList = useCallback(() => {
        if (limit && list.length > limit) {
            return list.slice(list.length - (limit || 0));
        }

        return list;
    }, [limit, list]);

    return (
        <>
            {getList().map((item, index) => {
                const severity = item.AlertProps?.severity ?? "error";

                return (
                    <Snackbar
                        key={index}
                        className="snackbar-item"
                        open={true}
                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                        {..._.omit(item, ["AlertProps", "action"])}
                        style={{ top: index > 0 ? 70 * index + 10 : undefined, ...item.style }}
                        onClose={() => removeFromList(index)}
                        autoHideDuration={item?.autoHideDuration ?? 15000}
                    >
                        <Alert
                            className={severity}
                            severity={severity}
                            action={item.action && renderAction(item, index)}
                            onClose={() => removeFromList(index)}
                            {...item.AlertProps}
                        >
                            {String(item.label)
                                .split("|")
                                .map((line, index) => (
                                    <Typography key={index}>
                                        <strong>{line}</strong>
                                    </Typography>
                                ))}
                        </Alert>
                    </Snackbar>
                );
            })}
        </>
    );
};

export default SnackbarList;
