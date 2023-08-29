import { atom } from "recoil";
import { UserDetailsType } from "shared/types/UserDetails.type";

export const UserDetailsState = atom<UserDetailsType | null>({
    key: "UserDetailsState",
    default: null,
});

export const UserValidationStatusState = atom<boolean>({
    key: "UserValidationStatusState",
    default: false,
});
