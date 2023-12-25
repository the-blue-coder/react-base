import { atom } from "recoil";
import { TagType } from "generics/types/Tags.type";

export const CurrentTagsState = atom<TagType[]>({
    key: "CurrentTagsState",
    default: [],
});

export const ManageTagsDialogOpenState = atom<boolean>({
    key: "ManageTagsDialogOpenState",
    default: false,
});

export const UpdateEntityTagsDialogOpenState = atom<boolean>({
    key: "UpdateEntityTagsDialogOpenState",
    default: false,
});
