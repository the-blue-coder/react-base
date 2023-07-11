import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/containers/Home";
import MainWrapper from "./shared/layouts/MainWrapper";

const VEMRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainWrapper />}>
                    <Route index element={<Home />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default VEMRouter;
