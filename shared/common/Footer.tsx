import { Col, Container, Row } from "react-bootstrap";
import { APP_NAME } from "../constants/appDetails";
import "../../assets/scss/shared/common/Footer.scss";

const Footer: React.FC = () => {
    return (
        <footer className="d-flex align-items-center justify-content-center">
            <Container fluid>
                <Row>
                    <Col xs={12} className="text-center">
                        {APP_NAME} - {new Date().getFullYear()}
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
