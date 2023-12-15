import { useSetRecoilState } from "recoil";
import { defaultFormMessages } from "generics/constants/errorMessages.constant";
import { SnackbarListState } from "generics/states/SnackbarList.state";
import { SnackbarItemType } from "generics/types/Snackbar.type";

const useDisplayAlert = () => {
    const defaultAutoHideDuration = 15000;

    const setList = useSetRecoilState(SnackbarListState);

    const addAlert = (item: SnackbarItemType) => {
        setList((l) => {
            if (!l.some((item1) => item.id && item.id === item1.id)) {
                return [...l, item];
            }
            return l;
        });
    };

    const displaySuccessAlert = (label?: string, autoHideDuration?: number) => {
        addAlert({
            label: label ?? defaultFormMessages.success,
            autoHideDuration: autoHideDuration ?? defaultAutoHideDuration,
            AlertProps: {
                severity: "success",
            },
        });
    };

    const displayFailureAlert = (label?: string, autoHideDuration?: number) => {
        addAlert({
            label: label ?? defaultFormMessages.failure,
            autoHideDuration: autoHideDuration ?? defaultAutoHideDuration,
            AlertProps: {
                severity: "error",
            },
        });
    };

    return { displaySuccessAlert, displayFailureAlert };
};

export default useDisplayAlert;
