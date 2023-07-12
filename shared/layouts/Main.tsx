import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../../assets/scss/shared/layouts/Main.scss";

const Main: React.FC = () => {
  return (
    <div id="main-layout">
      <Header />

      <section id="content">
        <Outlet />
      </section>

      <Footer />
    </div>
  );
};

export default Main;
