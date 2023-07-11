import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "react-bootstrap";
import AppRouter from "./routes";

const theme = {};

const queryClient = new QueryClient();

const App = () => {
    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <AppRouter />
                </ThemeProvider>
            </QueryClientProvider>
        </RecoilRoot>
    );
};

export default App;
