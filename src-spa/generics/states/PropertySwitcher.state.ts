import { atom } from "recoil";
import { PropertyOptionType, PropertyType } from "generics/types/PropertySwitcher.type";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const PropertiesState = atom<PropertyType[]>({
    key: "PropertiesState",
    default: [],
});

export const PropertiesOptionsState = atom<PropertyOptionType[]>({
    key: "PropertiesOptionsState",
    default: [],
});

export const SelectedPropertyState = atom<PropertyType | undefined>({
    key: "SelectedPropertyState",
    default: undefined,
    effects_UNSTABLE: [persistAtom],
});
