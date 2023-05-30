import logo from "./assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Menu, OpenHours, Footer } from "./components";

function App() {
  return (
    <Container>
      <div className="d-flex justify-content-center align-align-items-center">
        <Row className="d-flex justify-content-between">
          <Col xs={12} sm={12} md={3} className="vertical-space">
            <Image src={logo} rounded fluid />
            <OpenHours />
          </Col>
          <Col xs={12} sm={12} md={8}>
            <Menu />
          </Col>
        </Row>
      </div>
      <Footer />
    </Container>
  );
}

export default App;
