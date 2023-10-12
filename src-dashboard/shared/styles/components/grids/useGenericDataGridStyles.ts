const useGenericDataGridStyles = () => {
    return {
        genericDataGrid: {
            width: "100%",
            height: 400,

            "& .MuiDataGrid-columnHeaderTitle": {
                fontWeight: "bold",
            },
        },
    };
};

export default useGenericDataGridStyles;
