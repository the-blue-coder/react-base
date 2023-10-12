import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/scss/custom-styles.scss";
import "./assets/scss/overrides.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@mui/material";
import { createTheme, Theme } from "@mui/material/styles";
import { BASE_COLOR } from "shared/constants/colors.constant";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const defaultFontSize = 15;

const theme: Theme = createTheme({
    typography: {
        fontSize: defaultFontSize,
        body1: {
            fontSize: defaultFontSize,
        },
    },
    palette: {
        primary: {
            main: BASE_COLOR.primary,
        },
    },
});

const queryClient = new QueryClient();

root.render(
    <RecoilRoot>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </QueryClientProvider>
    </RecoilRoot>
);
