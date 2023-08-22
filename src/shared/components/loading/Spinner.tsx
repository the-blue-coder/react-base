import { CircularProgress, CircularProgressProps } from "@mui/material";

const Spinner: React.FC<CircularProgressProps> = ({ ...props }) => {
    return <CircularProgress {...props} />;
};

export default Spinner;
