import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "react-bootstrap";
import AppRouter from "./routes";
import { BASE_COLOR } from "./shared/constants/colors";

const theme = {
  palette: {
    primary: BASE_COLOR.mainPrimary,
  },
};

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
