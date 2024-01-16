import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/scss/custom-styles.scss";
import "./assets/scss/overrides.scss";
import "./assets/scss/sticky.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@mui/material";
import { createTheme, Theme } from "@mui/material/styles";
import { BASE_COLOR } from "shared/constants/colors.constant";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const defaultFontSize = 13;

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
            fontSize: 16,
        },
        button: {
            fontSize: defaultFontSize,
            textTransform: "none",
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                ".MuiDataGrid-root div[data-field='actions'] button": {
                    padding: 4,
                    minWidth: "initial",
                },
                ".MuiDataGrid-panel .MuiTextField-root": {
                    marginTop: 0,
                },
            },
        },
        MuiSnackbar: {
            styleOverrides: {
                root: {
                    "& .MuiAlert-root.error": {
                        backgroundColor: BASE_COLOR.primary,
                        color: BASE_COLOR.white,
                        "& .MuiAlert-icon": {
                            color: BASE_COLOR.white,
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
        MuiFormControl: {
            styleOverrides: {
                root: {
                    "& .MuiList-root": {
                        "& p": {
                            margin: 0,
                        },
                    },
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    "&.Mui-error": {
                        color: BASE_COLOR.primary,
                    },
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
        MuiListItem: {
            styleOverrides: {
                root: {
                    "& .MuiFormHelperText-root.Mui-error": {
                        color: BASE_COLOR.primary,
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    marginRight: "4px",
                },
                label: {
                    fontSize: defaultFontSize,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    marginRight: "20px",
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: "4px",
                    paddingBottom: "4px",
                    fontWeight: "bold",
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
