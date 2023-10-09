import { useSetRecoilState } from "recoil";
import { defaultFormMessages } from "shared/constants/errorMessages.constant";
import { SnackbarListState } from "shared/state/SnackbarList.state";
import { SnackbarItemType } from "shared/types/Snackbar.type";

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
            severity: "success",
            label: label ?? defaultFormMessages.success,
            autoHideDuration: autoHideDuration ?? defaultAutoHideDuration,
        });
    };

    const displayFailureAlert = (label?: string, autoHideDuration?: number) => {
        addAlert({
            severity: "error",
            label: label ?? defaultFormMessages.failure,
            autoHideDuration: autoHideDuration ?? defaultAutoHideDuration,
        });
    };

    return { displaySuccessAlert, displayFailureAlert };
};

export default useDisplayAlert;
