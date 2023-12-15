import { JoinStatusSelectOptionType } from "modules/Facebook/Groups/types/GroupsGrid.type";
import { atom } from "recoil";

export const JoinStatusesState = atom<JoinStatusSelectOptionType[]>({
    key: "JoinStatusesState",
    default: [],
});
