/* eslint-disable react-hooks/exhaustive-deps */
import SnackbarList from "shared/components/snackbar/SnackbarList";
import AppRouter from "shared/components/routes/AppRouter";
import { Box, CssBaseline } from "@mui/material";

const App: React.FC = () => {
    return (
        <Box>
            {/* {isLoading && <FullPageLoader />} */}
            <CssBaseline />
            <SnackbarList />
            <AppRouter />
        </Box>
    );
};

export default App;
