import { useCustomSelectFieldStylesProps } from "generics/types/Forms.type";

const useCustomSelectFieldStyles = ({ fullWidth }: useCustomSelectFieldStylesProps) => {
    return {
        customSelectField: {
            "& .select-form-control": {
                minWidth: 200,
                width: fullWidth ? "100%" : "inherit",

                "& .MuiSvgIcon-root[data-testid='ClearIcon']": {
                    position: "absolute",
                    right: "30px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                },
            },
        },
    };
};

export default useCustomSelectFieldStyles;
