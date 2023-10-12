const useGenericDataGridStyles = () => {
    return {
        genericDataGrid: {
            minHeight: 400,

            "& .MuiDataGrid-columnHeaderTitle": {
                fontWeight: "bold",
            },
        },
    };
};

export default useGenericDataGridStyles;
