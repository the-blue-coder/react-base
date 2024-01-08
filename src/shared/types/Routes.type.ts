import { ReactNode } from "react";

export type RoutesType = {
    [key: string]: RouteItemType;
};

export type RouteItemType = {
    title: string;
    path: string;
    container: ReactNode;
};
