import { Chip } from "@mui/material";
import { GenericMultiColorChipProps } from "shared/types/Chips.type";

const GenericMultiColorChip: React.FC<GenericMultiColorChipProps> = ({
    className,
    value,
    row,
    backgroundColor,
    color,
    disabled = false,
    onClick,
}) => {
    return (
        <Chip
            className={className}
            label={value}
            sx={{
                backgroundColor: backgroundColor,
                color: color,
                "&:hover": {
                    backgroundColor: backgroundColor,
                },
            }}
            onClick={onClick ? () => onClick(row) : undefined}
            disabled={disabled}
        />
    );
};

export default GenericMultiColorChip;
