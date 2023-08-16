import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/scss/custom-styles.scss";
import "./assets/scss/overrides.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <>
        <App />
    </>
);
