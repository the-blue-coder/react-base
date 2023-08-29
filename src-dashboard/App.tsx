import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme, Theme } from "@mui/material/styles";
import { BASE_COLOR } from "shared/constants/colors.constant";
import SnackbarList from "shared/components/snackbar/SnackbarList";
import AppRouter from "shared/components/routes/AppRouter";

const theme: Theme = createTheme({
    typography: {
        fontSize: 13,
    },
    palette: {
        primary: {
            main: BASE_COLOR.primary,
        },
    },
});

const queryClient = new QueryClient();

const App: React.FC = () => {
    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <SnackbarList />
                    <AppRouter />
                </ThemeProvider>
            </QueryClientProvider>
        </RecoilRoot>
    );
};

export default App;
