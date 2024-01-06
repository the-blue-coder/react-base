import { Chip, SxProps } from "@mui/material";
import { GenericMultiColorChipProps } from "generics/types/Chips.type";

const GenericMultiColorChip: React.FC<GenericMultiColorChipProps> = ({
    className,
    value,
    row,
    backgroundColor,
    color,
    disabled = false,
    noMr = false,
    onClick,
}) => {
    let sx: SxProps = {
        backgroundColor: backgroundColor,
        color: color,
        "&:hover": {
            backgroundColor: backgroundColor,
        },
    };

    if (noMr) {
        sx = {
            ...sx,
            marginRight: 0,
        };
    }

    return <Chip className={className} label={value} sx={sx} onClick={onClick ? () => onClick(row) : undefined} disabled={disabled} />;
};

export default GenericMultiColorChip;
