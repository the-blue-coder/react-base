import { GroupSharedPostFormFieldOptionType } from "modules/Facebook/GroupSharedPosts/types/GroupSharedPostsGrid.type";
import { atom } from "recoil";

export const GroupSharedPostStatusesState = atom<GroupSharedPostFormFieldOptionType[]>({
    key: "GroupSharedPostStatusesState",
    default: [],
});
