import useRjsfFormFieldsRectifications from "shared/hooks/useRjsfFormFieldsRectifications";

const useSinglePageExampleDialogStyles = () => {
    const { getPaddingTopsFixStyle } = useRjsfFormFieldsRectifications();

    return {
        singlePageExampleDialog: {
            ...getPaddingTopsFixStyle([4]),
        },
    };
};

export default useSinglePageExampleDialogStyles;
