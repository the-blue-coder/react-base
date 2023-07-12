import { Col, Container, Row } from "react-bootstrap";
import { APP_NAME } from "../constants/appDetails";
import "../../assets/scss/shared/common/Header.scss";

const Header: React.FC = () => {
  return (
    <header className="d-flex align-items-center justify-content-center">
      <Container fluid>
        <Row>
          <Col xs={6} className="logo-container">
            <strong className="text-primary">{APP_NAME}</strong>
          </Col>

          <Col xs={6}>Menu</Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
