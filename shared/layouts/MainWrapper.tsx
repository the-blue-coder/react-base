import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import useMainWrapperStyles from "../hooks/useMainWrapperStyles";
import { APP_NAME } from "../constants/appDetails";

const MainWrapper = () => {
    const styles = useMainWrapperStyles();

    return (
        <Container fluid style={styles.MainWrapper}>
            <Row>
                <Col xs={6}>
                    <strong>{APP_NAME}</strong>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <Outlet />
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    {APP_NAME} - {new Date().getFullYear()}
                </Col>
            </Row>
        </Container>
    );
};

export default MainWrapper;
