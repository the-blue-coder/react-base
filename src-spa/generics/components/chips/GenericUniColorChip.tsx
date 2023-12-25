import { Chip } from "@mui/material";
import { GenericUniColorChipProps } from "generics/types/Chips.type";

const GenericUniColorChip: React.FC<GenericUniColorChipProps> = ({ label, color = "primary" }) => {
    return <Chip label={label} color={color} />;
};

export default GenericUniColorChip;
