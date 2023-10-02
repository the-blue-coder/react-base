import { ReactNode } from "react";

export type SectionTitleProps = {
    children: ReactNode;
};

export type SectionSubTitleProps = {
    children: ReactNode;
};

export type GenericDialogTitleProps = {
    id: string;
    color?: string;
    children: ReactNode;
};
