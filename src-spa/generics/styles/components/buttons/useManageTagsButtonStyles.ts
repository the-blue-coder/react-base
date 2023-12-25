import { useManageTagsButtonStylesProps } from "generics/types/Buttons.type";

const useManageTagsButtonStyles = ({ variant, isInsideRJSF }: useManageTagsButtonStylesProps) => {
    const isTextVariant = variant === "text";

    const mainStyles = {
        paddingLeft: isTextVariant || isInsideRJSF ? 0 : 2,
    };

    const RJSFSpecificStyles = {
        padding: 0,
        justifyContent: "flex-start",
    };

    return isInsideRJSF
        ? {
              manageTagsButton: { ...mainStyles, ...RJSFSpecificStyles },
          }
        : { manageTagsButton: { ...mainStyles } };
};

export default useManageTagsButtonStyles;
