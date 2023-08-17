import { useSetRecoilState } from "recoil";
import { SnackbarListState } from "shared/state/SnackbarList.state";
import { SnackbarItemType } from "shared/types/Snackbar.type";

const useDisplayAlert = () => {
    const setList = useSetRecoilState(SnackbarListState);

    const addAlert = (item: SnackbarItemType) => {
        setList((l) => {
            if (!l.some((item1) => item.id && item.id === item1.id)) {
                return [...l, item];
            }
            return l;
        });
    };

    return addAlert;
};

export default useDisplayAlert;
