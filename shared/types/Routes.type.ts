import { ReactNode } from "react";

export type RouteSectionType = {
    [key: string]: RouteItemType;
};

export type RouteItemType = {
    path: string;
    container: ReactNode;
};
