import { ReactNode } from "react";

export type GlobalRouteItemType = {
    subRoutes: RouteSectionType;
    layout: ReactNode;
};

export type GlobalRoutesType = {
    [key: string]: GlobalRouteItemType;
};

export type RouteSectionType = {
    [key: string]: RouteSectionItemType;
};

export type RouteSectionItemType = {
    title: string;
    path: string;
    container: ReactNode;
};
