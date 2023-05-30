import { Button, Col, Container, Row } from "react-bootstrap";

import { useState } from "react";
import { Drinks, Meals, Title } from "..";

const Menu = () => {
  const [switchBetween, setSwitchBetween] = useState<boolean>(true);

  return (
    <Container>
      <Row>
        <Col className="mb-3">
          <Title text="Hanoi Bistro VT" />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center align-content-center gap-3 mb-3">
          <Button
            variant="outline-dark"
            className="btn btn-light"
            onClick={() => setSwitchBetween(true)}
          >
            Food
          </Button>
          <Button
            variant="outline-dark"
            className="btn btn-light"
            onClick={() => setSwitchBetween(false)}
          >
            Drinks
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>{switchBetween ? <Meals /> : <Drinks />}</Col>
      </Row>
    </Container>
  );
};

export default Menu;
