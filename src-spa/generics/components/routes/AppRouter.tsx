import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "generics/components/errors/PageNotFound";
import VideoEditor from "container/VideoEditor";

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Redirect / to overview */}
                <Route path="/" element={<VideoEditor />}></Route>

                {/* 404 page */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
