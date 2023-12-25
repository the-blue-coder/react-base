import { Chip } from "@mui/material";
import { GenericMultiColorChipProps } from "generics/types/Chips.type";

const GenericMultiColorChip: React.FC<GenericMultiColorChipProps> = ({ value, row, backgroundColor, color, disabled = false, onClick }) => {
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

export default GenericMultiColorChip;
