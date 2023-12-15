import { Box, BoxProps, Divider } from "@mui/material";

const GenericDivider: React.FC<BoxProps> = ({ ...props }) => {
    return (
        <Box {...props}>
            <Divider />
        </Box>
    );
};

export default GenericDivider;
