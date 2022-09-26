import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import FBPosterRouter from "./routes";
import { BASE_COLOR } from "./shared/constants/colors";

const theme = createTheme({
    palette: {
        primary: { main: BASE_COLOR.mainPrimary },
    },
});

const queryClient = new QueryClient();

const App: React.FC = () => {
    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <FBPosterRouter />
                </ThemeProvider>
            </QueryClientProvider>
        </RecoilRoot>
    );
};

export default App;
