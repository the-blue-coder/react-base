import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/containers/Home";
import Main from "./shared/layouts/Main";

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route index element={<Home />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
