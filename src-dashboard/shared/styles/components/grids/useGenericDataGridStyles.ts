import { BASE_COLOR } from "shared/constants/colors.constant";

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

                "& .MuiDataGrid-filterIcon": {
                    color: BASE_COLOR.primary,
                },
            },

            "& .MuiDataGrid-cell": {
                overflowX: "auto !important",
            },
        },
    };
};

export default useGenericDataGridStyles;
