const useGenericDataGridStyles = () => {
    return {
        genericDataGrid: {
            "& .MuiDataGrid-columnHeader": {
                "&:focus": {
                    outline: "none",
                },

                "& .MuiDataGrid-columnHeaderTitle": {
                    fontWeight: "bold",
                },
            },
        },
    };
};

export default useGenericDataGridStyles;
