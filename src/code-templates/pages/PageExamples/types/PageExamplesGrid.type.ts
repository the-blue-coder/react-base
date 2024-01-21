import { MutateAsyncFunctionType } from "shared/types/Misc.type";
import { PageExampleType } from "./SinglePageExample.type";

export type PageExamplesGridButtonActionType = (pageExample: PageExampleType) => void;

export type usePageExamplesGridActionsProps = {
    selectedSinglePageExample: PageExampleType | undefined;
    fetchPageExamplesSummary: MutateAsyncFunctionType;
    fetchPageExamples: MutateAsyncFunctionType;
};

export type usePageExamplesGridContentProps = {
    onEditSinglePageExampleClick: PageExamplesGridButtonActionType;
    onDeleteSinglePageExampleClick: PageExamplesGridButtonActionType;
};
