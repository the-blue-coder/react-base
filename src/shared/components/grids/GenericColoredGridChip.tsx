import { Chip } from "@mui/material";
import { GenericColoredGridChipProps } from "shared/types/Grids.type";

const GenericColoredGridChip: React.FC<GenericColoredGridChipProps> = ({
    value,
    row,
    backgroundColor,
    color,
    disabled = false,
    onClick,
}) => {
    return (
        <Chip
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

export default GenericColoredGridChip;
