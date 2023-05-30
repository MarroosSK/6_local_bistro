import { Card, Container, Col, Row } from "react-bootstrap";
import { openingHours } from "../../helpers/openingHours";

const OpenHours = () => {
  return (
    <Container className="mt-3 my-3">
      <Row>
        <Col xs={12} sm={8} md={3}>
          <Card
            bg={"light"}
            text={"dark"}
            style={{ width: "15rem" }}
            className="d-flex justify-content-center mb-2 border-0"
          >
            <Card.Header className="h-2 fw-bold">Open Hours</Card.Header>

            {openingHours.map((oh) => (
              <div key={oh.day}>
                <Card.Body className="d-flex justify-content-between align-content-center p-1 border-0">
                  <Card.Title> {oh.day} </Card.Title>
                  <Card.Text>{oh.open}</Card.Text>
                </Card.Body>
              </div>
            ))}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OpenHours;
