import { useCustomRadiosFieldStylesProps } from "generics/types/Forms.type";

const useCustomRadiosFieldStyles = ({ isInline }: useCustomRadiosFieldStylesProps) => {
    return {
        customRadiosField: {
            "& .radio-group": {
                display: "flex",
                flexDirection: isInline ? "row" : "column",
            },

            "& p.Mui-error": {
                backgroundColor: "red",
            },
        },
    };
};

export default useCustomRadiosFieldStyles;
