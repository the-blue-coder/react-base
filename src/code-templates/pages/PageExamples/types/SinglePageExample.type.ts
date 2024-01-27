import { GenericConfirmationDialogProps, GenericSingleEntityDialogProps } from "shared/types/Dialogs.type";
import { CallbackFunctionType, MutateAsyncFunctionType } from "shared/types/Misc.type";

export type PageExampleType = {
    id: number;
    firstname: string;
    name: string;
    age: number;
    genderId: number;
    gender: string;
    email: string;
};

export type SinglePageExampleFormDataType = {
    firstname: string;
    name: string;
    age: number;
    genderId: number;
    email: string;
};

export type UpdateSinglePageExampleDialogProps = GenericSingleEntityDialogProps & {
    selectedSinglePageExample: PageExampleType | undefined;
};

export type DeleteSinglePageExampleConfirmationDialogProps = GenericConfirmationDialogProps & {
    selectedSinglePageExample: PageExampleType | undefined;
};

export type usePageExampleToolbarActionsProps = {
    fetchPageExamplesSummary: MutateAsyncFunctionType;
    handleUpdatePageExamplesGridRows: CallbackFunctionType;
};
