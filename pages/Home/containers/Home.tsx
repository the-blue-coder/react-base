import { Button, Col, Container, Row } from "react-bootstrap";

const Home: React.FC = () => {
  return (
    <Container fluid>
      <Row>
        <Col
          xs={12}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          Hello world
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
