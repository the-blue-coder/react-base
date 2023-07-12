import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../../assets/scss/shared/layouts/Main.scss";

const Main: React.FC = () => {
    return (
        <div id="main-layout">
            <Header />

            <section id="content">
                <Container fluid>
                    <Row>
                        <Col xs={12}>
                            <Outlet />
                        </Col>
                    </Row>
                </Container>
            </section>

            <Footer />
        </div>
    );
};

export default Main;
