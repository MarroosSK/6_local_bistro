import { Col, Container, Row } from "react-bootstrap";
import { contactInfo } from "../../helpers/openingHours";

const Footer = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center border-top mx-auto">
        <Col xs={12} sm={12} md={6}>
          <h3 className="h3 text-center">Contact</h3>
          <p className="text-center">{contactInfo.name}</p>
          <p className="text-center">{contactInfo.address}</p>
          <p className="text-center">{contactInfo.postal}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
