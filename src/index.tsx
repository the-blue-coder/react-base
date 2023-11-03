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
    palette: {
        primary: {
            main: BASE_COLOR.primary,
        },
    },
    typography: {
        fontSize: defaultFontSize,
        body1: {
            fontSize: defaultFontSize,
        },
        h6: {
            fontSize: 18,
        },
        button: {
            fontSize: defaultFontSize,
            textTransform: "none",
        },
    },
    components: {
        MuiSnackbar: {
            styleOverrides: {
                root: {
                    "& .MuiAlert-root.error": {
                        backgroundColor: BASE_COLOR.primary,
                        color: "#ffffff",
                        "& .MuiAlert-icon": {
                            color: "#ffffff",
                        },
                    },
                    "& .MuiAlert-message p": {
                        fontSize: "inherit",
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow: "none",
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    padding: "4px",
                    border: "1px solid rgba(224, 224, 224, 1)",
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    marginTop: "-16px",
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    marginRight: "4px",
                },
            },
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
