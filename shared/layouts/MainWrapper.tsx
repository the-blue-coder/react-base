import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "../../assets/scss/shared/layouts/MainWrapper.scss";
import { APP_NAME } from "../constants/appDetails";

const MainWrapper: React.FC = () => {
    return (
        <Container fluid className="main-wrapper">
            <Row>
                <Col xs={6} className="logo-container">
                    <strong>{APP_NAME}</strong>
                </Col>

                <Col xs={6} className="text-end">
                    Menu
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <Outlet />
                </Col>
            </Row>

            <Row>
                <Col xs={12} className="text-center">
                    {APP_NAME} - {new Date().getFullYear()}
                </Col>
            </Row>
        </Container>
    );
};

export default MainWrapper;
