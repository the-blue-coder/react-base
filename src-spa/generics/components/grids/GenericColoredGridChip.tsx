import { Chip } from "@mui/material";
import { GenericColoredGridChipProps } from "generics/types/Grids.type";

const GenericColoredGridChip: React.FC<GenericColoredGridChipProps> = ({ value, row, backgroundColor, color, onClick }) => {
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
        />
    );
};

export default GenericColoredGridChip;
