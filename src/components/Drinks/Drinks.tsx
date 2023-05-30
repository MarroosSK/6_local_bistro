import { useState } from "react";
import { drinks_sodas, drinks_alcohol } from "../../helpers/products";
import { Container, Col, Row, Button, Table } from "react-bootstrap";

const Drinks = () => {
  const [toggleSoda, setToggleSoda] = useState<boolean>(false);
  const [toggleAlc, setToggleAlc] = useState<boolean>(false);
  return (
    <Container>
      <Row>
        <Button
          variant="outline-dark"
          className="btn btn-light"
          onClick={() => setToggleSoda(!toggleSoda)}
        >
          Sodas
        </Button>
        {toggleSoda && (
          <Col xs={12} md={12}>
            <Table>
              <thead>
                <tr>
                  <th>Soda</th>
                  <th>Price</th>
                </tr>
              </thead>
              {drinks_sodas.map((oneDrink) => (
                <>
                  <tbody>
                    <tr>
                      <td>{oneDrink.name}</td>
                      <td>{oneDrink.price}</td>
                    </tr>
                  </tbody>
                </>
              ))}
            </Table>
          </Col>
        )}
      </Row>
      <Row>
        <Button
          variant="outline-dark"
          className="btn btn-light"
          onClick={() => setToggleAlc(!toggleAlc)}
        >
          Alcoholic Beverage
        </Button>
        {toggleAlc && (
          <Col xs={12} md={12}>
            <Table>
              <thead>
                <tr>
                  <th>Beverage</th>
                  <th>Price</th>
                </tr>
              </thead>
              {drinks_alcohol.map((oneDrink) => (
                <>
                  <tbody>
                    <tr>
                      <td>{oneDrink.name}</td>
                      <td>{oneDrink.price}</td>
                    </tr>
                  </tbody>
                </>
              ))}
            </Table>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Drinks;
