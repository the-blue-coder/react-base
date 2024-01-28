import { atom } from "recoil";
import { SingleActionType } from "shared/types/Misc.type";
import { PageExampleType } from "../types/PageExample.type";

export const SinglePageExampleActionState = atom<SingleActionType>({
    key: "SinglePageExampleActionState",
    default: "add",
});

export const SelectedSinglePageExampleState = atom<PageExampleType | undefined>({
    key: "SelectedSinglePageExampleState",
    default: undefined,
});
