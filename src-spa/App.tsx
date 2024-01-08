import SnackbarList from "generics/components/snackbar/SnackbarList";
import AppRouter from "generics/components/routes/AppRouter";
import { Box, CssBaseline } from "@mui/material";

const App: React.FC = () => {
    return (
        <Box>
            <CssBaseline />
            <SnackbarList />
            <AppRouter />
        </Box>
    );
};

export default App;
