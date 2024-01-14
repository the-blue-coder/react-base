const useRjsfFormFieldsRectifications = () => {
    const getPaddingTopsFixStyle = (fieldOrders: number[]) => {
        const fieldSelectors = fieldOrders.map((fieldOrder) => `& > div:nth-of-type(${fieldOrder})`).join(", ");

        return {
            "& .form-group": {
                "& > div:nth-of-type(1) > div:nth-of-type(1)": {
                    [fieldSelectors]: {
                        paddingTop: 0,
                    },
                },
            },
        };
    };

    return {
        getPaddingTopsFixStyle,
    };
};

export default useRjsfFormFieldsRectifications;
