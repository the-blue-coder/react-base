import { atom } from "recoil";
import { SnackbarItemType } from "generics/types/Snackbar.type";

export const SnackbarListState = atom<Array<SnackbarItemType>>({
    key: "SnackbarListState",
    default: [],
});
