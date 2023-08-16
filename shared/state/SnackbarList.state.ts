import { atom } from "recoil";
import { SnackbarItemType } from "shared/types/Snackbar.type";

export const SnackbarListState = atom<Array<SnackbarItemType>>({
    key: "SnackbarListState",
    default: [],
});
