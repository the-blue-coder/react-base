import SnackbarList from "shared/components/snackbar/SnackbarList";
import AppRouter from "shared/components/routes/AppRouter";
import { Box, CssBaseline } from "@mui/material";

const App: React.FC = () => {
    return (
        <Box>
            {/* Needs implementation of page loading {pageIsLoading && <FullPageLoader />} */}
            <CssBaseline />
            <SnackbarList />
            <AppRouter />
        </Box>
    );
};

export default App;
